import { connect, Provider } from 'react-redux';
import { createStore } from 'redux'
import FlashcardPage from './FlashcardPage';

function mapStoreToProps(store) {
    return {
      accessToken: store.login.accessToken,
      index: store.flashcard.index,
      deck: store.flashcard.deck
    };
  }

export default connect(mapStoreToProps)(FlashcardPage);
