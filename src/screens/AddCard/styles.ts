import { Picker } from '@react-native-community/picker';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { colors } from '../../../styles/colors';
import { fonts } from '../../../styles/fonts';

export const Container = styled.SafeAreaView`
    flex: 1;

    background: ${ colors.background };
`;

export const Content = styled.KeyboardAvoidingView`
    flex: 1;
    
    padding: 0 64px;
`;

export const ReturnButton = styled(TouchableOpacity)`
    width: 50px;
    height: 50px;

    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    text-align: center;
    margin-top: 12px;
    margin-bottom: 32px;
    
    color: ${ colors.text };
    font-size: 24px;
    font-family: ${ fonts.regular };
`;

export const InputWrapper = styled.View`
    margin: 32px 0;

    width: 100%;

    align-items: center;
    text-align: center;
    
    border-bottom-width: 1px;
    border-bottom-color: ${ colors.shape };
`;

export const InputTitle = styled.TextInput`
    color: ${ colors.text }; 
    font-family: ${ fonts.regular };

    text-align: center;
`;

export const InputPicker = styled(Picker)<{ labelLenght: number }>`
    width: ${ ({ labelLenght }) => labelLenght * 9.5 }px;
    color: ${ colors.text };
    font-family: ${ fonts.regular };

    background-color: ${ colors.background }; 
`;

export const ButtonWrapper = styled.View`
    flex: 1;
    justify-content: flex-end;
    padding-bottom: 32px;
`;

export const SaveButton = styled(TouchableOpacity)`
    background: ${ props => props.disabled ? colors.greenTransparent : colors.green };

    height: 64px;
    width: 100%;
    border-radius: 16px;

    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
    font-family: ${ fonts.medium };
    font-size: 21px;
    color: ${ colors.white };
`;