import { connect, Provider } from 'react-redux';
import { createStore } from 'redux'
import RegisterPage from './RegisterPage';


function mapStoreToProps(store) {
    return {
      first_name: store.search.first_name,
      last_name: store.search.last_name,
      email: store.search.email,
      password: store.search.password,
      
    };
  }

export default connect(mapStoreToProps)(RegisterPage)