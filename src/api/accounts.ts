import { accounts } from "./api";
import { AccountItemType, AccountTypesInterface } from "@/types";

export async function getAccountsTypes(
  access: string,
): Promise<AccountTypesInterface[] | null> {
  try {
    const data = await accounts.get("types", {
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

export async function createAccount(
  access: string,
  form: {
    name: string;
    currencyId: string;
    typeId: string;
    ownerId: string;
  },
): Promise<boolean> {
  try {
    await accounts.post("create", form, {
      headers: {
        Authorization: access,
      },
    });
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function getAllUserAccounts(
  access: string,
  id: string,
): Promise<AccountItemType[] | null> {
  try {
    const data = await accounts.get("all/user/" + id, {
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

export async function getAccountInfo(
  access: string,
  id: string,
): Promise<AccountItemType | null> {
  try {
    const data = await accounts.get(id, {
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
