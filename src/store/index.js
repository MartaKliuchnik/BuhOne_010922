import { combineReducers, createStore } from 'redux';
import { serviceReducer } from './reducer/serviceReducer';

const rootReducer = combineReducers({
    services: serviceReducer
})

export const store = createStore(rootReducer);