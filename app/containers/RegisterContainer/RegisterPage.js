import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  Linking,
  Alert,
  ScrollView
} from "react-native";
import {
  FormLabel,
  FormInput,
  Button,
  FormValidationMessage,
  Icon
} from "react-native-elements";
import { createStackNavigator } from 'react-navigation';
import Origin from '../../assets/images/originLogo.png';
import { firstNameEntry, lastNameEntry, emailEntry, passwordEntry, registerEntry } from "./RegisterAction";
import LoginScreen from '../LoginContainer';

class RegisterContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleFirstNameInput = this.handleFirstNameInput.bind(this);
    this.handleLastNameInput = this.handleLastNameInput.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleRegisterSubmission = this.handleRegisterSubmission.bind(this);
  }

  handleFirstNameInput(text) {
    const { dispatch } = this.props;
    dispatch(firstNameEntry(text));
  }

  handleLastNameInput(text) {
    const { dispatch } = this.props;
    dispatch(lastNameEntry(text));
  }

  handleEmailInput(text) {
    const { dispatch } = this.props;
    dispatch(emailEntry(text));
  }

  handlePasswordInput(text) {
    const { dispatch } = this.props;
    dispatch(passwordEntry(text));
  }

  handleRegisterSubmission() {
    const { navigate } = this.props.navigation;
    const { dispatch, firstName, lastName, email, password } = this.props;
    if (firstName == '' || lastName == '' || email == '' || password == '') {
      return alert('Make sure everything is filled out!')
    }
    const registerObj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    dispatch(registerEntry(registerObj, navigate));
    navigate('Login');
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image
          source={Origin}
          style={styles.originImage}
        />
        <View style={styles.formContainer}>
          <FormLabel>FIRST NAME </FormLabel>
          <FormInput onChangeText={this.handleFirstNameInput} autoCorrect={false} />
          <FormLabel>LAST NAME</FormLabel>
          <FormInput onChangeText={this.handleLastNameInput} autoCorrect={false} />
          <FormLabel>EMAIL</FormLabel>
          <FormInput keyboardType="email-address" onChangeText={this.handleEmailInput} autoCorrect={false} />
          <FormLabel>PASSWORD</FormLabel>
          <FormInput
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={this.handlePasswordInput}
          />
        </View>
        <View />
        <Button
          style={styles.button}
          onPress={this.handleRegisterSubmission}
          color={"#63A1CA"}
          backgroundColor={"#242F49"}
          borderRadius={3}
          icon={{ name: "sign-in", type: "font-awesome", color: "#63A1CA" }}
          title="register"
        />
        <Text style={styles.text}>
          Origin Code Academy LLC
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
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

function mapStoreToProps(store) {
  return {
    first_name: store.registerData.first_name,
    last_name: store.registerData.last_name,
    email: store.registerData.email,
    password: store.registerData.password,
    user: store.registerData.user
  };
}

export default RegisterContainer;
