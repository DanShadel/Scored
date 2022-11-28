import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home';
import Quiz from './components/Quiz';
import Learn from './components/Learn';

const Stack = createNativeStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Learn" component={Learn} />
        <Stack.Screen name="Quiz" component={Quiz} />
        {/* TODO: Change components */}
        <Stack.Screen name="Metronome" component={Home} />
        <Stack.Screen name="Tuner" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}