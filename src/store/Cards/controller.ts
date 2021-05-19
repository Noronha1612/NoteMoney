import store from "..";
import { ICard } from "./types";

import {
    add_card,
    delete_card,
    update_card
} from './actions';

import { AsyncStore } from "../../services/asyncStore";
const asyncStore = new AsyncStore();

export default class CardsController {
    static async addCard(card: ICard) {
        store.dispatch(add_card(card));
        await this.syncReduxStoreWithAsyncStorage();
    }

    static async updateCard(newCard: ICard) {
        store.dispatch(update_card(newCard));
        await this.syncReduxStoreWithAsyncStorage();
    }

    static async deleteCard(cardId: number) {
        store.dispatch(delete_card(cardId));
        await this.syncReduxStoreWithAsyncStorage();
    }

    static async syncReduxStoreWithAsyncStorage() {
        const { cards: currentCards } = store.getState();
        await asyncStore.setList(currentCards);
    }
}