import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PageHeader = (props) => {
  /*the header of any page just add a title and a content*/
  return (
    <View>
      <View style={styles.firstcontainer} >
        <Text style= {styles.pagetitle}>{props.title}</Text>
        <Text style= {styles.fcontainertext}>{props.pagedesc}</Text>
      </View>
    </View>
  )
}

export default PageHeader

const styles = StyleSheet.create({
    firstcontainer : {
        backgroundColor : '#1B1B1B',
        width : '100%',
        
        top : 70,
        padding : 20
    },
    pagetitle : {
        color : 'white',
        textAlign : 'center',
        fontSize : 20,
        padding : 5,
        fontFamily : 'CalSans'
    },
    fcontainertext: {
        color : 'white',
        fontSize : 40,
        textAlign : 'center',
        fontFamily : 'CalSans',
        marginBottom :10
    },
})
