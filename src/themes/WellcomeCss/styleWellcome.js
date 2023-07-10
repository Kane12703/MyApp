import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const styleWellcome = StyleSheet.create({
    container: {
        flex: 1,
        position:'relative',
       
      },
      title: {
        fontSize: 40,
        fontWeight: 'bold',
        color:"#fff",
      },
      imgWellcome:{
        flex:1,
      },
      textWecome:{
        position:'absolute',
        bottom:50,
        left:30,
      }
})

export default styleWellcome

