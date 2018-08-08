import { connect } from 'react-redux';
import RegisterPage from './RegisterPage';

function mapStoreToProps(store) {
    return {
      first_name: store.search.first_name,
      last_name: store.search.last_name,
      email: store.search.email,
      password: sttore.search.password,
      
    };
  }

export default connect(mapStoreToProps)(RegisterPage)