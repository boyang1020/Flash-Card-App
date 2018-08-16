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
      .post('http://localhost:3000/api/Users/login', {email, password})
      .then(res => { console.log(res.data)
        const accessToken = res.data.id;
        const userId = res.data.userId
      })
  }
}