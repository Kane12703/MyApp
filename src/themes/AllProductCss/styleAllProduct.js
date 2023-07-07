import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Color from '../../assets/contain/Color';

const styleAllProduct = StyleSheet.create({
  containerAllProduct: {
    alignItems: 'center',

  },
 
  //product
  infomationProduct: {
    marginBottom: 10,
  },
  imgProduct: {
    width: 310,
    height: 170,
    borderRadius:15,
  },
  infomationChapter:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  nameProduct:{
    fontStyle:'normal',
    fontSize:18,
    lineHeight:21,
    fontWeight:400,
    color:Color.primaryBlack,

  },
  product:{
    marginTop:20,
    height:550,
  },


  

  //tab
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    height: 30,
    borderRadius: 40,
    borderColor:Color.secondaryGray,
    borderWidth:0.5,
    marginRight:10,

  },
  activeTabButton: {
    backgroundColor: '#A2B2FC',
  },


});
export default styleAllProduct;
