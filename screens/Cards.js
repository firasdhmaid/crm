import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import Card from '../components/Card'

const Cards = () => {
  return (
    <View >
    <Text style={styles.title}>Manage your cards</Text>
    <View style={styles.btncontainer}>
          <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('Signup')}>
          <Image style={styles.icon} source={require('../src/images/Icon2.png')}/>
              <Text style={styles.btntext}>Create a new card  </Text>
            
          </TouchableOpacity>
      </View>
<Card name='cardname1' type='cardtype' desc='User description of the card here'/>
{/*second card*/}
<Card name='cardname2' type='cardtype' desc='User description of the card here'/>
  </View>

  )
}

export default Cards

const styles = StyleSheet.create({
    title:{
        fontFamily : 'CalSans-SemiBold',
        textAlign:"center",
        fontSize:20,
        color: 'black',
    },
    btncontainer:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,
      },
    button: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding:15,
        width: 193,
        height: 48,
        backgroundColor : "#2EA8EC",
        borderRadius: 16,
        marginBottom:10,
      },
      
    btntext:{
        lineHeight: 19,
        textAlign: "center",
        color: "#FFFFFF",
        fontFamily: 'SF Pro Display',
        fontStyle: "normal",
        fontSize: 16,
      },
    icon:{
        marginRight: 10,
      },
      
})