import { CategoryType } from "@/types/CategoryType";
import { chat } from "@/api/api";
import { MessageType } from "@/types/MessageType";

export async function getAllMessages(
  id: string,
): Promise<MessageType[] | null> {
  try {
    const data = await chat.get(id);
    return data.data;
  } catch (e) {
    console.log(e);
    return null;
  }
}
