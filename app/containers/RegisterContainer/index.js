import { connect, Provider } from 'react-redux';
import { createStore } from 'redux'
import RegisterPage from './RegisterPage';

function mapStoreToProps(store) {
    return {
      firstName: store.search.firstName,
      lastName: store.search.lastName,
      email: store.search.email,
      password: store.search.password,
    };
  }

export default connect(mapStoreToProps)(RegisterPage)
