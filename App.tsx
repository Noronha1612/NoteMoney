import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
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
import { AsyncStore } from './src/services/asyncStore';
import { add_card } from './src/store/Cards/actions';

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

  const [ storeLoaded, setStoreLoaded ] = useState(false);

  useEffect(() => {
    const syncAsyncStorageWithReduxStore = async () => {
      const asyncStore = new AsyncStore();

      const asyncStorageList = await asyncStore.getList();

      asyncStorageList.forEach(card => {
        store.dispatch(add_card(card));
      });

      setStoreLoaded(true);
    };

    syncAsyncStorageWithReduxStore();
  }, []);

  return (
    <Provider store={ store }>
      <Container>
        <StatusBar style="auto" />
        {
          fontsLoaded && storeLoaded
          ? <Routes />
          : <Loading />
        }
      </Container>
    </Provider>
  );
}