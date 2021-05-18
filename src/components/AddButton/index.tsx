import React from 'react';
import { Feather } from '@expo/vector-icons';

import { 
    Container, Content,
} from './styles';
import { colors } from '../../../styles/colors';
import { useNavigation } from '@react-navigation/core';

const AddButton: React.FC = () => {
    const navigation = useNavigation();
    
    const handleAddCard = () => {
        navigation.navigate('AddCard');
    }

    return (
        <Container>
            <Content onPress={handleAddCard}>
                <Feather name='plus' size={ 48 } color={ colors.shape } />
            </Content>
        </Container>
    );
}

export default AddButton;