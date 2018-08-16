import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import RegisterPage from '../containers/RegisterContainer';

export default class RegisterScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <RegisterPage navigation={this.props.navigation}/>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
