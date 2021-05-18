import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';

import AddCard from './screens/AddCard';
import MainScreen from './screens/MainScreen';

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
    return (
        <NavigationContainer>
            <Navigator
                headerMode='none'
                screenOptions={{
                    headerShown: false
                }}
            >

                <Screen name='Home' component={ MainScreen } />
                <Screen name='AddCard' component={ AddCard } />

            </Navigator>
        </NavigationContainer>
    );  
}

export default Routes;