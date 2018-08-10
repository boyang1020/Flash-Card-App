import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import LoginPage from '../containers/LoginContainer';
export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {

    return (
      <LoginPage />
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

