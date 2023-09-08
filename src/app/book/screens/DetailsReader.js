import {
  View,
  Text,
  Image,
  FlatList,
  PanResponder,
  Animated,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useRef } from 'react';
import styleMyProfile from '../../../themes/MyProfileCss/styleMyProfile';
import image from '../../../assets/contain/image';
import Color from '../../../assets/contain/Color';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BottomSheet, ListItem } from '@rneui/themed';

const DetailsReader = (props) => {
  const { goBack } = props.navigation;

  const [isVisible, setIsVisible] = useState(false);
  const translateY = useRef(new Animated.Value(0)).current;
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      if (gestureState.dy > 0) {
        translateY.setValue(gestureState.dy);
      }
    },
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dy > 50) {
        setIsVisible(false);
      } else {
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
      }
    },
  });
  const list = [
    { title: 'List Item 1' },
    { title: 'List Item 2' },
    { title: 'List Item 3' },
    { title: 'List Item 4' },
    {
      title: 'Cancel',
      containerStyle: { backgroundColor: 'red' },
      titleStyle: { color: 'white' },
      onPress: () => setIsVisible(false),
    },
  ];
  const handleSettingPress = () => {
    setIsVisible(true);
    translateY.setValue(0); // Đặt giá trị translateY về 0
  };

  const renderListItems = () => {
    return list.map((l, i) => (
      <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress}>
        <ListItem.Content>
          <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    ));
  };
  const renderItem = ({ item }) => {
    const { name, hinh } = item;

    return (
      <View style={styleMyProfile.product}>
        <TouchableOpacity style={styleMyProfile.productReviews}>
          <Image source={{ uri: hinh }} style={styleMyProfile.imgProduct} />
          <Text style={styleMyProfile.textName}>{name}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styleMyProfile.productReviews}>
          <Image source={{ uri: hinh }} style={styleMyProfile.imgProduct} />
          <Text style={styleMyProfile.textName}>{name}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styleMyProfile.myProfileContainer}>
      <View style={styleMyProfile.headerContainer}>
        <TouchableOpacity onPress={() => goBack()}>
          <Image style={styleMyProfile.iconBack} source={image.back}></Image>
        </TouchableOpacity>
        <Text style={styleMyProfile.textHeader}>Details Reader </Text>
        <TouchableOpacity
          style={styleMyProfile.setting}
          onPress={handleSettingPress}>


          <Image style={styleMyProfile.iconDots} source={image.iconDot}></Image>
          <Image style={styleMyProfile.iconDots} source={image.iconDot}></Image>
          <Image style={styleMyProfile.iconDots} source={image.iconDot}></Image>
        </TouchableOpacity>
      </View>
      <View style={styleMyProfile.infomationConainer}>
        <View style={styleMyProfile.infomationUser}>
          <View style={styleMyProfile.contentUser}>
            <Image style={styleMyProfile.imgUser} source={image.backGround} />
            <View style={styleMyProfile.nameUser}>
              <Text style={styleMyProfile.nickname}>rengen_ill</Text>
              <Text style={styleMyProfile.name}>illia Frunza</Text>
            </View>
          </View>
          <Text style={styleMyProfile.introduce}>
            I`m student from Ukraine. I have been a resident of Atom Space for 4
            years now...
          </Text>
        </View>
        <View style={styleMyProfile.line}></View>
        <View style={styleMyProfile.statistics}>
          <View style={{ alignItems: 'center' }}>
            <Text style={styleMyProfile.numberStatistics}>24</Text>
            <Text style={styleMyProfile.textStatistics}>Reviews</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={styleMyProfile.numberStatistics}>425</Text>
            <Text style={styleMyProfile.textStatistics}>Followers</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={styleMyProfile.numberStatistics}>1.5K</Text>
            <Text style={styleMyProfile.textStatistics}>Likes</Text>
          </View>
        </View>
        <TouchableOpacity style={styleMyProfile.btnFollowed}>
          <Text style={styleMyProfile.textBtnFollowed}>Followed</Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          width: '100%',
          fontSize: 16,
          fontWeight: 400,
          color: Color.primaryBlack,
        }}>
        Reviews
      </Text>
      <View style={styleMyProfile.productContainer}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={Math.random}
          showsVerticalScrollIndicator={false}
          vertical
        />
      </View>
      {isVisible && (
        <View style={styleMyProfile.bottomSheetContainer}>
          <Animated.View
            style={[
              styleMyProfile.bottomSheset,
              {
                transform: [{ translateY }],
              },
            ]}
            {...panResponder.panHandlers}>
            {renderListItems()}
          </Animated.View>
        </View>
      )}
    </View>
  );
};

var data = [
  {
    _id: '63bfa809c4f47f0016aee205',
    name: 'Solo Leveling',
    hinh: 'https://techkalzen.com/wp-content/uploads/2020/07/solo-leveling-1.png',
  },
  {
    _id: '63bfa809c4f47f0016aee205',
    name: 'Solo Leveling',
    hinh: 'https://techkalzen.com/wp-content/uploads/2020/07/solo-leveling-1.png',
  },
  {
    _id: '63bfa809c4f47f0016aee205',
    name: 'Solo Leveling',
    hinh: 'https://techkalzen.com/wp-content/uploads/2020/07/solo-leveling-1.png',
  },
  {
    _id: '63bfa809c4f47f0016aee205',
    name: 'Solo Leveling',
    hinh: 'https://techkalzen.com/wp-content/uploads/2020/07/solo-leveling-1.png',
  },
  {
    _id: '63bfa809c4f47f0016aee205',
    name: 'Solo Leveling',
    hinh: 'https://techkalzen.com/wp-content/uploads/2020/07/solo-leveling-1.png',
  },
  {
    _id: '63bfa809c4f47f0016aee205',
    name: 'Solo Leveling',
    hinh: 'https://techkalzen.com/wp-content/uploads/2020/07/solo-leveling-1.png',
  },
];

export default DetailsReader;
