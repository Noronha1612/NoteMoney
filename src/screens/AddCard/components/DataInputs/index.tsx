import React from 'react';
import { ICard } from '../../../../types';

import { 
    InputLabel, 
    NumberInput, 
    NumberInputWrapper 
} from './styles';

interface DataInputsProps {
    currentCard: {
        [Property in keyof ICard]: string;
    };
    savingStyle?: boolean;
    onValueChange?: (value: string) => void;
    onGoalChange?: (value: string) => void;
    onDayChange?: (value: string) => void;
    
}

const DataInputs: React.FC<DataInputsProps> = ({ currentCard, savingStyle, onValueChange, onGoalChange, onDayChange }) => {

    return (
        <>
            <NumberInputWrapper>
                <InputLabel>{ savingStyle ? 'Initial value' : 'Revenue' }: </InputLabel>
                <NumberInput 
                    value={ currentCard.currentValue } 
                    onChangeText={ onValueChange } 
                    keyboardType="number-pad" 
                    placeholder={ savingStyle ? '125.00' : '2000.00' } 
                />
            </NumberInputWrapper>
            <NumberInputWrapper>
                <InputLabel>{ savingStyle ? 'Goal' : 'Replenishment day' }: </InputLabel>
                {
                    savingStyle 
                    ? <NumberInput value={ currentCard.referralValue } onChangeText={ onGoalChange } keyboardType="number-pad" placeholder="800,00" />
                    : <NumberInput value={ currentCard?.replenishmentDay ? String(currentCard?.replenishmentDay) : '' } onChangeText={ onDayChange } keyboardType="number-pad" placeholder="23" />
                }
            </NumberInputWrapper>
        </>
    );
}

export default DataInputs;