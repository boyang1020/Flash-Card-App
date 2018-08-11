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
import Origin from '../../assets/images/originLogo.png';
import { firstNameEntry, lastNameEntry, emailEntry, passwordEntry, registerEntry } from "./RegisterAction";

class RegisterContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleFirstNameInput = this.handleFirstNameInput.bind(this);
    this.handleLastNameInput = this.handleLastNameInput.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleRegisterSubmission = this.handleRegisterSubmission.bind(this);
  }

  handleFirstNameInput(firstName) {
    const { dispatch } = this.props;
    dispatch(firstNameEntry(firstName));
  }

  handleLastNameInput(lastName) {
    const { dispatch } = this.props;
    dispatch(lastNameEntry(lastName));
  }

  handleEmailInput(email) {
    const { dispatch } = this.props;
    dispatch(emailEntry(email));
  }

  handlePasswordInput(password) {
    const { dispatch } = this.props;
    dispatch(passwordEntry(password));
  }

  handleRegisterSubmission() {
    const { dispatch, firstName, lastName, email, password } = this.props;
    const registerObj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    dispatch(registerEntry(registerObj));
  }

  render() {
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
          <FormInput onChangeText={this.handleEmailInput} autoCorrect={false} />
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
  switchToLogin: {}
});

function mapStoreToProps(store) {
  return {
    firstName: store.registerData.firstName,
    lastName: store.registerData.lastName,
    email: store.registerData.email,
    password: store.registerData.password,
    user: store.registerData.user
  };
}

export default RegisterContainer;
