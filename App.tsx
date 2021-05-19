import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';
import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';

import Loading from './src/utils/Loading';

import Routes from './src/routes';

import { colors } from './styles/colors';

import store from './src/store';


const Container = styled.View`
  flex: 1;
  padding-top: 48px;
  background-color: ${ colors.background };
`;


export default function App() {
  const [ fontsLoaded ] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_700Bold
  });

  return (
    <Provider store={ store }>
      <Container>
        <StatusBar style="auto" />
        {
          !fontsLoaded 
          ? <Loading />
          : <Routes />
        }
      </Container>
    </Provider>
  );
}