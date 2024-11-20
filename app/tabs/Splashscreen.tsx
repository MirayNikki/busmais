import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '@/Splashscreen';
import TabLayout from '@/TabLayout';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Telainicial">
        <Stack.Screen
          name="Telainicial"
          component={Telainicial}
          options={{ headerShown: false }} // Não exibe cabeçalho na tela inicial
        />
        <Stack.Screen
          name="TabLayout"
          component={TabLayout}
          options={{ headerShown: false }} // Não exibe cabeçalho nas abas
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}