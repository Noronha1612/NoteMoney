import React, { useMemo } from 'react';
import { useNavigation } from '@react-navigation/core';
import { colors } from '../../../styles/colors';
import { ICard } from '../../store/Cards/types';

import { 
    BalanceSituation,
    BalanceValue,
    BalanceWrapper,
    CardTitle, 
    Container,
    Content,
    TitleWrapper
} from './styles';
import { calculateCardPercentage } from '../../utils/calculateCardPercentage';

interface CardProps {
    item: ICard;
}

const Card: React.FC<CardProps> = ({ item }) => {
    const navigation = useNavigation();

    const percentage = useMemo(() => {
        return item.currentValue / item.referralValue
    }, [ item ]);

    const cardColor = useMemo(() => {
        if ( percentage < 0 ) return colors.red;
        if ( percentage < 0.1 ) return colors.yellow;
        return colors.green;
    }, [  percentage ]);

    const formatBalance = (value: number) => Math.abs(value).toFixed(2).replace('.', ',');

    return (
        <Container>
            <Content 
                onPress={() => navigation.navigate('CardDetails', {
                    card: item,
                    color: cardColor
                })}
                color={ cardColor }
            >
                <TitleWrapper>
                    <CardTitle>{ item.title }</CardTitle> 
                </TitleWrapper>

                <BalanceWrapper color={ cardColor }>
                    <BalanceSituation color={ cardColor }>{ item.currentValue >= 0 ? '+' : '-' }</BalanceSituation>
                    <BalanceValue>
                        {formatBalance(item.currentValue)} ({calculateCardPercentage(item)}%)
                    </BalanceValue>
                </BalanceWrapper>
            </Content>
        </Container>
    );
}

export default Card;