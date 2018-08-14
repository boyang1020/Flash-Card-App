import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import Origin from '../assets/images/originLogo.png';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { Button } from 'react-native-elements';

//Login Screen Navigation
const LoginStack = createStackNavigator({
  Login: LoginScreen,
});

LoginStack.navigationOptions = {
  tabBarLabel: 'Login',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-log-in${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

//Register Screen Navigation
const RegisterStack = createStackNavigator({
  Register: RegisterScreen,
});

RegisterStack.navigationOptions = {
  tabBarLabel: 'Register',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-create${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image
          source={Origin}
          style={styles.originImage}
        />
        <Text className='mainText' style={styles.blurb}>
        Don’t lose what you’ve learned!
        Constantly refresh your mental database, by using this flash card app.
        </Text>
        <Button style={styles.button}
          onPress={() => navigate('Login')}
          color={"#63A1CA"}
          backgroundColor={"#242F49"}
          borderRadius={3}
          title='login'
          icon={{ name: "sign-in", type: "font-awesome", color: "#63A1CA" }}
          />
        <Button
          onPress={() => navigate('Register')}
          style={styles.button}
          color={"#63A1CA"}
          backgroundColor={"#242F49"}
          borderRadius={3}
          icon={{ name: "sign-in", type: "font-awesome", color: "#63A1CA" }}
          title="register"/>
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
  text:{
    fontFamily: 'AvenirNext-Regular',
    marginTop:0,
  },
  blurb:{
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop:3,
    color: '#63A1CA',
    fontFamily: 'AvenirNext-Regular', 
    fontSize: 20, 
    marginTop: 40,
    marginLeft: 15,
    marginRight: 15,  
  }
});
