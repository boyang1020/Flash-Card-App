import axios from 'axios';

export function moreCards() {
  return {
      type: 'MORE_CARDS',
      payload: axios
      .get(`http://localhost:3000/api/cards`)
  }
}

export function updateIndex(n) {
  return {
    type: 'UPDATE_INDEX',
    payload: n
  }
}