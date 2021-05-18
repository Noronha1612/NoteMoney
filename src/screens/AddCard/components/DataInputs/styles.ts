import styled from 'styled-components/native';
import { colors } from '../../../../../styles/colors';
import { fonts } from '../../../../../styles/fonts';

export const NumberInputWrapper = styled.View`
    margin: 32px 0;

    justify-content: center;

    flex-direction: row;
`;

export const InputLabel = styled.Text`
    font-family: ${ fonts.regular };
    font-size: 21px;
    color: ${ colors.text };
`;

export const NumberInput = styled.TextInput`
    text-align: center;
    text-decoration: underline;

    font-family: ${ fonts.regular };
    font-size: 21px;
    color: ${ colors.text };
`;