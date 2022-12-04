import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Clef from './components/Clef';
import Home from './components/Home';
import IndexList from './components/IndexList';
import Learn from './components/Learn';
import Question from './components/Question';
import Index from './components/Index';

const Stack = createNativeStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} screenOptions={{ headerShown: false }} />
        <Stack.Screen name="Learn" component={Learn} />
        <Stack.Screen name="QuestionClefSelection" component={Clef} initialParams={{ path: 'Question' }} />
        <Stack.Screen name="Question" component={Question} />
        {/* TODO: Change components */}
        <Stack.Screen name="Metronome" component={Home} />
        <Stack.Screen name="Tuner" component={Home} />
        {/* End TODO */}
        <Stack.Screen name="IndexClefSelection" component={Clef} initialParams={{ path: 'Index' }} />
        <Stack.Screen name="IndexList" component={IndexList} />
        <Stack.Screen name="Index" component={Index} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}