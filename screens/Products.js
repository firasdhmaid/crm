import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native'
import React,{useState} from 'react'
import Header from '../components/Header'
import Product from '../components/Product'
import PageHeader from '../components/PageHeader'

const products = () => {
    /*we'll use json server for getting data when its ready*/
    /*data of products*/
    const [cards,setcards] =useState([
        {
        id : 1,
        title: 'First Item',
        content : 'this is my loreum ipsuim content to test',
        },
        {
        id : 2,
        title: 'Second Item',
        content : 'this is my loreum ipsuim content to test',
        },
        {
        id : 3,
        title: 'Third Item',
        content : 'this is my loreum ipsuim content to test',
        },
        {
        id : 4,
        title: 'fourth Item',
        content : 'this is my loreum ipsuim content to test',
        },
        {
            id : 5,
            title: 'fifth Item',
            content : 'this is my loreum ipsuim content to test',
        },
        {
            id : 6,
            title: 'six Item',
            content : 'this is my loreum ipsuim content to test',
        },
        {
            id : 7,
            title: 'seven Item',
            content : 'this is my loreum ipsuim content to test',
        },
        ]);
  return (
    <View style={styles.main}>
      <Header/>
        <PageHeader title='Products' pagedesc='pick the card that fits you best'/>
        <ScrollView style={styles.secondcontainer}>
                {cards.map((item)=>{
                    return(
                    <View key={item.id}>
                    <Product title={item.title} content={item.content}/>
                    </View>
                    )
                })}
            </ScrollView>
      
      
    </View>
  )
}
const styles = StyleSheet.create({
    main : {
        position : 'relative'
    },
    secondcontainer : {
        backgroundColor : 'white',
        height : '70%',
        flexWrap : 'wrap',
        top:70,
    },
})

export default products
