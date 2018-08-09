// Import { loadingScreen } from "../LoginContainer/loginActions";
const defaultState = {
  first_name: '',
  last_name: '',
  email: '',
  password: ''
}

export default function registerReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {

      case 'FIRST_NAME_ENTRY': {
          return {
              ...state,
              first_name: payload
          }
      }
      case 'LAST_NAME_ENTRY': {
          return {
              ...state,
              last_name: payload
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
              first_name: payload.first_name,
              last_name: payload.last_name,
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