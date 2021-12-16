import React, { useLayoutEffect, useEffect, useState }  from 'react';
import type {Node} from 'react';
import { useNavigation } from '@react-navigation/core';
import { useSelector } from 'react-redux';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Dimensions,
  Navigation,
  TouchableHighlight
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import tw from 'tailwind-rn';
import FruitCard from '../components/FruitCard'
import BackButton from '../components/Buttons'

const deviceWidth = Math.round(Dimensions.get('window').width);

export default function Dex(){

  const navigation = useNavigation();
  const {fruits} = useSelector(state => state.dexReducer);
  const [filteredData, setFilteredData] = useState(fruits)
  const [search,setSearch] = useState('');
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  },[]);

  const searchFilter = (text) => {
    if (text) {
      const newData = fruits.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const altData = item.alt_name ? item.alt_name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return (itemData.indexOf(textData) > -1 || altData.indexOf(textData) > -1);
      });
      setFilteredData(newData);
      setSearch(text);
    } else {
      setFilteredData(fruits);
      setSearch(text);
    }
  }
  const ItemSeparatorView = () => {
    return(<View style={{height: 5, width: '100%', backgroundColor: '#fecc47'}}/>)
  }


    return (
    <SafeAreaView>
      <StatusBar backgroundColor="#acd8e1"/>
        <View style={[
          tw(""),
          {backgroundColor: '#acd8e1', width: "100%", height: 80, flexDirection: 'row'}]}>
          <BackButton/>
          <Image
            style={[tw("self-center"),
              {width: '70%', height: '70%', resizeMode: "contain",marginLeft:24}]}
            source = {require('../assets/images/fruitdex_text.png')}
          />
        </View>
        <View style={[
          tw("flex"),
          {backgroundColor: '#fa990e', width: "100%", height:50, justifyContent: 'center',padding: 3}]}>
            <TextInput 
              style={[
                tw("bg-white flex rounded-lg"),
                styles.textInputStyle]}
              placeholder='Search for fruit'
              placeholderTextColor='gray'
              value = {search}
              onChangeText={(text)=>searchFilter(text)}
            />
        </View>
        <View style={[tw(),
          {width: "100%", justifyContent: 'center', backgroundColor: '#fecc47', paddingTop: 6, height: "100%",}]}>
          <FlatList 
            style={[tw("self-center"),
            {marginBottom:268}]}
            data={filteredData} 
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={({ item }) => (
              <FruitCard fruit={item}/>
            )}
          />
        </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: 'black',
      fontSize: 90,
      fontFamily: 'sans-serif',
    },
    container:{
      width: '100%',
    },
    textInputStyle:{
      height: 40,
      borderWidth: 1,
      paddingLeft: 18,
      margin: 5,
      borderColor: '#009688',
      backgroundColor: 'white',
      color: 'black',
      fontFamily: 'sans-serif',
      fontSize: 15
    },
    back_button:{
      height: 30, 
      width: 30,
      marginTop:30,
      marginLeft:10,
      position: 'absolute',
    }
  });