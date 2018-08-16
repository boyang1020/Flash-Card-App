import { connect, Provider } from 'react-redux';
import { createStore } from 'redux'
import FlashcardPage from './FlashcardPage';

function mapStoreToProps(store) {
    return {
      cardQuestion: store.search.cardQuestion,
      cardAnswer: store.search.cardAnswer
    };
  }

export default connect(mapStoreToProps)(FlashcardPage)
