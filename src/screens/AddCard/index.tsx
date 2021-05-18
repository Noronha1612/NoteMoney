import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { Picker } from '@react-native-community/picker';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ItemValue } from '@react-native-community/picker/typings/Picker';

import { 
    ButtonText,
    Container,
    Content,
    InputPicker,
    InputTitle,
    InputWrapper, 
    ReturnButton, 
    SaveButton,
    ButtonWrapper,
    Title 
} from './styles';

import { colors } from '../../../styles/colors';
import { fonts } from '../../../styles/fonts';
import DataInputs from './components/DataInputs';
import { ICard, ICardType } from '../../types';

const AddCard: React.FC = () => {

    
    const [ title, setTitle ] = useState('');
    const [ initialValueStr, setInitialValueStr ] = useState('');
    const [ referralValueStr, setReferralValueStr ] = useState('');
    const [ replenishmentDay, setReplenishmentDay ] = useState('');
    const [ cardType, setCardType ] = useState<ICardType>('');
    const [ cardTypeLabel, setCardTypeLabel ] = useState('Control type');
    
    const [ card, setCard ] = useState<ICard>({
        title,
        currentValue: Number(initialValueStr),
        referralValue: Number(referralValueStr),
        type: '',
        replenishmentDay: undefined
    });

    const handleChangeCardType = (value: ICardType) => {
        setCardType(value);

        if ( value === '' ) setCardTypeLabel('Control type');
        if ( value === 'a-revenue' ) setCardTypeLabel('Annual revenue');
        if ( value === 'm-revenue' ) setCardTypeLabel('Monthly revenue');
        if ( value === 'saving' ) setCardTypeLabel('Saving ');
    }

    const handleSetMoneyInput = (value: string, setter: (value: string) => void) => {
        // TODO: Validate money input
        if ( isNaN(Number(value)) ) return;

        setter(value);
    }

    const handleDayChange = (value: string) => {
        if ( isNaN(Number(value)) ) return;

        if ( Math.abs(Number(value)) > 30 ) setReplenishmentDay('30');
        else setReplenishmentDay(value);
    }

    const isCardFilled = () => {
        let isFilled = true;

        Object.keys(card)
        .filter((key) => card.type !== 'saving' || key !== 'replenishmentDay' )
        .forEach((key) => {
            const cardKey = key as keyof ICard;

            if ( !card[cardKey] ) isFilled = false;
        });

        return isFilled;
    }

    useEffect(() => {
        setCard({
            title,
            currentValue: Number(initialValueStr),
            referralValue: Number(referralValueStr),
            type: cardType,
            replenishmentDay: replenishmentDay ? Number(replenishmentDay) : undefined
        });
    }, [ title, initialValueStr, referralValueStr, replenishmentDay, cardType ]);

    return (
        <Container>
            <ReturnButton>
                <Feather name='chevron-left' color={ colors.text } size={ 32 } />
            </ReturnButton>

            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
            >
                <Content>
                    <Title>Add <Text style={{ fontFamily: fonts.italic }}>NoteMoney</Text></Title>
                
                    <InputWrapper>
                        <InputTitle
                            placeholder="Note title"
                            value={ title }
                            onChangeText={ setTitle }
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <InputPicker
                            selectedValue={ cardType }
                            onValueChange={ handleChangeCardType as (itemValue: ItemValue) => void }
                            labelLenght={ cardTypeLabel.length }
                        >
                            <Picker.Item label='Control type' value='' />
                            <Picker.Item label='Monthly revenue' value='m-revenue' />
                            <Picker.Item label='Annual revenue' value='a-revenue' />
                            <Picker.Item label='Saving' value='saving' />
                        </InputPicker>
                    </InputWrapper>
                    
                    {
                        !!cardType && 
                        <DataInputs
                            currentCard={{ 
                                ...card, 
                                currentValue: initialValueStr, 
                                referralValue: referralValueStr,
                                replenishmentDay
                            }}
                            savingStyle={ cardType === 'saving' }
                            onDayChange={ handleDayChange }
                            onGoalChange={ (value) => handleSetMoneyInput(value, setReferralValueStr) }
                            onValueChange={ (value) => handleSetMoneyInput(value, setInitialValueStr) }
                        /> 
                    }

                    <ButtonWrapper>
                        <SaveButton 
                            onPress={ () => { console.log(card) } }
                            disabled={ !isCardFilled() }
                            activeOpacity={.75}
                        >
                            <ButtonText>Save</ButtonText>
                        </SaveButton>
                    </ButtonWrapper>
                </Content>
            </ScrollView>
        </Container>
    );
}

export default AddCard;