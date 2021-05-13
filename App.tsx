import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useFonts } from 'expo-font';
import {
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_700Bold
  } from '@expo-google-fonts/roboto';

import Loading from './src/utils/Loading';
import { Text } from 'react-native';

export default function App() {
    const [ fontsLoaded ] = useFonts({
      Roboto_300Light,
      Roboto_400Regular,
      Roboto_400Regular_Italic,
      Roboto_500Medium,
      Roboto_700Bold
    });
    
    return (
        <>
          <StatusBar style="auto" />
          {
            !fontsLoaded 
            ? <Loading />
            : <Text>Hello World!</Text>
          }
        </>
    );
}
