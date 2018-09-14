const defaultState = {
  accessToken: null,
  userId: null,
  deck: [],
  index: 0,
  sessionId: [],
  cardId:''
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
    case 'UPDATE_CARDS_FULFILLED': {
      //Inside of our card deck, find the card with the same ID as our session
      const index = state.deck.findIndex(e => e.id === payload.data.cardId);
      
      // Create a copy of our current deck
      const copyDeck = [...state.deck];
      
      // Add the session Id to that card
      copyDeck[index].sessionId = payload.data.id;
  
      return {
        ...state,
        deck: copyDeck
      }
    }
    case 'MORE_CARDS_FULFILLED': {
      return {
        ...state,
        sessionId: payload.data,
        index: 0
      }
    }
    case 'ADD_CARD_FULFILLED': {
      const deck = [...state.deck]
      deck.push(payload.data)
      return { ...state }
    }
    case 'LOGIN_ENTRY_FULFILLED': {
      return {
        ...state,
        deck: payload.cards.data,
        index: 0,
        accessToken: payload.tokens.id,
        userId: payload.tokens.userId
      }
    }
    default: {
      return state;
    }
  }
}
