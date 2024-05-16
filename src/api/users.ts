import { ChangeUserInterface } from "@/types";
import { users } from "@/api/api";
import { UserType } from "@/types/UserType";

export async function getUserAll(access: string): Promise<UserType[] | null> {
  try {
    const data = await users.get("all", {
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

export async function getUser(
  access: string,
  id: string,
): Promise<UserType | null> {
  try {
    const data = await users.get(id, {
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

export async function putUser(
  access: string,
  form: ChangeUserInterface,
): Promise<UserType | null> {
  try {
    const data = await users.put("update", form, {
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

export async function deleteUser(
  access: string,
  id: string,
): Promise<UserType | null> {
  try {
    const data = await users.delete("delete/" + id, {
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
