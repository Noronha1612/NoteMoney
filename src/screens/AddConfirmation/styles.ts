import styled from 'styled-components/native';
import { colors } from '../../../styles/colors';
import { fonts } from '../../../styles/fonts';

export const Container = styled.SafeAreaView`
    flex: 1;
    background: ${ colors.background };
    justify-content: center;
    align-items: center;
`;

export const Description = styled.Text`
    text-align: center;
    color: ${ colors.textLowContrast };
    font-family: ${ fonts.regular };
    font-size: 24px;
    
    margin-top: 32px;
`;