
import { Provider } from 'react-redux';
import Routes from './components/Routes';
import store from './store';

export default App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}