import { requisites } from "@/api/api";
import { RequisitesType } from "@/types/RequisitesType";

export async function getRequisitesByAccountId(
  accountId: string,
  access: string,
): Promise<RequisitesType | null> {
  try {
    const data = await requisites.get("account/" + accountId, {
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
