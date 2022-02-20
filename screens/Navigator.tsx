
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '../RootNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import AuthScreen from './AuthScreen'

import React, { useEffect, useState } from 'react';
import Signup from './Signup';
import DashBoardScreen from './Home/DashBoardScreen';
import TabBar from './Home/components/TabBar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'native-base';
import { Text } from 'react-native-svg';
import { styles } from '../theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RefferScreen from './Home/RefferScreen';
 


function Home({params, route}) {
  console.log(params)
  const Tab = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
      <Tab.Navigator initialRouteName="dashboard"   screenOptions={{
             headerShown: false
          }} >
      <Tab.Screen name="dashboard" component={DashBoardScreen}  initialParams={{ theme: route.params.theme, color: route.params.color }}/>
      <Tab.Screen  name='reffer' component={RefferScreen} initialParams={{ theme: route.params.theme, color: route.params.color }}/>
    </Tab.Navigator>
    <TabBar theme={route.params.theme} color={route.params.color} />
    </SafeAreaProvider>
    
    
  );
}

export default function Navigator(params){
  //console.log(params.theme)
    const Stack = createNativeStackNavigator();
    const [isLogin, setisLogin] = useState(true)
    return(
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="login" screenOptions={{
             headerShown: false
          }}
          >
         <Stack.Screen name="login" component={AuthScreen} initialParams={{ theme: params.theme, color: params.color }} />
          <Stack.Screen name="signup" component={Signup} initialParams={{ theme: params.theme, color: params.color }} />
          <Stack.Screen name="home" component={Home} initialParams={{ theme: params.theme, color: params.color }} />
       </Stack.Navigator>
    </NavigationContainer>
    )
} 