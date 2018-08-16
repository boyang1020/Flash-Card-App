import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import TutorialPage from '../containers/TutorialContainer';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <TutorialPage />
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