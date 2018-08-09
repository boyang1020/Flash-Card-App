import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
<<<<<<< HEAD
=======
import Login from '../containers/LoginContainer/LoginPage';
>>>>>>> 3c0ee90ef08b6ac4b1e1cb011a1bed52b0919502
import MainTabNavigator from './MainTabNavigator';

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Login: Login,
  Main: MainTabNavigator,
});