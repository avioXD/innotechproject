/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import {
  useColorScheme,
} from 'react-native';

import Navigator from './screens/Navigator';
import { DarkTheme, LightTheme, ThemeSelector } from './theme';
 
 


 
const App = () => {
  const colorScheme = useColorScheme();
  const themeStyles = ThemeSelector(colorScheme)
  const color = colorScheme == 'dark' ? DarkTheme: LightTheme


  return (
     <Navigator theme={themeStyles} color={color} ></Navigator>
  );
};

 
export default App;
