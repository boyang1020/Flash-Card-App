import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import TutorialScreen from '../screens/TutorialScreen';
import DashboardScreen from '../screens/DashboardScreen';

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

export default createBottomTabNavigator({
  HomeStack,
  DashboardStack,
  LoginStack,
  RegisterStack,
  TutorialStack,
});
