import React from 'react';
import Lottie from 'lottie-react-native';

import { Container } from './styles';

const Loading: React.FC = () => {
    return (
        <Container>
            <Lottie 
                source={ require('../../assets/loadingAnimation.json') }
                autoPlay
                loop
            />
        </Container>
    );
}

export default Loading;