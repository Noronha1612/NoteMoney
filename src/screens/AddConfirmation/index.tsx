import React from 'react';

import { Container, Description } from './styles';

import Thumb from '../../assets/svgs/thumb';

const AddConfirmation: React.FC = () => {
    return (
        <Container>
            <Thumb />
            <Description>
                NoteMoney successfully {'\n'}
                created
            </Description>
        </Container>
    );
}

export default AddConfirmation;