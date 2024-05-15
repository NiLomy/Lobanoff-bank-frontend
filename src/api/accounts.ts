import {AccountType, LoginForm, RegistrationForm, TokenType} from "@/types";
import { auth } from "./api";
import { RegistryInterface } from "@/app/(auth)/register/page";

export async function getAllUserAccounts(
    userId: string,
): Promise<AccountType[] | null> {
    try {
        return await auth.get("all/user/" + userId);
    } catch (e) {
        console.log(e);
        return null;
    }
}

export async function createAccount(form: LoginForm): Promise<AccountType | null> {
    try {
        const data = await auth.post("create", form);
        return data.data;
    } catch (e) {
        console.log(e);
        return null;
    }
}
