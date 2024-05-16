import { CardType } from "./CardType";
import { CurrencyType } from "@/types/CurrencyType";

export interface AccountTypesInterface {
  id: string;
  name: string;
}

export type AccountItemType = {
  id: string;
  name: string;
  deposit: number;
  currency: CurrencyType;
  type: string;
  cards: CardType[];
  main: boolean;
};
