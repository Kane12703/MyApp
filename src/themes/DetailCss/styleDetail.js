import {StyleSheet} from 'react-native';
import Color from '../../assets/contain/Color';
import image from '../../assets/contain/image';
import {color} from '@rneui/base';

const styleDetail = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    margin: 0,
  },
  back: {
    position:'absolute',
    top:10,
    left:10,
  },
  iconBack: {
    width: 8.2,
    height: 17.4,
  },
  nameProductHeader: {

    textAlign: 'center',
    lineHeight: 30,
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 600,
    color: Color.white2,
    position: 'absolute',
    left:'35%',
    top: 10,
  },
  header: {
    width: '100%',
    height: 250,

  },

  categoryProduct: {
    position: 'absolute',
    backgroundColor: Color.white,
    borderRadius: 13,
    width: 86,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 10,
    left: 10,
  },
  textCategoryProduct: {
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 15,
    color: Color.primaryBlack,
  },

  //content
  content: {
    marginHorizontal: 20,
  },
  informatitonProduct: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  view: {
    flexDirection: 'row',
  },
  rate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameProduct: {
    fontStyle: 'normal',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 30,
    color: Color.primaryBlack,
  },
  textView: {
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '400',
    color: Color.secondaryGray,
  },
  totalChapter: {
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '400',
    color: Color.secondaryGray,
  },
  iconRate: {
    width: 16,
    height: 15,
  },
  textRate: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 30,
  },

  //description
  contentDescription: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textdescribe: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: Color.primaryBlack,
  },
  partialText: {
    maxHeight: 40,
  },
  fullText: {
    maxHeight: '100%',
  },
  button: {
    marginTop: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: 'lightblue',
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  imageDescribe: {
    width: 25,
    height: 25,
  },
  describe: {
    marginTop: 10,
    fontSize: 16,
    lineHeight: 24,
    fontStyle: 'normal',
    fontWeight: 600,
    color: Color.primaryBlack,
  },
  //chapter
  stt: {
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 36,
    color: '#B8B8D2',
  },
  textChapterNumber: {
    fontSize: 14,
    lineHeight: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    color: Color.primaryBlack,
  },
  textPage: {
    fontStyle: 'normal',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 20,
    color: '#B8B8D2',
  },
  iconBook: {
    width: 18,
    height: 14.25,
  },
  openChapter: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 44,
    height: 44,
    backgroundColor: '#A2B2FC',
    borderRadius: 50,
  },
  chapter: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  chapterNumber: {
    flexDirection: 'row',
  },
  informatitonChapter: {
    marginLeft: 20,
    alignItems: 'center',
  },
  chapterContainer: {
    width: '100%',
    height: 225,
  },
  //bottom
  bottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 95,
    backgroundColor:Color.white,
    borderTopColor:Color.secondaryGray,
    borderWidth:0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  evaluate: {
    marginTop: 10,
    width: 89,
    height: 50,
    backgroundColor: '#FFEBF0',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  },
  iconNoStar: {
    width: 18.33,
    height: 17.5,
  },
  btnRead: {
    marginTop: 10,
    width: 220,
    height: 50,
    backgroundColor: '#A2B2FC',
    borderRadius: 10,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textRead: {
    fontSize: 16,
    height: 24,
    fontStyle: 'normal',
    fontWeight: '500',
    color: Color.white2,
  },
});
export default styleDetail;
