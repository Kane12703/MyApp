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

const Home = props => {
  const {navigation} = props;
  const [open, setOpen] = React.useState(false);

  const renderItem = ({item}) => {
    const {name, author, Imagee} = item;

    return (
      <TouchableOpacity style={styleHome.productTreding1}>
        <Image source={{uri: Imagee}} style={styleHome.imgProductTreding} />
        <Text style={styleHome.textName}>{name}</Text>
        <Text style={styleHome.author}>{author}</Text>
      </TouchableOpacity>
    );
  };

  const renderItemReader = ({item}) => {
    const {nameReader, imagee} = item;

    return (
      <TouchableOpacity style={styleHome.userTopReader}>
        <Image style={styleHome.imgUserTopReader} source={{uri: imagee}} />
        <Text style={styleHome.textUserTopReader}>{nameReader}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styleHome.container}>
      <View style={styleHome.header}>
        <View style={styleHome.user}>
          <Image source={image.imgUser} style={styleHome.imgUser} />
          <View style={styleHome.nameUser}>
            <Text style={styleHome.describe}>Stay treding!</Text>
            <Text style={styleHome.textName}>Kayza Kirito</Text>
          </View>
        </View>
        <TouchableOpacity style={styleHome.setting}>
          <Image source={image.iconSetting} style={styleHome.iconSetting} />
        </TouchableOpacity>
      </View>
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
          title="All"
          onPress={() => navigation.navigate('AllProduct')}
        />
        <SpeedDial.Action
        color='white'
          // icon={{name: 'delete', color: 'white'}}
          title="List"
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
          title=""
          onPress={() => navigation.navigate('Detail')}
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
      'https://upload.wikimedia.org/wikipedia/vi/9/99/Solo_Leveling_Webtoon.png',
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
      'https://upload.wikimedia.org/wikipedia/vi/9/99/Solo_Leveling_Webtoon.png',
  },
  {
    _id: '63bfa809c4f47f0016aee205',
    name: 'Solo Leveling',
    author: 'Kane',
    Imagee:
      'https://upload.wikimedia.org/wikipedia/vi/9/99/Solo_Leveling_Webtoon.png',
  },
];

var dataReader = [
  {
    nameReader: 'Melidos',
    imagee:
      'https://thiepnhanai.com/wp-content/uploads/2021/05/hinh-anh-dai-dien-dep-1.jpg',
  },
  {
    nameReader: 'Melidos',
    imagee:
      'https://thiepnhanai.com/wp-content/uploads/2021/05/hinh-anh-dai-dien-dep-1.jpg',
  },
  {
    nameReader: 'Melidos',
    imagee:
      'https://thiepnhanai.com/wp-content/uploads/2021/05/hinh-anh-dai-dien-dep-1.jpg',
  },
  {
    nameReader: 'Melidos',
    imagee:
      'https://thiepnhanai.com/wp-content/uploads/2021/05/hinh-anh-dai-dien-dep-1.jpg',
  },
  {
    nameReader: 'Melidos',
    imagee:
      'https://thiepnhanai.com/wp-content/uploads/2021/05/hinh-anh-dai-dien-dep-1.jpg',
  },
  {
    nameReader: 'Melidos',
    imagee:
      'https://thiepnhanai.com/wp-content/uploads/2021/05/hinh-anh-dai-dien-dep-1.jpg',
  },
  {
    nameReader: 'Melidos',
    imagee:
      'https://thiepnhanai.com/wp-content/uploads/2021/05/hinh-anh-dai-dien-dep-1.jpg',
  },
];
