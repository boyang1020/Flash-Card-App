import { connect, Provider } from 'react-redux';
import { createStore } from 'redux'
import FlashcardPage from './FlashcardPage';

function mapStoreToProps(store) {
    return {
      userId: store.login.accessToken.userId,
      index: store.flashcard.index,
      deck: store.flashcard.deck,
      accessToken: store.login.accessToken.id,
      cardId: store.flashcard.cardId,
      sessionId: store.flashcard.sessionId
    };
  }

export default connect(mapStoreToProps)(FlashcardPage);
