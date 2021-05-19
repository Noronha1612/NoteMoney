import { combineReducers } from 'redux';

import CardsReducer from './Cards';

export const rootReducer = combineReducers({
    cards: CardsReducer
});