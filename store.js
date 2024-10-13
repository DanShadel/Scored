import {configureStore} from '@reduxjs/toolkit';
import staffReducer from './reducers/staffReducer';
import quizReducer from './reducers/quizReducer';


const store = configureStore({reducer: {staff: staffReducer}});
console.log('store: ' + JSON.stringify(store))


export default store;