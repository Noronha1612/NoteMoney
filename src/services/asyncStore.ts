import AsyncStorage from "@react-native-async-storage/async-storage";
import { ICard } from "../types";

export class AsyncStore {
    private readonly _storageKey = '@notemoney/cards';

    async getList(): Promise<ICard[]> {
        try {
            const cardListStr = await AsyncStorage.getItem(this._storageKey);
        
            return cardListStr 
                ? JSON.parse(cardListStr) as ICard[]
                : [];
        } catch(err) {
            console.log(err);
            return [];
        }
    }

    async store(card: ICard): Promise<void> {
        try {
            const oldCardList = await this.getList();

            await AsyncStorage.setItem(
                this._storageKey, 
                JSON.stringify([...oldCardList, card])
            );

        } catch(err) {
            console.log(err);
        }
    }
}