import axios from 'axios';

export function question(cardQuestion) {

  return {
      type: 'CARD_QUESTION',
      payload: cardQuestion
  }
}

export function answer(cardAnswer) {
  return {
      type: 'CARD_ANSWER',
      payload: cardAnswer
  }
}

export function getFlashCards(loginObj) {
  return {
      type: 'GET_CARDS',
      payload: axios
      .get('http://localhost:3000/api/cards', loginObj)
      .then(res => {console.log(res.data)})
  }
}
