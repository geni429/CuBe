import { USER_EMAIL } from './actions';
import { combineReducers } from 'redux';

const initialState = {
  data: ''
};

const email = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_EMAIL':
      return Object.assign({}, state, {
        data: action.data
      });
    default:
      return state;
  }
}

const CubeReducer = combineReducers({
  email
});

export default CubeReducer;