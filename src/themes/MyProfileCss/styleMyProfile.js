import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Color from '../../assets/contain/Color'


const styleMyProfile = StyleSheet.create({
    myProfileContainer:{
        padding:20,
        position:'relative',
        flex:1,
        alignItems:'center',
     
    },
    iconBack:{
        width:20,
        height:20,
        
    },
    iconDots:{
        width:5,
        height:5,
        marginRight:2,
    
    },
    setting:{
        flexDirection:'row',
    },
    headerContainer:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        
    },
    textHeader:{
        lineHeight:20,
        fontSize:15,
        fontWeight:400,
        color:Color.primaryBlack,
        fontStyle:'normal',
    },
    imgUser:{
        height:60,
        width:60,
        borderRadius:40,
        marginRight:5
    },
    contentUser:{
        flexDirection:'row',
        marginTop:15,
    },
    nickname:{
        fontSize:24,
        fontStyle:'normal',
        fontWeight:400,
        color:Color.primaryBlack,
    },
    name:{
        fontSize:16,
        fontStyle:'normal',
        fontWeight:400,
    },
    nameUser:{
        marginLeft:6,
    },
    infomationUser:{
        marginTop:10,
    },
    introduce:{

        marginTop:10,
        fontSize:12,
        fontStyle:'normal',
        fontWeight:400,
        color:Color.primaryBlack,
    },
    line:{
        width:'100%',
        height:1,
        backgroundColor:Color.secondaryGray,
        marginVertical:20,
    
    },
    numberStatistics:{
        color:Color.primaryBlack,
        fontWeight:400,
        fontSize:24,
    },
    textStatistics:{
        fontSize:12,
        fontWeight:400,
        fontStyle:'normal',
        color:Color.secondaryGray,
    },
    statistics:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around',
        marginBottom:20,
    },

//lisst product
    

    imgProduct:{
        width: 140,
        height:170,
        borderRadius:15,
    },
    textName:{
        fontSize:16,
        fontWeight:400,
        color:Color.primaryBlack,
        lineHeight:20,
    },
    productContainer:{
        position:'absolute',
        height:400,
        width:'100%',
        bottom:10,

    
    },
    product:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginBottom:10,
    },
    infomationConainer:{
        width:'100%',
    },


    //bottom
    bottomSheetContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
      },

      // bottom follow
      btnFollowed:{
        width:'100%',
        height:40,
        backgroundColor:Color.primaryBlack,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
      },

      textBtnFollowed:{
        color:Color.white,
        fontSize:16,
        lineHeight:18.38,
        fontWeight:400,
      },
  
    
   




})
export default styleMyProfile