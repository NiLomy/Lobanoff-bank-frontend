import { category, requisites } from "@/api/api";
import { CategoryType } from "@/types/CategoryType";

export async function getAllCategories(
  access: string,
): Promise<CategoryType | null> {
  try {
    const data = await category.get("all", {
      headers: {
        Authorization: "Bearer " + access,
      },
    });
    return data.data;
  } catch (e) {
    console.log(e);
    return null;
  }
}
