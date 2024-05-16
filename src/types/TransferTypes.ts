export type PhoneTransferForm = {
  from: number;
  phone: string;
  amount: number;
  message: string | null;
};

export type BetweenAccountsTransferForm = {
  from: number;
  to: number;
  amount: number;
  message: string | null;
};

export type CardTransferForm = {
  from: number;
  card: string;
  amount: number;
  message: string | null;
};
