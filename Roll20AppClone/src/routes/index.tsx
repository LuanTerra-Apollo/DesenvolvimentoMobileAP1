import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StackRoutes } from './StackNavigator';

export const Routes = () => {
    return (
        <NavigationContainer>
            <StackRoutes/>
        </NavigationContainer>
    )
}
