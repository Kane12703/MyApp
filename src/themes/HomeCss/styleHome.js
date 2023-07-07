import {StyleSheet} from 'react-native';
import Color from '../../assets/contain/Color';

const styleHome = StyleSheet.create({
  container: {
    position:'relative',
    flex: 1,
    alignItems: 'center',
    backgroundLinearGradient: '90deg, #ff0000 40%, #00ff00 60%',
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
    width: 320,
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  user: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textName: {
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 18,
    fontWeight: 400,
    color: Color.primaryBlack,
  },
  describe: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: 400,
    fontStyle: 'normal',
    color: Color.secondaryGray,
  },

  imgUser: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  iconSetting: {
    height: 45,
    width: 45,
  },
  //search
  search: {
    width: 320,
    height: 45,
    borderWidth: 0.5,
    borderColor: '#DCDCDC',
    borderRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.white,
    justifyContent: 'space-around',
    marginTop: 20,
  },
  iconSearch: {
    width: 20,
    height: 20,
  },
  inputSearch: {
    width: '70%',
  },
  iconFillter: {
    width: 20,
    height: 10,
  },

  //treding
  textTreding: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 400,
    fontStyle: 'normal',
    color: Color.primaryBlack,
  },
  treding: {
    marginTop: 20,
    width: 320,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dots: {
    flexDirection: 'row',
  },
  iconDot: {
    marginRight: 2,
    height: 5,
    width: 5,
  },

  //product
  productTreding: {
    marginLeft: 20,
    height: 200,
  },
  productTreding1: {
    width: 130,
    alignItems: 'center',
    marginTop: 10,
  },
  imgProductTreding: {
    height: 150,
    width: 120,
    borderRadius: 10,
  },
  textName: {
    fontSize: 18,
    lineHeight: 21,
    fontStyle: 'normal',
    fontWeight: 400,
    color: Color.primaryBlack,
  },
  author: {
    padding: 0,
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 12,
    color: Color.secondaryGray,
  },

 
  //read
  read:{
    position:'absolute',
    width:'100%',
    height:340,
    bottom:0,
    borderTopRightRadius:30,
    borderTopLeftRadius:30,
  },
  topReaders:{
    marginHorizontal:30,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:30,
  },
  textTopReader:{
    fontStyle:'normal',
    fontSize:18,
    lineHeight:21,
    color:Color.white,
    fontWeight:500,
  },

  imgUserTopReader:{
    height:60,
    width:60,
    borderRadius:30,
    borderWidth:2,
    borderColor:Color.white,
  },
  textUserTopReader:{
    fontSize:12,
    fontStyle:'normal',
    color:Color.white,
    fontWeight:400,

  },
  userTopReader:{
    marginLeft:30,
    alignItems:'center',
  },
  informationTopReader:{
    marginTop:15,
  },

  continueRead:{
    width:'100%',
    backgroundColor:Color.main,
    position:'absolute',
    bottom:0,
    height:170,
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
  },
  textContinueRead:{
    marginTop:20,
    fontSize:18,
    fontWeight:'500',
    fontStyle:'normal',
    color:Color.white,
    lineHeight:18,
    marginLeft:30,
  },
  imgContinue:{
    height:50,
    width:50,
    borderRadius:50,

  },
  iconContinue:{
    height:20,
    width:20,

  },
  btnContinue:{
    marginTop:10,
    flexDirection:'row',
    width:300,
    height:75,
    backgroundColor:Color.white,
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:10,
    borderRadius:60,
    marginHorizontal:30,
  },
  informationContinue:{
    flexDirection:'row',
    alignItems:'center',

    
  },
  nameContine:{
    fontSize:12,
    lineHeight:14,
    fontStyle:'normal',
    fontWeight:'400',
    color:Color.primaryBlack,
    marginBottom:10,
  },
  chapterContiue:{
    fontSize:12,
    lineHeight:14,
    fontStyle:'normal',
    color:Color.primaryBlack,
  },
  informationMangaContinue:{
    paddingLeft:10,
  },
  iconSettingTest:{
    height:45,
    width:45,
  },
});
export default styleHome;
