import axios from 'axios';

export function moreCards(userId) {
  return {
    type: 'MORE_CARDS',
    payload: axios
      .get(`http://localhost:3000/api/users/${userId}/cards`)
  }
}

export function addCard(cardId) {
  return {
    type: 'ADD_CARD',
    payload: axios.get(`http://localhost:3000/api/sessions/${cardId}/card/`)
  }
}

export function updateCards(userId, session) {
  return {
    type: 'UPDATE_CARDS',
    payload: axios.put(`http://localhost:3000/api/sessions`, session)
  }
}

export function updateIndex(n) {
  return {
    type: 'UPDATE_INDEX',
    payload: n
  }
}
