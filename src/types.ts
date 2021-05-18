export type ICardType = 'm-revenue' | 'a-revenue' | 'saving' | '';

export interface ICard {
    title: string;
    currentValue: number;
    referralValue: number;
    type: ICardType;
    replenishmentDay?: number;
}