import { connect, Provider } from 'react-redux';
import { createStore } from 'redux'
import LoginPage from './LoginPage';


function mapStoreToProps(store) {
    return {
      email: store.search.email,
      password: store.search.password,
    };
  }

export default connect(mapStoreToProps)(LoginPage)