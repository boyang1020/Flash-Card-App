import { connect, Provider } from 'react-redux';
import { createStore } from 'redux'
import TutorialPage from './TutorialPage';

function mapStoreToProps(store) {
    return {
      email: store.search.email,
      password: store.search.password,
      id: store.search.id,
      object: store.search.data
    };
  }

export default connect(mapStoreToProps)(TutorialPage)
