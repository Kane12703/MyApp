import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styleHome from '../../themes/HomeCss/styleHome';
import image from '../../assets/contain/image';

const HeaderMain = props => {
  const {navigation} = props;
  return (
    <View style={styleHome.header}>
      <View
        style={styleHome.user}>
        <TouchableOpacity
         onPress={() => navigation.navigate('MyProfile')}>
          <Image source={image.imgUser} style={styleHome.imgUser} />
        </TouchableOpacity>
        <View style={styleHome.nameUser}>
          <Text style={styleHome.describe}>Stay treding!</Text>
          <Text style={styleHome.textName}>Kayza Kirito</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('MangaAll')}
        style={styleHome.setting}>
        <Image source={image.iconSetting} style={styleHome.iconSetting} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderMain;
