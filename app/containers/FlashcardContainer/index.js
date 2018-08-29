import { connect, Provider } from 'react-redux';
import { createStore } from 'redux'
import FlashcardPage from './FlashcardPage';

function mapStoreToProps(store) {
    return {
      cardQuestion: store.flashcard.cardQuestion,
      cardAnswer: store.flashcard.cardAnswer,
      accessToken: store.login.accessToken,
    };
  }

export default connect(mapStoreToProps)(FlashcardPage)
