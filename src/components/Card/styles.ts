import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../../styles/colors';
import { fonts } from '../../../styles/fonts';

export const Container = styled.View`
    width: 44%;
    height: 128px;

    margin-top: 32px;
`;

export const Content = styled(TouchableOpacity)<{ color: string }>`
    width: 100%;
    height: 100%;

    border-radius: 24px;
    border-width: 1px;
    border-color: ${ props => props.color };
    
    align-items: center;
`

export const TitleWrapper = styled.View`
    height: 78px;
    width: 100%;
    max-width: 90%;

    justify-content: center;
    align-items: center;
`;

export const CardTitle = styled.Text`
    font-family: ${ fonts.regular };
    color: ${ colors.text };
    font-size: 16px;
    text-align: center;
`;

export const BalanceWrapper = styled.View<{ color: string }>`
    border-radius: 25px;
    border-width: .5px;
    border-color: ${ props => props.color };
    
    height: 50px;
    width: 100%;

    flex-direction: row;

    justify-content: center;
    align-items: center;
`;

export const BalanceSituation = styled.Text<{ color: string }>`
    margin-right: 4px;
    font-size: 18px;
    color: ${ props => props.color };
`;

export const BalanceValue = styled.Text`
    color: ${ colors.text };
`;