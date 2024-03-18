/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import WebViewScreen from './src/screens/WebViewScreen';

const Root = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Root.Navigator>
          <Root.Screen name="HomeScreen" component={HomeScreen} />
          <Root.Screen name="WebViewScreen" component={WebViewScreen} />
        </Root.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
