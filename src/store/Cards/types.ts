export enum CardsActions {
    AddCard = 'add_card',
    UpdateCard = 'update_card',
    DeleteCard = 'delete_card'
}

export type ICardType = 'm-revenue' | 'a-revenue' | 'saving' | '';

export type ICardWithoutId = Omit<ICard, 'id'>;

export interface ICard {
    id: string;
    title: string;
    currentValue: number;
    referralValue: number;
    type: ICardType;
    replenishmentDay?: number;
}

export type CardsData = ICard[];