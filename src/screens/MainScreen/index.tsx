import React, { useEffect, useState } from 'react';
import { ListRenderItem } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { FlatList, Switch } from 'react-native-gesture-handler';

import { 
    Container,
    LogoContainer,
    Header,
    Title,
    TitleDescription,
    TitleWrapper,
    ThemeSwitcher,
    Content
} from './styles';
import { colors } from '../../../styles/colors';
import LogoSvg from '../../assets/svgs/logoSvg';

import Card from '../../components/Card';
import AddButton from '../../components/AddButton';

import { ICard } from '../../store/Cards/types';
import { useSelector } from 'react-redux';
import { ApplicationStore } from '../../store';

const MainScreen: React.FC = () => {
    const [ theme, setTheme ] = useState<'dark' | 'light'>('dark');
    const cardList = useSelector((store: ApplicationStore) => store.cards);

    const toggleTheme = (value: boolean) => {
        if ( value ) setTheme('dark');
        else setTheme('light');
    }

    const renderCard: ListRenderItem<ICard> = ({ item, index }) => {
        if ( index === cardList.length )
            return <AddButton  />

        return <Card item={ item } />;
    }

    return (
        <Container>
            <Header>
                <LogoContainer>
                    <LogoSvg />
                    <TitleWrapper>
                        <Title>Note Money</Title>
                        <TitleDescription>
                            Simple and easy way to 
                            manage your money
                        </TitleDescription>
                    </TitleWrapper>
                </LogoContainer>

                <ThemeSwitcher>
                    <FontAwesome 
                        color={ colors.shape }
                        name='sun-o' 
                        style={{ marginRight: 4 }}
                        size={ 28 }
                    />

                    <Switch
                        trackColor={{ false: colors.shape, true: colors.green }}
                        thumbColor={ colors.white }
                        ios_backgroundColor={ colors.background }
                        onValueChange={toggleTheme}
                        value={theme === 'dark'}
                    />

                    <FontAwesome 
                        color={ colors.shape }
                        name='moon-o'
                        style={{ marginLeft: 4 }}
                        size={ 28 }
                    />
                </ThemeSwitcher>
            </Header>

            <Content>
                <FlatList 
                    data={[...cardList, 'Add Button']}
                    keyExtractor={(e, index) => String(index)}
                    renderItem={renderCard}
                    numColumns={ 2 }
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                />
            </Content>
        </Container>
    );
}

export default MainScreen;