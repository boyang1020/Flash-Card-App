import axios from 'axios';

export function moreCards(userId) {
  return {
    type: 'MORE_CARDS',
    payload: axios
      .get(`https://origin-flash-cards.now.sh/api/users/${userId}/cards`)
  }
}

export function addCard(cardId) {
  return {
    type: 'ADD_CARD',
    payload: axios.get(`https://origin-flash-cards.now.sh/api/sessions/${cardId}/card/`)
  }
}

export function updateCards(userId, session) {
  return {
    type: 'UPDATE_CARDS',
    payload: axios.put(`https://origin-flash-cards.now.sh/api/sessions`, session)
  }
}

export function updateIndex(n) {
  return {
    type: 'UPDATE_INDEX',
    payload: n
  }
}
