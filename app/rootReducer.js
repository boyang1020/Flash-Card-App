import { combineReducers } from 'redux';
import RegisterReducer from './containers/RegisterContainer/RegisterReducer';
import LoginReducer from './containers/LoginContainer/LoginReducer';
import FlashcardReducer from './containers/FlashcardContainer/FlashcardReducer';

const rootReducer = combineReducers({
    search: RegisterReducer,
    login: LoginReducer,
    flashcard: FlashcardReducer
});

export default rootReducer;
