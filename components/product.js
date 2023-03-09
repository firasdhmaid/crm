import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const product = (props) => {
  return (
    <View style={styles.main}>
      <View style={styles.imgcontainer}>
        <Image style={styles.img} source ={require('../src/images/me.jpg')}/>
      </View>
      <View style={styles.prodcontainer}>
        <Text style = {styles.texttitle}>{props.title}</Text>
        <Text style = {styles.textcontent}>{props.content}</Text>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
    main : {
        backgroundColor : '#EEEEEE',
        width : '100%',
        height : 150,
        margin : 15,
        flexDirection : 'row',
        padding : 10,
        marginRight: 15,

    },
    img: {
        width : '100%',
        height : '100%',
    },
    imgcontainer : {
        width : '35%',
        height : '100%',
        
    },
    prodcontainer : {
        width : '53%',
        paddingLeft : 10
    },
    texttitle : {
        color : 'black',
        fontSize : 15,
        fontWeight : '600',
        paddingBottom : 5
    },
    textcontent : {
        color : 'black',
        fontSize : 15,
        fontWeight : '300'
    }
})
export default product