import { combineReducers } from 'redux';
import RegisterReducer from './containers/RegisterContainer/RegisterReducer';
import LoginReducer from './containers/LoginContainer/LoginReducer';

const rootReducer = combineReducers({
    search: RegisterReducer,
    login: LoginReducer
});

export default rootReducer;