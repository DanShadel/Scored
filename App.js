import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home';
import Quiz from './components/Quiz';
import Learn from './components/Learn';
import Question from './components/Question';

const Stack = createNativeStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} screenOptions={{ headerShown: false }} />
        <Stack.Screen name="Learn" component={Learn} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Question" component={Question} />
        {/* TODO: Change components */}
        <Stack.Screen name="Metronome" component={Home} />
        <Stack.Screen name="Tuner" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}