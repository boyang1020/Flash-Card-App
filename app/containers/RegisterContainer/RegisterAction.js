import axios from 'axios';

export function firstNameEntry(firstName) {

  return {
    type: 'FIRST_NAME_ENTRY',
    payload: firstName
  }
}

export function lastNameEntry(lastName) {

  return {
    type: 'LAST_NAME_ENTRY',
    payload: lastName
  }
}

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

export function registerEntry(registerObj) {
  return {
    type: 'SIGN_UP_ENTRY',
    payload: axios
      .post('http://localhost:3000/api/users', registerObj)
      .then(res => {return res.data})
      .catch(err => {console.log(err)})
  }
}
