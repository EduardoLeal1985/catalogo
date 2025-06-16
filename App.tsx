import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import BookDetailScreen from './screens/BookDetailScreen';

export type RootStackParamList = {
  Home: undefined;
  BookDetail: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ orientation: 'landscape' }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Catálogo de Livros' }} />
        <Stack.Screen name="BookDetail" component={BookDetailScreen} options={{ title: 'Detalhes do Livro' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
