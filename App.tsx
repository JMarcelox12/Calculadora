import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Soma from './screens/Soma';
import Subtracao from './screens/Subtracao';
import Multiplicacao from './screens/Multiplicacao';
import Divisao from './screens/Divisao';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Página Inicial' }} />
        <Stack.Screen name="Soma" component={Soma} options={{ title: 'Soma' }} />
        <Stack.Screen name="Subtracao" component={Subtracao} options={{ title: 'Subtração' }} />
        <Stack.Screen name="Multiplicacao" component={Multiplicacao} options={{ title: 'Multiplicação' }} />
        <Stack.Screen name="Divisao" component={Divisao} options={{ title: 'Divisão' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}