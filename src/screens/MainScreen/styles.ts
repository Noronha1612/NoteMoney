import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../../styles/colors';
import { fonts } from '../../../styles/fonts';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${ colors.background };
`;

export const Header = styled.View`
    width: 100%;
    height: 72px;
    border-bottom-width: 1px;
    border-bottom-color: ${ colors.shape };

    flex-direction: row;
    justify-content: space-between;
    padding: 0 32px;
`;

export const LogoContainer = styled.View`
    height: 100%;
    flex-direction: row;
    align-items: center;
`;

export const TitleWrapper = styled.View`
    margin-left: 4px;
    max-width: 156px;
    transform: translateY(-4px);
`;

export const Title = styled.Text`
    font-size: 18px;
    font-family: ${ fonts.medium };
    color: ${ colors.textGreen };
`; 

export const TitleDescription = styled.Text`
    font-size: 10px;
    font-family: ${ fonts.light };
    color: ${ colors.textGreenLight };
    max-width: 120px;
`;

export const ThemeSwitcher = styled.View`
    height: 100%;
    flex-direction: row;
    align-items: center;
`;

export const Content = styled.View`
    flex: 1;
    padding: 32px;
`;