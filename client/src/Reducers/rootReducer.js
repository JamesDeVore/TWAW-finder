import { combineReducers } from 'redux';
import {RvSAReducer} from './RvSAReducer'
import {resultsReducer} from './resultsReducer'
import { questionReducer } from './questionReducer';

const rootReducer = combineReducers({
  // RvSA:RvSAReducer,
  questions:questionReducer,
  results:resultsReducer
});

export default rootReducer;