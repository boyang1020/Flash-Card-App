import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { FormLabel, FormInput, Button, FormValidationMessage, Icon } from 'react-native-elements';
// import { MonoText } from '../components/StyledText';
import Origin from '../../assets/images/originLogo.png'
import { emailEntry, passwordEntry } from './LoginActions';

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.emailLogin = this.emailLogin.bind(this);
    this.passwordLogin = this.passwordLogin.bind(this);
    this.loginButton = this.loginButton.bind(this);

  }
  emailLogin(text) {
    const { dispatch } = this.props;
    dispatch(emailEntry(text));
  }

  passwordLogin(text) {
    const { dispatch } = this.props;
    dispatch(passwordEntry(text));
  }

  loginButton() { }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={Origin}
          style={styles.originImage}
        />
        <View style={styles.formContainer}>
          <FormLabel>Email</FormLabel>
          <FormInput onChangeText={this.emailLogin} />
          <FormLabel>Password</FormLabel>
          <FormInput onChangeText={this.passwordLogin} secureTextEntry={true}/>
        </View>
        <Button style={styles.button}
          onPress={this.loginButton}
          color='white'
          backgroundColor={"#346abb"}
          title='Login' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 10,
    // paddingBottom: 300
  },
  button: {
    marginTop: 55,
    marginBottom: 20,
    width: 320
  },

  formContainer: {
    width: 350
    // padding: 50
  },
  originImage: {
    width: 180,
    height: 160,
    resizeMode: 'contain',
    paddingBottom: 30,
  }
});
