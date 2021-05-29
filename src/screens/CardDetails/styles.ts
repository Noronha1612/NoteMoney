import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { colors } from '../../../styles/colors';
import { fonts } from '../../../styles/fonts';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
    flex: 1;
    background: ${ colors.background };
`;

export const Title = styled.Text`
    text-align: center;
    font-family: ${ fonts.regular };
    font-size: 24px;
    color: ${ colors.text };

    padding: 0 8px;
`;

export const BulbBorderBottom = styled.View<{ color: string }>`
    width: 100%;
    height: 4px;

    margin-top: 6px;

    border-radius: 10px;
    background: ${ props => props.color };
`;

export const ScreenDescription = styled.Text`
    margin-top: 32px;

    text-align: center;
    font-family: ${ fonts.light };
    font-size: 24px;
    color: ${ colors.text };
`;

export const Balance = styled.View`
    flex-direction: row;
    margin-top: 32px;
    text-align: center;
    
    justify-content: center;
    align-items: center;
`;

export const BalanceSign = styled.Text<{ color: string }>`
    color: ${ props => props.color };
    font-size: 32px;
    font-family: ${ fonts.medium };

    margin-right: 6px;
`;

export const BalanceValue = styled.Text`
    color: ${ colors.text };
    font-size: 48px;
    font-family: ${ fonts.medium };
`;

export const InfoBox = styled.View`
    padding: 16px;
    margin-top: 16px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-width: 3px;
    border-color: ${ colors.shape };
    border-style: dashed;
    border-radius: 12px;
`;

export const InfoIcon = styled(Feather)`
    color: ${ colors.shape };
    font-size: 32px;
    margin-right: 12px;
`

export const InfoText = styled.Text`
    max-width: 80%;
    
    font-size: 14px;
    font-family: ${ fonts.light };
    color: ${ colors.shape };
`;

export const CardTypeReferenceValueWrapper = styled.View`
    flex-direction: row;

    justify-content: center;
    align-items: center;

    margin-top: 12px;
    margin-bottom: 48px;
`;

export const TypeLabel = styled.Text`
    margin-right: 4px;

    font-family: ${ fonts.light };
    font-size: 14px;
    color: ${ colors.shape };
`;

export const CardTypeReferenceValue = styled.Text`
    font-family: ${ fonts.light };
    font-size: 14px;
    color: ${ colors.green };
`;

export const ActionButton = styled(TouchableOpacity)<{ color: string }>`
    margin-bottom: 12px;

    justify-content: center;
    align-items: center;
    padding: 16px 0;

    background: ${ props => props.color };
    border-radius: 16px;
`;

export const ButtonsWrapper = styled.View`
    flex: 1;
    
    justify-content: flex-end;
`;