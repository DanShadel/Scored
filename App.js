
import { Provider } from 'react-redux';
import Routes from './components/Routes';
import store from './store';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import React, { useEffect } from 'react';

console.log(store.getState());

SplashScreen.preventAutoHideAsync();

export default App = () => {

	const [fontLoaded, error] = useFonts({
		'Darwin': require('./assets/fonts/DarwinSerif-Regular.otf'),
	});


	useEffect(() => {
		if (fontLoaded) {
			SplashScreen.hideAsync();
		}
	}, [fontLoaded, error]);


	return (
		<Provider store={store}>
			<Routes />
		</Provider>
	);
};
