import AsyncStorage from "@react-native-async-storage/async-storage";
import { ICard } from "../store/Cards/types";

export class AsyncStore {
    private readonly _storageKey = '@notemoney/cards';

    async getList(): Promise<ICard[]> {
        const list = await AsyncStorage.getItem(this._storageKey);

        if ( !list ) return [];
        return JSON.parse(list);
    }

    async setList(list: ICard[]): Promise<void> {
        try {
            await AsyncStorage.removeItem(this._storageKey);
            await AsyncStorage.setItem(this._storageKey, JSON.stringify(list));
        } catch (err) {
            console.log(err);
        }
    }
}