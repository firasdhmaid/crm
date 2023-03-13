import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Card = (props) => {
  return (
    <TouchableOpacity style={styles.card} /*onPress={onPress}*/>
    <Image
      style={styles.thumb}
      source={require('../src/images/carte.png')}
    />
    <View style={styles.infoContainer}>
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.type}>{props.type}</Text>
      <Text style={styles.desc}>{props.desc}</Text>
      <View style={styles.btncontainer}>
      <TouchableOpacity style={styles.button2} onPress={() =>navigation.navigate('Signin')}>
          <Text style={styles.btntext2}>Card details </Text>
      </TouchableOpacity>
      </View>
    </View>
    
  </TouchableOpacity>
  )
}

export default Card

const styles = StyleSheet.create({
    card: {
       
        width : '100%',
        margin : 10,
        height : 200,
         backgroundColor: 'white',
         borderRadius: 16,
         shadowOpacity: 0.2,
         shadowRadius: 4,
         shadowColor: 'black',
     
       },
       thumb: {
         borderTopLeftRadius: 16,
         borderTopRightRadius: 16,
         
         position: "absolute",
         width: 128.25,
         height: 199.42,
         left: 0,
         top: 0,
       },
     infoContainer: {
         display: "flex",
         flexDirection: "column",
         alignItems: "flex-start",
         paddingTop: 14,
         paddingBottom:10,
         paddingRight:10,
         paddingLeft:10,
         width: 190,
         height: 260,
         marginLeft : '35%',
         background: "#FFFFFF",
         borderRadius: 4,
     },
     
      name: {
         fontSize: 22,
         fontWeight: 'bold',
       },
       price: {
         fontSize: 16,
         fontWeight: '600',
         marginBottom: 8,
       },
       button2: {
         alignItems: "center",
         padding:5,
         marginTop:50,
         marginLeft:20,
         width: 180,
         height: 35,
         borderWidth: 1,
         borderColor:"#2EA8EC",
         borderStyle: "solid",
         borderRadius: 12,
       },
       
       btntext2:{
         fontFamily: "SF Pro Display",
         fontSize: 16,
         textAlign: "center",
         color: "#2EA8EC",
       },
})