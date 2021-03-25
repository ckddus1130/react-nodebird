import {combineReducers} from 'redux';
import user from './user';
import post from './post';

// 나눠진 reducer들을 combine으로 묶어준 것
const rootReducer = combineReducers({
  user,
  post,
});

export default rootReducer;