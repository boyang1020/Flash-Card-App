import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { FormLabel, FormInput, Button, FormValidationMessage, Icon } from 'react-native-elements';
// import { MonoText } from '../components/StyledText';

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.emailLogin = this.emailLogin.bind(this);
    this.passwordLogin = this.passwordLogin.bind(this);
    this.loginButton = this.loginButton.bind(this);

  }
  emailLogin(text) {
    const { dispatch } = this.props;
    dispatch(emailInput(text));
  }

  passwordLogin(text) {
    const { dispatch } = this.props;
    dispatch(passwordInput(text));
  }

  loginButton() { }

  render() {
    return (
      <View style={styles.container}>
        {/* <Image

          source={
            __DEV__
              ? require('.../assets/images/robot-dev.png')
              : require('.../assets/images/robot-prod.png')
          }
          style={styles.welcomeImage}
        /> */}
        <View style={styles.formContainer}>
          <FormLabel>Email</FormLabel>
          <FormInput onChangeText={this.emailLogin} />
          <FormLabel>Password</FormLabel>
          <FormInput onChangeText={this.passwordLogin} />
        </View>
        <Button style={styles.button}
          onPress={this.loginButton}
          color='white'
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
    paddingTop: 300,
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
  switchToLogin: {
  }
});

function mapStoreToProps(store) {
  return {
    firstName: store.registerData.first_name,
    lastName: store.registerData.last_name,
    email: store.registerData.email,
    password: store.registerData.password,
    user: store.registerData.user
  };
}
