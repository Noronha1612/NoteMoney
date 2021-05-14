import React from 'react';
import { Feather } from '@expo/vector-icons';

import { 
    Container, Content,
} from './styles';
import { colors } from '../../../styles/colors';

const AddButton: React.FC = () => {
    return (
        <Container>
            <Content>
                <Feather name='plus' size={ 48 } color={ colors.shape } />
            </Content>
        </Container>
    );
}

export default AddButton;