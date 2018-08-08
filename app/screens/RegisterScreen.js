import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import RegisterPage from '../containers/RegisterContainer';
export default class RegisterScreen extends React.Component {
  static navigationOptions = {
    title: 'Register',
  };

  render() {

    return (
      <RegisterPage />
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

