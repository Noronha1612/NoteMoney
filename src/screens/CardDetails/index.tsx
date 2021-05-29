import { useNavigation, useRoute } from '@react-navigation/core';
import React from 'react';
import { Feather } from '@expo/vector-icons';

import { ICard } from '../../store/Cards/types';

import { ReturnButton } from '../AddCard/styles';
import { 
    BulbBorderBottom, 
    Container, 
    Title, 
    ScreenDescription,
    Balance,
    BalanceSign,
    BalanceValue,
    InfoBox,
    InfoText,
    InfoIcon,
    CardTypeReferenceValue,
    CardTypeReferenceValueWrapper,
    TypeLabel,
    ActionButton,
    ButtonsWrapper
} from './styles';
import { colors } from '../../../styles/colors';
import { calculateCardPercentage } from '../../utils/calculateCardPercentage';
import { ScrollView } from 'react-native-gesture-handler';

const CardDetails: React.FC = () => {
    const navigation = useNavigation();
    const { card, color } = useRoute().params as { card: ICard, color: string };

    return (
        <Container>
            <ReturnButton
                onPress={ () => navigation.goBack() }
            >
                <Feather name='chevron-left' color={ colors.text } size={ 32 } />
            </ReturnButton>

            <ScrollView
                contentContainerStyle={{ flexGrow: 1, paddingBottom: 64, paddingHorizontal: 64 }}
            >
                <Title>{card.title}</Title>
                <BulbBorderBottom color={ color } />

                <ScreenDescription>
                    Balance
                </ScreenDescription>

                <Balance>
                    <BalanceSign color={ color }>
                        {card.currentValue >= 0 ? '+' : '-'}
                    </BalanceSign>
                    <BalanceValue>{ card.currentValue }</BalanceValue>
                </Balance>

                <InfoBox>
                    <InfoIcon name="info" />
                    <InfoText>
                        This is equivalent 
                        to {calculateCardPercentage(card)}% 
                        of your referral value
                    </InfoText>
                </InfoBox>

                <CardTypeReferenceValueWrapper>
                    <TypeLabel>
                        {
                            card.type === 'saving' 
                            ? 'Goal:'
                            : 'Revenue:'
                        }
                    </TypeLabel>
                    <CardTypeReferenceValue>
                        { card.referralValue }
                    </CardTypeReferenceValue>
                </CardTypeReferenceValueWrapper>

                <ButtonsWrapper>
                    <ActionButton activeOpacity={.6} color={ colors.green }>
                        <Feather name='plus' size={ 40 } color={ colors.white } />
                    </ActionButton>
                    <ActionButton activeOpacity={.6} color={ colors.red }>
                        <Feather name='minus' size={ 40 } color={ colors.white } />
                    </ActionButton>
                    <ActionButton activeOpacity={.6} color={ colors.shape }>
                        <Feather name='edit-2' size={ 40 } color={ colors.white } />
                    </ActionButton>
                </ButtonsWrapper>
            </ScrollView>
        </Container>
    );
}

export default CardDetails;