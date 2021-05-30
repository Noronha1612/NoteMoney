import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';

import { 
    Container, 
    Title,
    Content,
    InputWrapper,
    SignPrefix,
    BalanceInput,
    SubmitWrapper,
    SubmitButton,
    SubmitText
} from './styles';

import { colors } from '../../../../../styles/colors';
import { ReturnButton } from '../../../AddCard/styles';
import handleSetMoneyInput from '../../../../utils/handleSetMoneyInput';
import { ICard } from '../../../../store/Cards/types';
import CardsController from '../../../../store/Cards/controller';
import capitalizeString from '../../../../utils/capitalizeString';

export type ChangeBalanceTypes = 'add' | 'remove'

interface RouteProps {
    card: ICard,
    type: ChangeBalanceTypes
}

const ChangeBalance: React.FC = () => {
    const navigation = useNavigation();
    const { card, type } = useRoute().params as RouteProps;

    const [ balance, setBalance ] = useState('');

    const operateNumber = () => {
        if ( type === 'add' ) return card.currentValue + Number(balance);
        return card.currentValue - Number(balance);
    }

    const handleSubmit = () => {
        CardsController.updateCard({
            ...card,
            currentValue: operateNumber()
        });

        navigation.goBack();
    }

    return (
        <Container>
            <ReturnButton
                onPress={ () => navigation.goBack() }
            >
                <Feather name='chevron-left' color={ colors.text } size={ 32 } />
            </ReturnButton>

            <Content>
                <Title>
                    { 
                        type === 'add'
                        ? 'Add balance'
                        : 'Remove balance'   
                    }
                </Title>

                <InputWrapper type={ type } >
                    <SignPrefix type={ type } >{ type === 'add' ? '+' : '-' }</SignPrefix>
                    <BalanceInput 
                        placeholder="0.00" 
                        keyboardType="numeric"
                        onChangeText={ (value) => handleSetMoneyInput(value, setBalance) }
                    />
                </InputWrapper>
            </Content>

            <SubmitWrapper>
                <SubmitButton 
                    activeOpacity={.65} 
                    type={ type }
                    disabled={ !balance }
                    onPress={ handleSubmit }
                >
                    <SubmitText>{capitalizeString(type)}</SubmitText>
                </SubmitButton>
            </SubmitWrapper>
        </Container>
    );
}

export default ChangeBalance;