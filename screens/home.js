import React, {useLayoutEffect, useEffect} from 'react';
import type {Node} from 'react';
import { useNavigation } from '@react-navigation/core';
import { useSelector, useDispatch } from 'react-redux';
import { getFruit } from '../util/actions';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Image,
  TouchableHighlight,
} from 'react-native';


import tw from 'tailwind-rn';
import { FlatList } from 'react-native-gesture-handler';

const deviceWidth = Math.round(Dimensions.get('window').width);

export default function Home(){

  const {fruits} = useSelector(state => state.dexReducer);
  const dispatch = useDispatch();

  const navigation = useNavigation();
  useEffect(() => {
    dispatch(getFruit());
  },[]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  },[]);
    return (
    <View style={tw("flex-1")}>
      <StatusBar backgroundColor="#acd8e1"/>
      <View style={[
          tw(""),
          {backgroundColor: '#acd8e1', width: deviceWidth, height: 80, justifyContent: 'center'}]}>
          <Image
            style={[tw("self-center"),
              {flex:1, width: '100%', height: '100%', resizeMode: "contain", margin: 10,}]}
            source = {require('../assets/images/fruitdex_text.png')}
          />
        </View>
      <ImageBackground
        resizeMode="cover"
        style={tw("flex-1")}
        source={require('../assets/images/home_page.png')}
        >
        <TouchableOpacity onPress={() => navigation.navigate('Dex')}>
          <Image 
            style={{width:"72%", height:80, resizeMode:"stretch", marginLeft:112, marginTop:380,}}
            source={require('../assets/images/home_button.png')}/>
        </TouchableOpacity>
        <Image 
            style={{width:250, height:300, resizeMode:"stretch", marginLeft:90, marginTop:-430}}
            source={require('../assets/images/FruitDex.png')}/>
      </ImageBackground>
    </View>
    )
}

const styles = StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: '#acd8e1',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: 'black',
      fontSize: 50,
      fontFamily: 'sans-serif',
    },
    dex_button:{
      marginHorizontal:"25%", 
      backgroundColor: '#fa990e',
    },
    button_text:{
      color: "black",
      fontWeight: '900',
      textAlign: 'center',
    }
  });