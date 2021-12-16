import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from 'react-native'
import Home from './screens/home';
import Dex from './screens/fruitdexlist';
import FruitPage from './screens/fruitpage';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Dex" component={Dex}/>
            <Stack.Screen name="FruitPage" component={FruitPage}/>
        </Stack.Navigator>
    );
};

export default StackNavigator
