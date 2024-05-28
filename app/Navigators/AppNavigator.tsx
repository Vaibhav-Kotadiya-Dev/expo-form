import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Name from '../pages/Name';
import { NavigationContainer } from '@react-navigation/native';
import routes from './constant';
import Gender from '../pages/Gender';
import Child from '../pages/Child';
import Email from '../pages/Email';

const AppNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{ headerShown: false, gestureEnabled: false }}>
        <Stack.Screen
          name={routes.NAME}
          component={Name}
        />
        <Stack.Screen
          name={routes.GENDER}
          component={Gender}
        />
        <Stack.Screen
          name={routes.CHILD}
          component={Child}
        />
        <Stack.Screen
          name={routes.EMAIL}
          component={Email}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})