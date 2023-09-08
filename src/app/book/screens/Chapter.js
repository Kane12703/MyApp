import {StyleSheet, Text,FlatList,Image, View} from 'react-native';
import React from 'react';

const Chapter = () => {
    const renderItem = ({item}) => {
        const {hinh} = item;
        return (
          <View style={{width:'100%'}}>
            {/* <Image style={{with:'100%',height:300}} source={{uri:hinh}}/> */}
          </View>
        );
      };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={Math.random}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Chapter;
var data = [
    {

      hinh:
        'https://p.ntcdntempv26.com/content/image.jpg?data=pqMwyRrINs4gOXKNLmaUy71A5qYEqF/PllL5sp40H0UHMqL03ES9KrPpxjqnL/TpgvwAcPx/9g4hHxdc0Jp9o+HmYb1HovicTCou6FtFT5LESoEPweJ+Tn2l5W9i0DV4',
    },
    {

      hinh:
        'https://p.ntcdntempv26.com/content/image.jpg?data=pqMwyRrINs4gOXKNLmaUy71A5qYEqF/PllL5sp40H0UHMqL03ES9KrPpxjqnL/TpgvwAcPx/9g4hHxdc0Jp9o+HmYb1HovicTCou6FtFT5LESoEPweJ+Tn2l5W9i0DV4',
    },

  ];
