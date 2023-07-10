import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import styleHome from '../../../themes/HomeCss/styleHome';
import image from '../../../assets/contain/image';
import LinearGradient from 'react-native-linear-gradient';
import {SpeedDial} from '@rneui/themed';
import HeaderMain from '../../../utilities/HeaderMain/HeaderMain';

const Home = props => {
  const {navigation} = props;
  const [open, setOpen] = React.useState(false);

  const renderItem = ({item}) => {
    const {name, author, Imagee} = item;

    return (
      <TouchableOpacity style={styleHome.productTreding1} onPress={()=>navigation.navigate('Detail')}>
        <Image source={{uri: Imagee}} style={styleHome.imgProductTreding} />
        <Text style={styleHome.textName}>{name}</Text>
        <Text style={styleHome.author}>{author}</Text>
      </TouchableOpacity>
    );
  };

  const renderItemReader = ({item}) => {
    const {nameReader, imagee} = item;

    return (
      <TouchableOpacity style={styleHome.userTopReader} onPress={()=>navigation.navigate('DetailsReader')}>
        <Image style={styleHome.imgUserTopReader} source={{uri: imagee}} />
        <Text style={styleHome.textUserTopReader}>{nameReader}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styleHome.container}>
     <HeaderMain navigation={navigation} />
      <View style={styleHome.search}>
        <Image source={image.iconSearch} style={styleHome.iconSearch} />
        <TextInput
          style={styleHome.inputSearch}
          placeholder="Search manga"
          placeholderTextColor={'#424242'}
        />
        <Image source={image.iconFillter} style={styleHome.iconFillter} />
      </View>
      <View style={styleHome.treding}>
        <Text style={styleHome.textTreding}>Trending Manga</Text>
        <TouchableOpacity style={styleHome.dots}>
          <Image source={image.iconDot} style={styleHome.iconDot} />
          <Image source={image.iconDot} style={styleHome.iconDot} />
          <Image source={image.iconDot} style={styleHome.iconDot} />
        </TouchableOpacity>
      </View>
      <View style={styleHome.productTreding}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={Math.random}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </View>

      <LinearGradient
        style={styleHome.read}
        colors={['#A2B2FC', '#FDF6A6']}
        locations={[0.1551, 1.3701]}>
        <View style={styleHome.topReaders}>
          <Text style={styleHome.textTopReader}>Top Readers</Text>
          <TouchableOpacity style={styleHome.dots}>
            <Image source={image.icondotWhite} style={styleHome.iconDot} />
            <Image source={image.icondotWhite} style={styleHome.iconDot} />
            <Image source={image.icondotWhite} style={styleHome.iconDot} />
          </TouchableOpacity>
        </View>
        <View style={styleHome.informationTopReader}>
          <FlatList
            data={dataReader}
            renderItem={renderItemReader}
            keyExtractor={Math.random}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        </View>
      </LinearGradient>
      <View style={styleHome.continueRead}>
        <Text style={styleHome.textContinueRead}>Continue Reading</Text>
        <TouchableOpacity style={styleHome.btnContinue}>
          <View style={styleHome.informationContinue}>
            <Image source={image.product} style={styleHome.imgContinue} />
            <View style={styleHome.informationMangaContinue}>
              <Text style={styleHome.nameContine}>Evangelion</Text>
              <Text style={styleHome.chapterContiue}>Chapter 89</Text>
            </View>
          </View>
          <Image source={image.iconContinue} style={styleHome.iconContinue} />
        </TouchableOpacity>
      </View>

      <SpeedDial
        style={styleHome.settingMenu}
        isOpen={open}
        icon={() => (
          <Image style={styleHome.iconSettingTest} source={image.iconSetting} />
        )}
        openIcon={() => (
          <Image style={styleHome.iconSettingTest} source={image.iconSetting} />
        )}
        onOpen={() => setOpen(!open)}
        onClose={() => setOpen(!open)}
        color="#424242">
        <SpeedDial.Action
         color='white'
          title="Manga"
          onPress={() => navigation.navigate('AllProduct')}
        />
        <SpeedDial.Action
        color='white'
          // icon={{name: 'delete', color: 'white'}}
          title="Logout"
          onPress={() => navigation.navigate('Detail')}
        />
          <SpeedDial.Action
        color='white'
          // icon={{name: 'delete', color: 'white'}}
          title="Profile"
          onPress={() => navigation.navigate('MyProfile')}
        />
           <SpeedDial.Action
        color='white'
          // icon={{name: 'delete', color: 'white'}}
          title="Setting"
          onPress={() => navigation.navigate('Hello')}
        />
        
        

  
      </SpeedDial>
    </View>
  );
};

export default Home;

var data = [
  {
    _id: '63bfa809c4f47f0016aee205',
    name: 'Solo Leveling',
    author: 'Kane',
    Imagee:
      'https://techkalzen.com/wp-content/uploads/2020/07/solo-leveling-1.png',
  },
  {
    _id: '63bfa809c4f47f0016aee205',
    name: 'Solo Leveling',
    author: 'Kane',
    Imagee:
      'https://i.ytimg.com/vi/GM_GFLsJ8sY/maxresdefault.jpg',
  },
  {
    _id: '63bfa809c4f47f0016aee205',
    name: 'Solo Leveling',
    author: 'Kane',
    Imagee:
      'https://upload.wikimedia.org/wikipedia/vi/9/99/Solo_Leveling_Webtoon.png',
  },
  {
    _id: '63bfa809c4f47f0016aee205',
    name: 'Solo Leveling',
    author: 'Kane',
    Imagee:
      'https://sg.cdnki.com/truyen-tranh-danh-nhau-han-quoc---aHR0cHM6Ly9pbWc1LnRodXRodWF0cGhhbm1lbS52bi91cGxvYWRzLzIwMjEvMDkvMjkvdG9wLTIwLW1hbmh3YS1oYXktbmhhdC1oaWVuLW5heS1raG9uZy10aGUtYm8tbG9fMDg0OTMxOTA5LmpwZw==.webp',
  },
];

var dataReader = [
  {
    nameReader: 'Melidos',
    imagee:
      'https://thuthuatnhanh.com/wp-content/uploads/2018/07/anh-dai-dien-dep-652x580.jpg',
  },
  {
    nameReader: 'Melidos',
    imagee:
      'https://i.pinimg.com/736x/59/18/d8/5918d8e9040516b65f93c75a9c5b8175.jpg',
  },
  {
    nameReader: 'Melidos',
    imagee:
      'https://img2.thuthuatphanmem.vn/uploads/2018/11/30/anh-dai-dien-anime_104204770.jpg',
  },
  {
    nameReader: 'Melidos',
    imagee:
      'https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2022/04/Anh-avatar-dep-anh-dai-dien-FB-Tiktok-Zalo.jpg?ssl=1',
  },
  {
    nameReader: 'Melidos',
    imagee:
      'https://antimatter.vn/wp-content/uploads/2022/11/hinh-avatar-anime-nam-ngau.jpg',
  },
  {
    nameReader: 'Melidos',
    imagee:
      'https://khoinguonsangtao.vn/wp-content/uploads/2022/07/hinh-anh-avatar-anime-boy-diu-dang.jpg',
  },
  {
    nameReader: 'Melidos',
    imagee:
      'https://hanoitop10.com/wp-content/uploads/2023/02/anh-avatar-cute_1.jpg',
    }
];
