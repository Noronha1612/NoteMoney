import { createStore, Store } from 'redux';
import { CardsData } from './Cards/types';
import { rootReducer } from './rootReducer';

export interface ApplicationStore {
    cards: CardsData
}

const store: Store<ApplicationStore> = createStore(rootReducer);

export default store;
