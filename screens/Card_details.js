import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Header from '../components/Header';

const Card_details = () => {
  const [name, setName] = React.useState('');
  const [desc, setDesc] = React.useState('');
  return (
    <View style={styles.main}>
    <Header/>
      <View style={styles.infopage}>
        <Text style={styles.pagename}>Card Details</Text>
        <Text style={styles.pagedetails}>information related to the card but only visible to you</Text>
      </View>
      <View style={styles.pagecontent}>
        <View style={styles.row1}>
            <Text style = {styles.text}>Card name</Text>
            <TextInput style={styles.input} onChangeText={setName} value={name}/>
        </View>
        <View style={styles.row1}>
        <View style={styles.leftside}><Text style = {styles.text}>Description</Text></View>
        <View style={styles.rightside}><TextInput style={styles.input} onChangeText={setDesc} value={desc}/></View>
        </View>
      </View>
    </View>
  )
}

export default Card_details

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
        textAlign : 'center',
        marginTop : 20
    },
    leftside : {
        width : '20%',
        left : 0
    },
    rightside : {
        width : '100%',
        right : 0
    }



})