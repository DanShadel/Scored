
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from './Home';
import Index from './Index';
import IndexList from './IndexList';
import Learn from './Learn';
import Metronome from './Metronome';
import Question from './Question';
import Test from './Test';

const Stack = createNativeStackNavigator();

const Routes = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={Home} screenOptions={{ headerShown: false }} />
				<Stack.Screen name="Learn" component={Learn} />
				<Stack.Screen name="Question" component={Question} />
				{/* TODO: Change components */}
				<Stack.Screen name="Metronome" component={Metronome} />
				<Stack.Screen name="Tuner" component={Home} />
				{/* End TODO */}
				<Stack.Screen name="IndexList" component={IndexList} />
				<Stack.Screen name="Index" component={Index} />
				<Stack.Screen name="Test" component={Test} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Routes;
