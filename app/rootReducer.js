import { combineReducers } from 'redux';
import RegisterReducer from './containers/Register/RegisterReducer';

const rootReducer = combineReducers({
    registerData: RegisterReducer
});

export default rootReducer;