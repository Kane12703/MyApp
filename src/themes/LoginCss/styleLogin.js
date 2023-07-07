import { StyleSheet, Text, View } from 'react-native'
import Color from '../../assets/contain/Color'

const styleLogin = StyleSheet.create({
    container:{
        flex:1,
        position:'relative',
        color:Color.white,
        alignItems:'center',
    },
    textHeader:{
        fontSize:36,
        lineHeight:41,
        fontWeight:'500',
        textAlign:'center',
        color:Color.primaryBlack,
        fontStyle:'normal'

    },
    textDescription:{
        fontSize:16,
        lineHeight:18,
        fontWeight:'400',
        textAlign:'center',
        color:Color.secondaryGray,
    },
    headerLogin :{
        width:'100%',
        position:'absolute',
        left:0,
        top:100,
    },
    btnLogin:{
        width:280,
        height:43,
        flexDirection:'row',
        borderRadius:20,
        borderColor:'#DCDCDC',
        borderWidth:1,
        marginBottom:20,
        alignItems:'center',
        justifyContent:'space-around',
        

    },
    loginOther:{
        position:'absolute',
        width:280,
        height:164,
        top:224,
        alignItems:'center', 
    },
    iconBtnLogin:{
        width:28,
        height:29,

    },
    textBtnLogin:{
        marginRight:60,
    },
    iconBtnFb:{
        backgroundColor:Color.blue,
    },
    loginEmail:{
        alignItems:'center',
        position:'absolute',

        left:0,
        bottom:0,
        height:280,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        width:'100%',
        backgroundColor:'#BFCAE6',
    

    },
    input:{
        padding:0,
        width:280,
        borderBottomColor:Color.white,
        borderBottomWidth:1,
        marginTop:30,
        

    },
    textForgot:{
        marginTop:10,
        color:Color.white,
        width:'100%',
        textAlign:'right',
        paddingRight:40,
    },
    btnLoginEmail:{
        width:280,
        height:43,
        borderRadius:20,
        borderColor:'#DCDCDC',
        borderWidth:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20,
        backgroundColor:Color.primaryBlack,

      
    },
    textBtnLoginEmail:{
        fontSize:16,
        lineHeight:18,
        fontWeight:'400',
        color:Color.white,
    },
    textBlue:{
        color:Color.blue,
    },
    textNav:{
        flexDirection:'row',
    }

})

export default styleLogin