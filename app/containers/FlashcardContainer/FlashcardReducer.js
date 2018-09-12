const defaultState = {
  accessToken: null,
  newDeck: [],
  index: 0
};

export default function FlashcardReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_INDEX': {
      return {
        ...state,
        index: payload
      }
    }
    case 'MORE_CARDS_FULFILLED': {
      return {
        ...state,
        deck: payload.data,
        index: 0
      }
    }
    case 'LOGIN_ENTRY_FULFILLED': {
      return {
        ...state,
        deck: payload.cards.data,
        index: 0
      }
    }
    default: {
      return state;
    }
  }
}
