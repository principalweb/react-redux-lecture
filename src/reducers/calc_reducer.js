import { FIRST_NUM, SECOND_NUM } from '../actions/calcActions';

const initialState = {
    count: 0,
    num1: 0,
    num2: 0
};

const CalReducer = (state=initialState, action) => {
  switch(action.type) {
    case FIRST_NUM:
      return {
        ...state,
        num1: action.value,
        count: action.value + state.num2
      }
    case SECOND_NUM:
      return {
        ...state,
        num2: action.value,
        count: state.num1 + action.value
      };
    default:
      return state;
  }
};

export default CalReducer;