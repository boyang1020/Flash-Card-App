import { connect, Provider } from 'react-redux';
import { createStore } from 'redux'
import LoginPage from './LoginPage';

function mapStoreToProps(store) {
    return {
      email: store.login.email,
      password: store.login.password,
      accessToken: store.login.accessToken
    };
  }

export default connect(mapStoreToProps)(LoginPage)
