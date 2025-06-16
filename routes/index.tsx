import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import BookDetailScreen from '../screens/BookDetailScreen';
import About from '../screens/About';

export type RootStackParamList = {
    Home: undefined;
    BookDetail: { id: string };
    About: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ orientation: 'landscape' }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="BookDetail" component={BookDetailScreen} />
                <Stack.Screen name="About" component={About} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}