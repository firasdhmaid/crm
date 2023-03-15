import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Header from '../components/Header';


const UserDetails = () => {
  const [name, setName] = React.useState('');
  const [desc, setDesc] = React.useState('');
  return (
    <View style={styles.main}>
    <Header/>
      <View style={styles.infopage}>
        <Text style={styles.pagename}>User Details</Text>
        <Text style={styles.pagedetails}>Information stored in the card that you will be sharing publicly</Text>
      </View>
      <View style={styles.pagecontent}>
        <View style={styles.row1}>
        <View style={styles.leftside}><Text style = {styles.text}>Full name</Text></View>
        <View style={styles.rightside}><TextInput style={styles.input} onChangeText={setName} value={name}/></View>
        </View>
        <View style={styles.row1}>
        <View style={styles.leftside}><Text style = {styles.text}>Phone number</Text></View>
        <View style={styles.rightside}>
        <TextInput style={styles.input} onChangeText={setDesc} value={desc}/>
        </View>
        </View>
      </View>
    </View>
  )
}

export default UserDetails

const styles = StyleSheet.create({
  main : {
    backgroundColor : '#FFFFFF',
},
infopage : {
    left : '5%',
    top : '15%',
    width : '100%',
    height : '10%',
},
pagename : {
    color : '#111827',
    fontFamily : 'CalSans-SemiBold',
    fontSize : 18,
    lineHeight: 24,
},
pagedetails : {
    color: '#6B7280',
    fontFamily : 'CalSans-SemiBold',
    fontSize : 14,
    lineHeight: 24,
},
pagecontent : {
    flexDirection  : 'column',
    width : '100%',
    height : '100%',
    top : '15%',
    paddingHorizontal : 10
},
row1 : {
    flexDirection : 'row',
},
input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width : 280,
    borderRadius : 10 
},
text : {
    color : 'black',
    marginTop : 20
},
leftside : {
    width : '20%',
    left : 0
},
rightside : {
    width : '100%',
    right : 0
},
input1 : {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width : 280,
    borderRadius : 10 
},
textdesc : {
    
    display:'flex',
    maxWidth:280,
}
})