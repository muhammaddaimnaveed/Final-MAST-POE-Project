import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen'; 
import MenuScreen from './MenuScreen';
import AddDishScreen from './AddDishScreen';
import AddDishScreen1 from './AddDishScreen1';
import AddDishScreen2 from './AddDishScreen2';
import AddDishScreen3 from './AddDishScreen3';
import AddDishScreen4 from './AddDishScreen4';
import FilterSearchScreen from './FilterSearchScreen';
import FilterSearchScreen1 from './FilterSearchScreen1';
import FilterSearchScreen2 from './FilterSearchScreen2';
import FilterSearchScreen3 from './FilterSearchScreen3';
import FilterSearchScreen4 from './FilterSearchScreen4';
import OrderScreen from './OrderScreen'
import DeleteScreen from './DeleteScreen';

/* This Screen controls the navigational system of the app, allowing users to navigate between different screens. */


const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>

      <Stack.Navigator

        initialRouteName="HomeScreen" 
        screenOptions={{
          headerStyle: { backgroundColor: '#001f3e' },
          headerTintColor: '#ffffff',
          headerTitleStyle: { fontWeight: 'bold' }, }}>
       
        
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{ headerShown: false }} /> 
        

        <Stack.Screen 
          name="MenuScreen" 
          component={MenuScreen} 
          options={{ headerShown: false }} />
       

        <Stack.Screen 
          name="AddDishScreen" 
          component={AddDishScreen} 
          options={{ headerShown: false }}  />

        <Stack.Screen 
          name="AddDishScreen1" 
          component={AddDishScreen1} 
          options={{ headerShown: false }}  />

        <Stack.Screen 
          name="AddDishScreen2" 
          component={AddDishScreen2} 
          options={{ headerShown: false }}  />

        <Stack.Screen 
          name="AddDishScreen3" 
          component={AddDishScreen3} 
          options={{ headerShown: false }}  />

        <Stack.Screen 
          name="AddDishScreen4" 
          component={AddDishScreen4} 
          options={{ headerShown: false }}  />

        <Stack.Screen 
          name="FilterSearchScreen" 
          component={FilterSearchScreen} 
          options={{ headerShown: false }}  />

        <Stack.Screen 
          name="FilterSearchScreen1" 
          component={FilterSearchScreen1} 
          options={{ headerShown: false }}  />

        <Stack.Screen 
          name="FilterSearchScreen2" 
          component={FilterSearchScreen2} 
          options={{ headerShown: false }}  />

        <Stack.Screen 
          name="FilterSearchScreen3" 
          component={FilterSearchScreen3} 
          options={{ headerShown: false }}  />

        <Stack.Screen 
          name="FilterSearchScreen4" 
          component={FilterSearchScreen4} 
          options={{ headerShown: false }}  />
       

        <Stack.Screen 
          name="OrderScreen" 
          component={OrderScreen} 
          options={{ headerShown: false }}  />

          
        <Stack.Screen 
          name="DeleteScreen" 
          component={DeleteScreen} 
          options={{ headerShown: false }}  />
       
      </Stack.Navigator>

      <StatusBar style="auto" />
      
    </NavigationContainer>
  );
}
