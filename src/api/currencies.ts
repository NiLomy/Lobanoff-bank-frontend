import { auth, currency } from "@/api/api";
import { CurrencyType, TokenType } from "@/types";

export async function getCurrencies(
  access: string,
): Promise<CurrencyType[] | null> {
  try {
    const data = await currency.get("all", {
      headers: {
        Authorization: access,
      },
    });
    return data.data;
  } catch (e) {
    console.log(e);
    return null;
  }
}
