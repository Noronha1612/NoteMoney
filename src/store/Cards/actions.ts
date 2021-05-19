import { action } from "typesafe-actions";
import { CardsActions, ICard } from "./types";

export const add_card = (card: ICard) => action(CardsActions.AddCard, card);
export const update_card = (newCard: ICard) => action(CardsActions.UpdateCard, newCard);
export const delete_card = (cardId: number) => action(CardsActions.DeleteCard, cardId);