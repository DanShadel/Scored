
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Clef from './Clef';
import Home from './Home';
import IndexList from './IndexList';
import Learn from './Learn';
import Question from './Question';
import Index from './Index';

const Stack = createNativeStackNavigator();

console.log('store')
console.log(store)
const Routes = () => {
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
};

export default Routes;
