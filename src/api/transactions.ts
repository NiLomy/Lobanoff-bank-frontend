import { transactions } from "@/api/api";
import { CurrencyType } from "@/types";
import {
  BetweenAccountsTransferForm,
  CardTransferForm,
  PhoneTransferForm,
} from "@/types/TransferTypes";
import { TransactionType } from "@/types/TransactionType";

export async function getTransactionsReceipts(
  id: string,
  access: string,
): Promise<TransactionType[] | null> {
  try {
    const data = await transactions.get("receipts/user/" + id, {
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

export async function getTransactionsExpenses(
  id: string,
  access: string,
): Promise<TransactionType[] | null> {
  try {
    const data = await transactions.get("expenses/user/" + id, {
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

export async function transferByPhone(
  form: PhoneTransferForm,
  access: string,
): Promise<TransactionType | null> {
  try {
    const data = await transactions.post("transfer/phone", form, {
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

export async function transferBetweenAccounts(
  form: BetweenAccountsTransferForm,
  access: string,
): Promise<TransactionType | null> {
  try {
    const data = await transactions.post("transfer/between-accounts", form, {
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

export async function transferByCard(
  form: CardTransferForm,
  access: string,
): Promise<TransactionType | null> {
  try {
    const data = await transactions.post("transfer/card", form, {
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
