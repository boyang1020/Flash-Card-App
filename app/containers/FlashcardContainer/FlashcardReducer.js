const defaultState = {
  cardAnswer: '',
  cardQuestion: '',
  cards: []
}

export default function FlashcardReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'CARD_QUESTION': {
      return {
        ...state,
        cardQuestion: payload
      }
    }
    case 'CARD_ANSWER': {
      return {
        ...state,
        cardAnswer: payload
      }
    }
    case 'GET_CARDS_FULFILLED': {
      return{
        ...state,
        cards: payload
      }
    }
    default: {
      return state;
    }
  }
}
