import axios from 'axios';

export function moreCards(userId) {
  return {
    type: 'MORE_CARDS',
    payload: axios
      .get(`http://0d03566e.ngrok.io/api/users/${userId}/cards`)
  }
}

export function addCard(cardId) {
  return {
    type: 'ADD_CARD',
    payload: axios.get(`http://0d03566e.ngrok.io/api/sessions/${cardId}/card/`)
  }
}

export function updateCards(userId, session) {
  return {
    type: 'UPDATE_CARDS',
    payload: axios.put(`http://0d03566e.ngrok.io/api/sessions`, session)
  }
}

export function updateIndex(n) {
  return {
    type: 'UPDATE_INDEX',
    payload: n
  }
}
