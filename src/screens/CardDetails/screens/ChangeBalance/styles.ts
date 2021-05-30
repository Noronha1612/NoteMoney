import styled, { css } from 'styled-components/native';
import { ChangeBalanceTypes } from '.';
import { colors } from '../../../../../styles/colors';
import { fonts } from '../../../../../styles/fonts';

export const Container = styled.SafeAreaView`
    flex: 1;
    background: ${ colors.background };
`;

export const Content = styled.KeyboardAvoidingView`
    flex: 1;

    justify-content: center;
    align-items: center;

    padding: 0 48px;
`;

export const InputWrapper = styled.View<{ type: ChangeBalanceTypes }>`
    width: 100%;

    margin-top: 32px;

    flex-direction: row;
    justify-content: center;
    align-items: center;

    border-bottom-width: 2px;
    border-radius: 1px;
    border-color: ${ props => props.type === 'add' ? colors.green : colors.red };
`;

const textGenericStyle = css`
    font-family: ${ fonts.regular };
    font-size: 32px;
`;

export const SignPrefix = styled.Text<{ type: ChangeBalanceTypes }>`
    color: ${ props => props.type === 'add' ? colors.green : colors.red };

    ${ textGenericStyle }
`;

export const BalanceInput = styled.TextInput`
    color: ${ colors.text };
    ${ textGenericStyle }
    padding-left: 12px;
`;

export const Title = styled.Text`
    font-family: ${ fonts.regular };
    font-size: 32px;
    line-height: 37.5px;
    color: ${ colors.text };
`;

export const SubmitWrapper = styled.View`
    width: 100%;
    padding: 0 40px;
    margin: 48px 0;
`;

export const SubmitButton = styled.TouchableOpacity<{ type: ChangeBalanceTypes }>`
    width: 100%;
    padding: 20px 0;

    border-radius: 16px;

    align-items: center;

    background: ${ props => {
        if ( props.disabled )
            return props.type === 'add' ? colors.greenTransparent : colors.redTransparent
        return props.type === 'add' ? colors.green : colors.red
    }};
`;

export const SubmitText = styled.Text`
    color: ${ colors.white };
    font-size: 24px;
    font-family: ${ fonts.regular };
`;