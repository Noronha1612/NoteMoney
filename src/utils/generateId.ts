import store from '../store';

export default function generateId(): number {
    const { cards } = store.getState();

    if ( cards.length === 0 ) return 1;

    return cards[cards.length - 1].id + 1;
}