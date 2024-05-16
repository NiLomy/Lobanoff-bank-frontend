import { cardInfos } from "@/api/api";
import { CardInfoResponse } from "@/types/CardInfoResponse";

export async function getAllCardInfos(
  access: string,
): Promise<CardInfoResponse | null> {
  try {
    const data = await cardInfos.get("all", {
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
