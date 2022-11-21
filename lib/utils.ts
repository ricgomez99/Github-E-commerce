import { getItems } from "../services/itemService";

export async function getPathsFromIds() {
  const items = await getItems();
  const ids = items.map((item: any) => {
    return {
      params: {
        id: convertToPath(item.title),
      },
    };
  });

  return ids;
}

export async function getItemData(id: number) {
  const items = await getItems();

  const product = items.find((item: any) => convertToPath(item.title) === id);

  return {
    id: id,
    data: product,
  };
}

export function convertToPath(title: any) {
  return title.toLowerCase().replace(/\s/g, "-");
}
