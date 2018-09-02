import { combineReducers } from 'redux';
import calc from './calc_reducer';

export const appReducer = combineReducers({
  calc
})

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;