const defaultState = {
  email: '',
  password: ''
}

export default function loginReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'EMAIL_ENTRY': {
      return {
        ...state,
        email: payload
      }
    }
    case 'PASSWORD_ENTRY': {
      return {
        ...state,
        password: payload
      }
    }
    case 'LOGIN_ENTRY_PENDING': {
      return {
        ...state,
      }
    }
    case 'LOGIN_ENTRY_FULFILLED': {
      return {
        ...state,
        email: payload.email,
        password: payload.password,
      }
    }
    case 'LOGIN_ENTRY_REJECTED': {
      return {
        ...state,
      }
    }

    default: {
      return state;
    }
  }
}
