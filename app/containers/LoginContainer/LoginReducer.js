const defaultState = {
  email: '',
  password: '',
  accessToken: {
    userId: null
  },
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
    case 'LOGIN_ENTRY_FULFILLED': {
      return {
        ...state,
        accessToken: payload.tokens,
      }
    }
    default: {
      return state;
    }
  }
}
