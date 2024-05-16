import { CurrencyType } from "@/types/CurrencyType";
import { AccountItemType } from "@/types/AccountType";

export type TransactionType = {
  id: number;
  date: Date;
  currency: CurrencyType;
  type: string;
  message: string | null;
  cashback: number;
  amount: number;
  category: string | null;
  from: AccountItemType;
  to: AccountItemType;
};
