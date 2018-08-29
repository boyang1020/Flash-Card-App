const defaultState = {
  cardAnswer: '',
  cardQuestion: '',
  accessToken: null,
};

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
    default: {
      return state;
    }
  }
}
