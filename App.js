
import * as React from 'react';
import { View, Text ,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home'
import Login from './Login';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'My home',
         headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}} />

        <Stack.Screen name="Login" component={Login} options={{ title: 'Login',
      headerStyle: {
        backgroundColor: '#f2e45d',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }, }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
