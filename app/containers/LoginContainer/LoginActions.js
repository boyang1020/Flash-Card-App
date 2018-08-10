export function emailEntry(text) {

  return {
      type: 'EMAIL_ENTRY',
      payload: text
  }
}

export function passwordEntry(text) {
  return {
      type: 'PASSWORD_ENTRY',
      payload: text
  }
}

export function loginEntry(loginObj, navigate) {
  return {
      type: 'LOGIN_ENTRY',
      payload: loginObj
  }
}
