import { combineReducers } from 'redux';
import {RvSAReducer} from './RvSAReducer'
import { questionReducer } from './questionReducer';

const rootReducer = combineReducers({
  RvSA:RvSAReducer,
  questions:questionReducer
});

export default rootReducer;