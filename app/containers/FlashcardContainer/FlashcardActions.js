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
      type: 'LOGIN_ENTRY',
      payload: axios
      .get('https://94573ede.ngrok.io/api/cards', loginObj)
      .then(res => {
        const accessToken = res.data.id;
        return axios.patch(`http://94573ede.ngrok.io/api/users/${id}?access_token=${accessToken}`)
      })
  }
}