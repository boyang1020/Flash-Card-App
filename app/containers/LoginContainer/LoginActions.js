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
      .post('https://159d024d.ngrok.io/api/users/login', { email, password })
      .then(res => { return res.data })
      .then(res => {
        return axios.get('https://159d024d.ngrok.io/api/cards')
          .then(cards => {
            return {
              cards,
              tokens: res
            }
          })
      })
  }
}
