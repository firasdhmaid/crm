import { View, Text, StyleSheet,Image, TextInput, TouchableOpacity } from 'react-native'
import React ,{useState} from 'react'
import Header from '../components/Header'

const Signin = () => {
    const [Username, onchangeUsername] = useState('');
    const [Password, onchangePassword] = useState('');
  return (
    <View style={styles.bigframe}>
      <Header/>
      <View style={styles.logocontainer}>
        <Image style={styles.imageD} source={require('../src/images/D.png')}/>
        <View style={styles.line}></View>
        <Text style={styles.dtext}>D-Carte</Text>
        
      </View>
      <View style={styles.fieldscontainer}>
      <Text style = {styles.bastext}>Sign In to your Account</Text>
      <TextInput style={styles.inputu} onChangeText={Username => onchangeUsername(Username)} value={Username} placeholder=' E-mail'/>
      <TextInput style={styles.inputp} onChangeText={Password => onchangePassword(Password)} value={Password} placeholder=' Password'/>
      <TouchableOpacity><Text style={styles.fpass}>Forgot your Password ?</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button} /*onPress={onpress function}*/ >
        <Text style = {styles.textbutton}>Sign In</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    bigframe : {
        backgroundColor : '#1B1B1B',
        height : '100%',
        width : '100%',
    },
    line : {
        backgroundColor : 'white',
        width : 0.5,
        height : 40,
        position : 'absolute',
        marginLeft : 50,
        marginTop : 0
    },
    bastext: {
        color : 'white',
        fontFamily : 'ZenDots-Regular',
        fontSize : 25,
        marginBottom : 40
    },
    dtext : {
        color : 'white',
        fontFamily : 'ZenDots-Regular',
        fontSize : 26,
        marginTop:4    
    },
    logocontainer : {
        flex : 1,
        flexDirection : 'row',
        marginLeft : 95,
        marginTop : 200
    },
    fpass : {
        color : '#2EA8EC',
        marginLeft : 110,
        marginTop : 20,
        fontSize :14
    },
    button : {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 18,
        gap: 10,
        width: 348,
        height: 60,
        backgroundColor: '#2EA8EC',
        borderRadius: 16,
        marginTop : 30
    },
    textbutton : {
        color : 'white',
        fontSize : 19
    },
    imageD : {
        marginRight : 20,
        height : 40,
        width : 40
    },
    fieldscontainer : {
        position :'absolute',
        marginTop : 280,
        marginLeft : 20,

    },
    inputu : {
        backgroundColor : 'white',
        width : 350,
        height : 40,
        borderTopRightRadius : 10,
        borderTopLeftRadius : 10,
        marginBottom: 1
    },
    inputp : {
        backgroundColor : 'white',
        width : 350,
        height : 40,
        borderBottomRightRadius : 10,
        borderBottomLeftRadius : 10
    },
})

export default Signin;
