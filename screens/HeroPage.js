import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../components/header'

const HeroPage = () => {
  return (
    <View>
        <Header />
        <View style={styles.main}>
          <View>
              <Image style={styles.imgstyle} source={require('../src/images/carte.png')}/>
              <Text style={styles.textstyle}> Your unique and contactless business card is here </Text>
          </View>
          <Text style={styles.textstyle2}> All your contact information in one card </Text>
          <View style={styles.btncontainer}>
              <TouchableOpacity style={styles.button} >
                  <Text style={styles.btntext}>Create Account  </Text>
                  <Image style={styles.icon} source={require('../src/images/Icon.png')}/>
              </TouchableOpacity>
          </View>
          <View style={styles.btncontainer}>
              <TouchableOpacity style={styles.button2} >
                  <Text style={styles.btntext2}>Login </Text>
              </TouchableOpacity>
          </View>
      
    </View>
    </View>


  )
}
const styles = StyleSheet.create({
  main:{
  backgroundColor: "#1b1b1b",
  height: "100%", 
  marginTop:70,
},
imgstyle:{
  marginHorizontal:50,

},
textstyle:{
  color : 'white',
  fontSize : 22,
  textAlign : 'center',
  position : "absolute",
  marginTop : 200,
  fontFamily : 'CalSans-SemiBold',
  
},
textstyle2: {
  color : 'white',
  fontFamily: "Montserrat-VariableFont_wght",
  fontSize: 16,
  fontWeight: 400,
  lineHeight: 80,
  letterSpacing: 0,
  textAlign: "center",
  
},
btncontainer:{
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
},
button: {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding:15,
  width: 211,
  height: 56,
  backgroundColor : "#2EA8EC",
  borderRadius: 16,
  marginBottom:10,
},

btntext:{
  fontFamily: "SF Pro Display",
  fontSize: 20,
  lineHeight: 23,
  textAlign: "center",
  color: "#FFFFFF",
},
button2: {
  alignItems: "center",
  padding:15,
  width: 211,
  height: 56,
  borderWidth: 1,
  borderColor:"#2EA8EC",
  borderStyle: "solid",
  borderRadius: 12,
},

btntext2:{
  fontFamily: "SF Pro Display",
  fontSize: 20,
  lineHeight: 23,
  textAlign: "center",
  color: "#2EA8EC",
},
})
export default HeroPage