import store from '../store';

export default function generateId(): number {
    let id: number;

    const { cards } = store.getState();

    if ( cards.length === 0 ) id = 1;
    else id = cards[cards.length - 1].id + 1;

    while(true) {
        let idAlreadyExist = false;
        
        cards.forEach(card => {
            if ( card.id === id ) idAlreadyExist = true;
        });

        if (!idAlreadyExist) break;

        id++;
    }

    return id;
}