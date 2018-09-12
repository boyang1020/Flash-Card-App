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
      .post('http://localhost:3000/api/Users/login', { email, password })
      .then(res => { return res.data })
      .then(res => {
        return axios.get('http://localhost:3000/api/cards')
          .then(cards => {
            return {
              cards,
              tokens: res
            }
          })
      })
  }
}
