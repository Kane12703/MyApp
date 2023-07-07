import {View, Text} from 'react-native';
import React from 'react';
import Login from './src/app/users/screens/Login';
import Home from './src/app/book/screens/Home';
import Detail from './src/app/book/screens/Detail';
import AllProduct from './src/app/book/screens/AllProduct';
import Register from './src/app/users/screens/Register';
import UserNavigation from './src/app/users/navigation/UserNavigation';
import {NavigationContainer} from '@react-navigation/native';
import Test from './src/app/book/screens/Test';



const App = () => {
  return (
    <NavigationContainer>
      <UserNavigation/>
    </NavigationContainer>

  );
};

export default App;
