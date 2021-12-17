/**
 * Regional FruitDex by TrivTech
 */
import React from 'react';
import type { Node } from 'react';
import{ NavigationContainer } from '@react-navigation/native';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './util/store'
import NetInfo from '@react-native-community/netinfo';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import tw from 'tailwind-rn';
import StackNavigator from './StackNavigator';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']);
LogBox.ignoreAllLogs();

const unsubscribe = NetInfo.addEventListener(state => {
  console.log("Is Connected", state.isConnected);
})
unsubscribe();

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
            <StackNavigator/>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#f42fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 50,
    fontFamily: 'sans-serif',
  }
});

export default App;
