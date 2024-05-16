import { ChangeUserInterface, UserType } from "@/types";
import { passports } from "@/api/api";
import {
  PassportChangeType,
  PassportType,
  UpdatePassportRequest,
} from "@/types/PassportType";

export async function getPassport(
  access: string,
  id: string,
): Promise<PassportType | null> {
  try {
    const data = await passports.get(id, {
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

export async function putPassport(
  access: string,
  form: UpdatePassportRequest,
): Promise<PassportType | null> {
  try {
    console.log(form);
    const data = await passports.put("update", form, {
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
