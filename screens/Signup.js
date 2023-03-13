import { View, Text, StyleSheet, Image,TextInput,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import Header from '../components/Header'

const Signup = () => {
    const [Fname, onchangeFname] = useState('');
    const [Lname, onchangeLname] = useState('');
    const [Email, onchangeEmail] = useState('');
    const [Phnum, onchangePhnum] = useState('');
    const [Password, onchangePassword] = useState('');
  return (
    <View style={styles.main}>
      <Header/>
      <Image source={require('../src/images/Header.png')} style={styles.imghead}/>  
      <View style = {styles.fieldscontainer}>
      <View style = {styles.firstline}>
      <TextInput style={styles.inputu} onChangeText={Fname => onchangeFname(Fname)} value={Fname} placeholder='First Name'/>
      <TextInput style={styles.inputu} onChangeText={Lname => onchangeLname(Lname)} value={Lname} placeholder='Last Name'/>
      </View>
      <TextInput style={styles.inputu2} onChangeText={Email => onchangeEmail(Email)} value={Email} placeholder='E-mail'/>
      <TextInput style={styles.inputu2} onChangeText={Phnum => onchangePhnum(Phnum)} value={Phnum} placeholder='Number'/>
      <TextInput style={styles.inputu2} onChangeText={Password => onchangePassword(Password)} value={Password} placeholder='Password'/>
      <TouchableOpacity style={styles.button} /*onPress={onpress function}*/ >
        <Text style = {styles.textbutton}>Sign Up</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    main : {
        backgroundColor : '#1B1B1B',
        width : '100%',
        height : '100%',
    },
    imghead:{
        marginTop : 150,
        marginLeft: 10
    },
    fieldscontainer : {
        margin : 20
    },
    firstline : {
        flex : 1,
        flexDirection : 'row',
        marginBottom : 55,
    },
    inputu : {
        backgroundColor : 'white',
        width : '45%',
        height : 40,
        borderRadius : 6,
        marginRight: 35,
        
    },
    inputu2 : {
        backgroundColor : 'white',
        width : '100%',
        height : 40,
        borderRadius : 6,
        marginBottom: 10
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
})

export default Signup
