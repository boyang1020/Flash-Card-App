import { connect, Provider } from 'react-redux';
import { createStore } from 'redux'
import FlashcardPage from './FlashcardPage';

function mapStoreToProps(store) {
    return {
      cardQuestion: store.flashcard.cardQuestion,
      cardAnswer: store.flashcard.cardAnswer,
      cards: store.flashcard.cards
    };
  }

export default connect(mapStoreToProps)(FlashcardPage)
