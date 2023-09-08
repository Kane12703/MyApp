import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../../book/screens/Home';
import Detail from '../../book/screens/Detail';
import AllProduct from '../../book/screens/AllProduct';
import MyProfile from '../../book/screens/MyProfile';
import HeaderMain from '../../../utilities/HeaderMain/HeaderMain';
import WelcomeScreen from '../screens/WellcomeScreen';
import DetailsReader from '../../book/screens/DetailsReader';
import Chapter from '../../book/screens/Chapter';
const Stack = createNativeStackNavigator();

const UserNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Hello" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="AllProduct" component={AllProduct} />
      <Stack.Screen name="MyProfile" component={MyProfile} />
      <Stack.Screen name="MangaAll" component={AllProduct} />
      <Stack.Screen name="DetailsReader" component={DetailsReader} />
      <Stack.Screen name="Chapter" component={Chapter} />
    </Stack.Navigator>
  );
};

export default UserNavigation;
