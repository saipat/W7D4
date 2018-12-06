import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';

export const configureStore = () => createStore(rootReducer, applyMiddleware(logger));