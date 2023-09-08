import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';
import React, {useState} from 'react';
import styleDetail from '../../../themes/DetailCss/styleDetail';
import image from '../../../assets/contain/image';

const Detail = (props) => {
  const {navigation}=props;
  const renderItem = ({item, index}) => {
    const {chapter, totalPage} = item;
    const itemNumber = index + 1;

    return (
      <TouchableOpacity style={styleDetail.chapter} onPress={()=>navigation.navigate('Chapter')}>
        <View style={styleDetail.chapterNumber}>
          <Text style={styleDetail.stt}>{itemNumber}</Text>
          <View style={styleDetail.informatitonChapter}>
            <Text style={styleDetail.textChapterNumber}>{chapter}</Text>
            <Text style={styleDetail.textPage}>{totalPage}</Text>
          </View>
        </View>
        <View style={styleDetail.openChapter}>
          <Image style={styleDetail.iconBook} source={image.iconBook} />
        </View>
      </TouchableOpacity>
    );
  };
  const [showFullText, setShowFullText] = useState(false);

  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <View style={styleDetail.container}>
        <ImageBackground source={image.backGround} style={styleDetail.header}>
          <TouchableOpacity style={styleDetail.back} onPress={()=>navigation.navigate('Home')}>
            <Image source={image.iconBack} style={styleDetail.iconBack} />
          </TouchableOpacity>
          <Text style={styleDetail.nameProductHeader}>Solo Leveling</Text>
          <View style={styleDetail.categoryProduct}>
            <Text style={styleDetail.textCategoryProduct}>Manhwa</Text>
          </View>
        </ImageBackground>
      <View style={styleDetail.content}>
        <View style={styleDetail.informatitonProduct}>
          <View style={styleDetail.information}>
            <Text style={styleDetail.nameProduct}>Solo Leveling</Text>
            <View style={styleDetail.view}>
              <Text style={styleDetail.textView}>3M View - </Text>
              <Text style={styleDetail.totalChapter}>170 Chapter</Text>
            </View>
          </View>
          <View style={styleDetail.rate}>
            <Image source={image.star} style={styleDetail.iconRate} />
            <Text style={styleDetail.textRate}>4.7</Text>
          </View>
        </View>
        <Text style={styleDetail.describe}>About this manga</Text>
        <View style={styleDetail.contentDescription}>
          <Text
            style={[
              styleDetail.textdescribe,
              showFullText ? styleDetail.fullText : styleDetail.partialText,
            ]}>
            Solo Leveling is set in a modern fantasy world. In this world, there
            are gates that connect to dungeons filled with dangerous monsters.
            However, within these mysterious gates also lie numerous valuable
            resources that governments of various countries desire to exploit.
          </Text>
          <TouchableOpacity onPress={toggleFullText}>
            <Image
              source={image.iconCheckBlack}
              style={styleDetail.imageDescribe}
            />
          </TouchableOpacity>
        </View>
        <View style={styleDetail.chapterContainer}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={Math.random}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
      <View style={styleDetail.bottom}>
        <TouchableOpacity style={styleDetail.evaluate}>
          <Image source={image.iconNoStar} style={styleDetail.iconNoStar} />
        </TouchableOpacity>
        <TouchableOpacity style={styleDetail.btnRead}>
          <Text style={styleDetail.textRead}>Read Manga</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Detail;
var data = [
  {
    loai: 'drama',
    chapter: 'Chapter 1',
    totalPage: '30 Page',
  },
  {
    loai: 'drama',
    chapter: 'Chapter 1',
    totalPage: '30 Page',
  },
  {
    loai: 'drama',
    chapter: 'Chapter 1',
    totalPage: '30 Page',
  },
  {
    loai: 'drama',
    chapter: 'Chapter 1',
    totalPage: '30 Page',
  },
  {
    loai: 'drama',
    chapter: 'Chapter 1',
    totalPage: '30 Page',
  },
  {
    loai: 'drama',
    chapter: 'Chapter 1',
    totalPage: '30 Page',
  },
  {
    loai: 'drama',
    chapter: 'Chapter 1',
    totalPage: '30 Page',
  },
  {
    loai: 'drama',
    chapter: 'Chapter 1',
    totalPage: '30 Page',
  },
  {
    loai: 'drama',
    chapter: 'Chapter 1',
    totalPage: '30 Page',
  },
  {
    loai: 'manhwa',
    chapter: 'Chapter 1',
    totalPage: '30 Page',
  },
  {
    loai: 'drama',
    chapter: 'Chapter 1',
    totalPage: '30 Page',
  },
  {
    loai: 'action',
    chapter: 'Chapter 1',
    totalPage: '30 Page',
  },
  {
    loai: 'drama',
    chapter: 'Chapter 1',
    totalPage: '30 Page',
  },
];
