import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import TutorialScreen from '../screens/TutorialScreen';
import DashboardScreen from '../screens/DashboardScreen';
import FlashcardScreen from '../screens/FlashcardScreen';


const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};
HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = false;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const DashboardStack = createStackNavigator({
  Dashboard: DashboardScreen,
});

DashboardStack.navigationOptions = {
  tabBarLabel: 'Dashboard',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

DashboardStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = false;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};


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

LoginStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = false;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const RegisterStack = createStackNavigator({
  Register: RegisterScreen,
});

RegisterStack.navigationOptions = {
  tabBarLabel: 'Register',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios-sign-in' ? `ios-create${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

RegisterStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = false;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};


const FlashcardStack = createStackNavigator({
  Flashcard: FlashcardScreen,
});

FlashcardStack.navigationOptions = {
  tabBarLabel: 'Flash Cards',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-create${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

FlashcardStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = false;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const TutorialStack = createStackNavigator({
  Tutorial: TutorialScreen,
});

TutorialStack.navigationOptions = {
  tabBarLabel: 'Tutorial',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-flash${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

TutorialStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = false;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

export default createBottomTabNavigator({
  HomeStack,
  DashboardStack,
  LoginStack,
  RegisterStack,
  TutorialStack,
  FlashcardStack
});
