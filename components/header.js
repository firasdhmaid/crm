import React from 'react'
import {View , Text , StyleSheet, Image} from 'react-native'
function Header() {
  return (
    <View style={styles.main}>
        <Image style={styles.imgstyle} source={require('../src/images/D.png')}/>
        <View style={styles.line}></View>
        <Text style={styles.text}>D-Carte</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    main:{
        width : '100%',
        height : 70,
        backgroundColor : '#171717',
        position : 'absolute',
        top : 0,
    },
    line : {
        backgroundColor : 'white',
        width : 0.5,
        height : 33,
        position : 'absolute',
        marginLeft : 165,
        marginTop : 20
    },
    text : {
        color : 'white',
        fontSize : 22,
        textAlign : 'center',
        position : "absolute",
        marginTop : 25,
        marginLeft : 170,
        fontFamily : 'ZenDots-Regular',
        fontWeight : 400,
        lineHeight : 23,
        

    },
    imgstyle:{
        marginTop : 20,
        marginLeft : 130
    }
})
export default Header