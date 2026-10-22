// Reads SOYL's live menu from Qlub's public menu API so the site stays in sync
// with whatever the restaurant edits in Qlub. Not an official/documented API:
// if its shape changes, getMenu() throws and ISR keeps serving the last good page.

const API_BASE = "https://api-ae.qlub.cloud/v1/menu/ae/soyl-d3/422/_/_/0b31d40521";
const REVALIDATE_SECONDS = 3600;

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  photo?: string;
};

export type MenuSection = {
  id: string;
  name: string;
  items: MenuItem[];
};

type QlubMedia = { originalFile?: string; thumbnail?: { url?: string } } | null;

type QlubProduct = {
  id: string;
  name: string;
  description?: string | null;
  price: number;
  status: string;
  snoozed?: boolean;
  coverMedia?: QlubMedia;
};

type QlubCategory = { id: string; name: string; status: string };

type QlubMenu = { id: string; status: string; categories: QlubCategory[] };

async function qlubFetch<T>(path: string): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, {
    next: { revalidate: REVALIDATE_SECONDS },
  });
  if (!response.ok) {
    throw new Error(`Qlub menu request failed: ${response.status} ${path}`);
  }
  const body = (await response.json()) as { data: T };
  return body.data;
}

const tidy = (value?: string | null) => (value ?? "").replace(/\s+/g, " ").trim();

// Qlub stores some category names in all caps ("PERSIAN GRILL") and some in
// lowercase ("cold appetizer"); normalise them to title case.
const titleCase = (value: string) =>
  tidy(value)
    .toLowerCase()
    .replace(/(^|[\s&/-])(\p{L})/gu, (_, separator: string, letter: string) => separator + letter.toUpperCase());

async function getCategoryItems(menuId: string, categoryId: string): Promise<MenuItem[]> {
  const items: MenuItem[] = [];

  for (let page = 0; page < 10; page++) {
    const data = await qlubFetch<{ products: QlubProduct[]; hasMorePage: boolean }>(
      `/${menuId}/category/${categoryId}?limit=100&page=${page}`,
    );

    for (const product of data.products) {
      if (product.status !== "ENABLED" || product.snoozed) continue;
      items.push({
        id: product.id,
        name: tidy(product.name),
        description: tidy(product.description),
        price: product.price,
        image: product.coverMedia?.thumbnail?.url || product.coverMedia?.originalFile || undefined,
        photo: product.coverMedia?.originalFile || product.coverMedia?.thumbnail?.url || undefined,
      });
    }

    if (!data.hasMorePage) break;
  }

  return items;
}

export async function getMenu(): Promise<MenuSection[]> {
  const menus = await qlubFetch<QlubMenu[]>("/menu?limit=100&page=0");
  const menu = menus.find((entry) => entry.status === "ENABLED") ?? menus[0];
  if (!menu) throw new Error("Qlub returned no menu");

  const categories = menu.categories.filter((category) => category.status === "ENABLED");
  const sections = await Promise.all(
    categories.map(async (category) => ({
      id: category.id,
      name: titleCase(category.name),
      items: await getCategoryItems(menu.id, category.id),
    })),
  );

  return sections.filter((section) => section.items.length > 0);
}

// For pages: never fail a deploy because Qlub is down (return null at build
// time); at runtime, rethrow so ISR keeps serving the last good version.
export async function loadMenu(): Promise<MenuSection[] | null> {
  try {
    return await getMenu();
  } catch (error) {
    if (process.env.NEXT_PHASE === "phase-production-build") {
      console.error(error);
      return null;
    }
    throw error;
  }
}
