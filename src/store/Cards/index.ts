import { Reducer } from "redux";
import { CardsActions, CardsData, ICard } from "./types";

const reducer: Reducer<CardsData> = (state, action) => {
    if ( !state ) return [];

    switch(action.type) {
        case CardsActions.AddCard:
            const cardToAdd: ICard = action.payload;

            return [ ...state, cardToAdd ];

        case CardsActions.DeleteCard:
            const cardToDeleteId: string = action.payload;

            return state.filter(card => card.id !== cardToDeleteId);

        case CardsActions.UpdateCard:
            const updatedCard: ICard = action.payload;

            return state.map(card => {
                if ( card.id === updatedCard.id ) return updatedCard;
                return card;
            });

        default:
            return state;
    }
};

export default reducer;