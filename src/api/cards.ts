import { cards } from "@/api/api";
import { CardType } from "@/types";
import { CreateCardRequest } from "@/types/CreateCardRequest";

export async function getCardById(
  cardId: string,
  access: string,
): Promise<CardType | null> {
  try {
    const data = await cards.get(cardId, {
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

export async function createCard(
  request: CreateCardRequest,
  access: string,
): Promise<CardType | null> {
  try {
    const data = await cards.post("create", request, {
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
