
import { Provider } from 'react-redux';
import Routes from './components/Routes';
import store from './store';

console.log(store.getState())
export default App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}