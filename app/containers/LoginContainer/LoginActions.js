import axios from 'axios';

export function emailEntry(email) {

  return {
    type: 'EMAIL_ENTRY',
    payload: email
  }
}

export function passwordEntry(password) {
  return {
    type: 'PASSWORD_ENTRY',
    payload: password
  }
}

export function loginEntry(email, password) {
  return {
    type: 'LOGIN_ENTRY',
    payload: axios
      .post('https://origin-flash-cards.now.sh/api/users/login', { email, password })
      .then(res => { return res.data })
      .then(res => {
        return axios.get('https://origin-flash-cards.now.sh/api/cards')
          .then(cards => {
            return {
              cards,
              tokens: res
            }
          })
      })
  }
}
