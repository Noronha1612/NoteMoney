import { ICard } from "../store/Cards/types";

export function calculateCardPercentage(card: ICard, formatted?: boolean) {
    const percentageValue = card.currentValue / card.referralValue;

    const valueParts = String(percentageValue * 100).split('.') // Ex 12.4912 == [ '12', '4912' ]

    if ( valueParts.length === 1 ) return percentageValue * 100;
    
    valueParts[1] = valueParts[1].slice(0, 2);

    return valueParts.join('.');
}