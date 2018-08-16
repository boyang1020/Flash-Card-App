const defaultState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
}

export default function registerReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'FIRST_NAME_ENTRY': {
      return {
        ...state,
        firstName: payload
      }
    }
    case 'LAST_NAME_ENTRY': {
      return {
        ...state,
        lastName: payload
      }
    }
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
    case 'SIGN_UP_ENTRY_PENDING': {
      return {
        ...state,
      }
    }
    case 'SIGN_UP_ENTRY_FULFILLED': {
      return {
        ...state,
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        password: payload.password,
      }
    }
    case 'SIGN_UP_ENTRY_REJECTED': {
      return {
        ...state,
      }
    }

    default: {
      return state;
    }
  }
}
