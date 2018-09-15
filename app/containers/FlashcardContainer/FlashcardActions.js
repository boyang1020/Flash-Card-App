import axios from 'axios';

export function moreCards(userId) {
  return {
    type: 'MORE_CARDS',
    payload: axios
      .get(`https://159d024d.ngrok.io/api/users/${userId}/cards`)
  }
}

export function addCard(cardId) {
  return {
    type: 'ADD_CARD',
    payload: axios.get(`https://159d024d.ngrok.io/api/sessions/${cardId}/card/`)
  }
}

export function updateCards(userId, session) {
  return {
    type: 'UPDATE_CARDS',
    payload: axios.put(`https://159d024d.ngrok.io/api/sessions`, session)
  }
}

export function updateIndex(n) {
  return {
    type: 'UPDATE_INDEX',
    payload: n
  }
}
