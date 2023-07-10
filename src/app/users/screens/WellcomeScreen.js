import React from 'react';
import {View, ImageBackground, Text, Image, StyleSheet} from 'react-native';
import styleWellcome from '../../../themes/WellcomeCss/styleWellcome';
import image from '../../../assets/contain/image';

const WelcomeScreen = (props) => {
  const{navigation}=props;
  setTimeout(()=>{
    navigation.navigate("Login");
  },3000)
  return (
    <View style={styleWellcome.container}>
      <ImageBackground
        source={image.wellcome}
        style={styleWellcome.imgWellcome}>
        <View style={styleWellcome.textWecome}>
          <Text style={{color:'#FFF',fontSize:43,fontWeight:700}}>Wellcome to</Text>
          <Text style={{color:'#1AB65C',fontSize:96,fontWeight:700}}>Kane</Text>
          <Text style={{color:'#FFF',fontSize:16,fontWeight:600}}>
          Step into captivating stories with immersive reading app!
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;
