import { CardType } from "./CardType";

export type AccountType = {
  id: string;
  balance: number;
  name: string;
  currency: "$" | "₽";
  cards: CardType[];
};
