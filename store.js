import { configureStore } from '@reduxjs/toolkit';
import staveReducer from './reducers/staveReducer';

const store = configureStore({
    reducer: { staveReducer }
})


export default store;