import { combineReducers } from 'redux';
import RegisterReducer from './containers/RegisterContainer/RegisterReducer';

const rootReducer = combineReducers({
    search: RegisterReducer
});

export default rootReducer;