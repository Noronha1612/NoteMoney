import React, { useMemo } from 'react';
import { colors } from '../../../styles/colors';
import { ICard } from '../../types';

import { 
    BalanceSituation,
    BalanceValue,
    BalanceWrapper,
    CardTitle, 
    Container,
    Content,
    TitleWrapper
} from './styles';

interface CardProps {
    item: ICard;
}

const Card: React.FC<CardProps> = ({ item }) => {
    const percentage = useMemo(() => {
        return item.currentValue / item.referralValue
    }, [ item ]);

    const cardColor = useMemo(() => {
        if ( percentage < 0 ) return colors.red;
        if ( percentage < 0.1 ) return colors.yellow;
        return colors.green;
    }, [  percentage ]);

    const formatPercentage = (value: number) => {
        const valueParts = String(value * 100).split('.') // Ex 12.4912 == [ '12', '4912' ]

        if ( valueParts.length === 1 ) return value * 100;
        
        valueParts[1] = valueParts[1].slice(0, 2);

        return valueParts.join('.');
    }

    const formatBalance = (value: number) => Math.abs(value).toFixed(2).replace('.', ',');

    return (
        <Container>
            <Content color={ cardColor }>
                <TitleWrapper>
                    <CardTitle>{ item.title }</CardTitle> 
                </TitleWrapper>

                <BalanceWrapper color={ cardColor }>
                    <BalanceSituation color={ cardColor }>{ item.currentValue > 0 ? '+' : '-' }</BalanceSituation>
                    <BalanceValue>
                        {formatBalance(item.currentValue)} ({formatPercentage(percentage)}%)
                    </BalanceValue>
                </BalanceWrapper>
            </Content>
        </Container>
    );
}

export default Card;