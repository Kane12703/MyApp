import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Image,
  } from 'react-native';
  import React, {useState} from 'react';
  
  import styleLogin from '../../../themes/LoginCss/styleLogin';
  import Color from '../../../assets/contain/Color';
  import image from '../../../assets/contain/image';
  import LinearGradient from 'react-native-linear-gradient';
  
  
  const Register = (props) => {
    const{navigation}=props
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
      <View style={styleLogin.container}>
        <View style={styleLogin.headerLogin}>
          <Text style={styleLogin.textHeader}>Welcome</Text>
          <Text style={styleLogin.textDescription}>Sign Up to start</Text>
        </View>
        <View style={styleLogin.loginOther}>
          <TouchableOpacity style={styleLogin.btnLogin}>
            <Image source={image.google} style={styleLogin.iconBtnLogin} />
            <Text style={styleLogin.textBtnLogin}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styleLogin.btnLogin, styleLogin.iconBtnFb]}>
            <Image source={image.fb} style={styleLogin.iconBtnLogin} />
            <Text style={styleLogin.textBtnLogin}>Continue with Meta</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styleLogin.textNav}>
            <Text> Haven account ?</Text>
            <Text style={styleLogin.textBlue}>Login!</Text>
          </TouchableOpacity>
        </View>
  
        <LinearGradient style={styleLogin.loginEmail} colors={['#A2B2FC', '#FDF6A6']}
          locations={[0.1551, 1.3701]}>
             <TextInput
            style={styleLogin.input}
            placeholder="UserName"
            placeholderTextColor={'#ffff'}
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styleLogin.input}
            secureTextEntry
            placeholder="Password"
            placeholderTextColor={'#ffff'}
            value={password}
            onChangeText={setPassword}
          />
           <TextInput
            style={styleLogin.input}
            secureTextEntry
            placeholder="Re-Password"
            placeholderTextColor={'#ffff'}
            value={password}
            onChangeText={setPassword}
          />
          <Text style={styleLogin.textForgot}>forgot password ?</Text>
          <TouchableOpacity style={[styleLogin.btnLoginEmail,styleLogin.btnSignUp]}>
            <Text style={styleLogin.textBtnLoginEmail}>Sign Up</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  };
  
  export default Register;
  