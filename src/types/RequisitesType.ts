import {UserType} from "@/types/UserType";

export type RequisitesType = {
    id: number;
    payee: UserType;
    accountNumber: string;
    code: string;
    bankName: string;
    corrAccount: string;
};
