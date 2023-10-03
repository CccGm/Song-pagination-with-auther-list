import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import Action_Reducer from './reducers/Action_Reducer';
import Data_Reducer from './reducers/Data_Reducer';

const rootReducer = combineReducers({
  Action_Reducer,
  Data_Reducer,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
