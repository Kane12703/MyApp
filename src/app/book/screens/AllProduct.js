import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import styleAllProduct from '../../../themes/AllProductCss/styleAllProduct';
import styleHome from '../../../themes/HomeCss/styleHome';
import image, {product} from '../../../assets/contain/image';
  const AllProduct =() => {
  const [activeTab, setActiveTab] = useState(0);
  const renderItem = ({item}) => {
    const {name, chapter, sub, Imagee} = item;
    return (
      <TouchableOpacity style={styleAllProduct.infomationProduct}>
        <Image source={{uri: Imagee}} style={styleAllProduct.imgProduct} />
        <Text style={styleAllProduct.nameProduct}>{name}</Text>
        <View style={styleAllProduct.infomationChapter}>
          <Text style={styleAllProduct.sub}>{sub}</Text>
          <Text style={styleAllProduct.chapter}>{chapter}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const handleTabPress = tabIndex => {
    setActiveTab(tabIndex);
    const selectedCategory = tabData[tabIndex].toLowerCase();
    const filteredProducts = data.filter(
      item => item.Category.toLowerCase() === selectedCategory,
    );
    setFilteredData(filteredProducts);
  };

  const tabData = [
    'All',
    'Drama',
    'Magic',
    'Action',
    'Comedy',
    'Psychology',
    'Thriller',
    'Manhwa',
  ];

  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    if (activeTab === 0) {
      setFilteredData(data);
    } else {
      const selectedCategory = tabData[activeTab];
      const filteredProducts = data.filter(
        item => item.Category === selectedCategory,
      );
      setFilteredData(filteredProducts);
    }
  }, [activeTab]);

  return (
    <View style={styleAllProduct.containerAllProduct}>
      <ScrollView
        style={styleAllProduct.tabList}
        horizontal
        showsHorizontalScrollIndicator={false}>
        <View style={styleAllProduct.tabContainer}>
          {tabData.map((tab, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styleAllProduct.tabButton,
                activeTab === index && styleAllProduct.activeTabButton,
              ]}
              onPress={() => handleTabPress(index)}>
              <Text>{tab}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View style={styleAllProduct.product}>
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()} 
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default AllProduct;

var data = [
  {
    Category: 'Drama',
    name: 'Solo Leveling',
    chapter: 'Chapter 226',
    sub: 'English',
    Imagee: 'https://wallpaperaccess.com/full/3231246.png',
  },
  {
    Category: 'Action',
    name: 'Solo Leveling',
    chapter: 'Chapter 226',
    sub: 'English',
    Imagee: 'https://wallpaperaccess.com/full/3231246.png',
  },
  {
    Category: 'Magic',
    name: 'Solo Leveling',
    chapter: 'Chapter 226',
    sub: 'English',
    Imagee: 'https://wallpaperaccess.com/full/3231246.png',
  },
  {
    Category: 'Drama',
    name: 'Solo Leveling',
    chapter: 'Chapter 226',
    sub: 'English',
    Imagee: 'https://wallpaperaccess.com/full/3231246.png',
  },
  {
    Category: 'Drama',
    name: 'Solo Leveling',
    chapter: 'Chapter 226',
    sub: 'English',
    Imagee: 'https://wallpaperaccess.com/full/3231246.png',
  },
  {
    Category: 'Comedy',
    name: 'Solo Leveling',
    chapter: 'Chapter 226',
    sub: 'English',
    Imagee: 'https://wallpaperaccess.com/full/3231246.png',
  },
  {
    Category: 'Comedy',
    name: 'Solo Leveling',
    chapter: 'Chapter 226',
    sub: 'English',
    Imagee: 'https://wallpaperaccess.com/full/3231246.png',
  },
  {
    Category: 'Comedy',
    name: 'Solo Leveling',
    chapter: 'Chapter 226',
    sub: 'English',
    Imagee: 'https://wallpaperaccess.com/full/3231246.png',
  },
  {
    Category: 'Thriller',
    name: 'Solo Leveling',
    chapter: 'Chapter 226',
    sub: 'English',
    Imagee: 'https://wallpaperaccess.com/full/3231246.png',
  },
  {
    Category: 'Manhwa',
    name: 'Solo Leveling',
    chapter: 'Chapter 226',
    sub: 'English',
    Imagee: 'https://wallpaperaccess.com/full/3231246.png',
  },
  {
    Category: 'Manhwa',
    name: 'Solo Leveling',
    chapter: 'Chapter 226',
    sub: 'English',
    Imagee: 'https://wallpaperaccess.com/full/3231246.png',
  },
];
