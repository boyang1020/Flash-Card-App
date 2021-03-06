import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FormLabel, FormInput, Button, Icon } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
import Origin from '../../assets/images/originLogo.png';
import { emailEntry, passwordEntry, loginEntry } from './LoginActions';

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.emailLogin = this.emailLogin.bind(this);
    this.passwordLogin = this.passwordLogin.bind(this);
    this.loginButton = this.loginButton.bind(this);

  }

  emailLogin(email) {
    const { dispatch } = this.props;
    dispatch(emailEntry(email));
  }

  passwordLogin(password) {
    const { dispatch } = this.props;
    dispatch(passwordEntry(password));
  }

  loginButton() {
    const { navigate } = this.props.navigation;
    const { dispatch, email, password} = this.props;
    if (email == '' || password == '' || !email || !password) {
      return alert('Please make sure everything is filled out!')
    }
    dispatch(loginEntry(email, password)) && navigate('Dashboard');
  }

  render() {
    const {accessToken} = this.props;
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigate('Home')}>
          <Image style={styles.originImage} source={Origin} />
        </TouchableOpacity>
        <View style={styles.formContainer}>
          <FormLabel>EMAIL</FormLabel>
          <FormInput keyboardType="email-address" onChangeText={this.emailLogin} />
          <FormLabel>PASSWORD</FormLabel>
          <FormInput onChangeText={this.passwordLogin} secureTextEntry={true} />
        </View>
        <Button style={styles.button}
          onPress={this.loginButton}
          color={"#63A1CA"}
          backgroundColor={"#242F49"}
          borderRadius={3}
          icon={{ name: "sign-in", type: "font-awesome", color: "#63A1CA" }}
          title="login" />
        <Text style={styles.text}>
          Origin Code Academy LLC
          </Text>
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
  },
  button: {
    marginTop: 55,
    marginBottom: 20,
    width: 320,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.5,
  },
  formContainer: {
    width: 350
  },
  originImage: {
    width: 110,
    height: 90,
    resizeMode: 'contain',
    marginTop: 20,
    paddingBottom: 30,
  },
  text: {
    fontFamily: 'AvenirNext-Regular',
    marginTop: 0,
  },
});
