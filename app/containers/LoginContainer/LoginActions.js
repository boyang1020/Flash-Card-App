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

export function loginEntry(loginObj) {
  return {
      type: 'LOGIN_ENTRY',
      payload: axios
      .get('https://94573ede.ngrok.io/api/users', loginObj)
      .then(res => {
        const accessToken = res.data.id;
        return axios.patch(`http://94573ede.ngrok.io/api/users/${id}?access_token=${accessToken}`)
      })
  }
}
