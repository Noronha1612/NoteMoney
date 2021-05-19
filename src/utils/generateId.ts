import crypto from 'crypto';
import store from '../store';

export default function generateId(): string {
    let id: string;

    while(true) {
        id = crypto.randomBytes(16).toString('hex');

        let idAlreadyExist = false;

        const { cards } = store.getState();
        cards.forEach((card) => {
            if ( card.id === id ) idAlreadyExist = true;
        });

        if ( !idAlreadyExist ) break;
    }

    return id;
}