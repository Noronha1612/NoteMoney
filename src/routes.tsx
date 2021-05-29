import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';

import AddCard from './screens/AddCard';
import AddConfirmation from './screens/AddConfirmation';
import CardDetails from './screens/CardDetails';
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
                <Screen name='AddConfirmation' component={ AddConfirmation } />
                <Screen name='CardDetails' component={ CardDetails } />

            </Navigator>
        </NavigationContainer>
    );  
}

export default Routes;