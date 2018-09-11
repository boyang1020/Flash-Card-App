import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import LoginPage from '../containers/LoginContainer';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <LoginPage navigation={this.props.navigation} />
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
