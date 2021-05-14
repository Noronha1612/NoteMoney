import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../../styles/colors';

export const Container = styled.View`
    width: 44%;
    height: 128px;

    margin-top: 32px;
`;

export const Content = styled(TouchableOpacity)`
    width: 100%;
    height: 100%;
    
    justify-content: center;
    align-items: center;

    border-width: 2px;
    border-color: ${ colors.shape };
    border-radius: 24px;
    border-style: dashed;
`;
