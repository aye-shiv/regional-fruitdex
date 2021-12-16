import React, {useLayoutEffect} from 'react';
import type {Node} from 'react';
import { useNavigation } from '@react-navigation/core';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Dimensions,
} from 'react-native';

import tw from 'tailwind-rn';
import FruitCard from '../components/FruitCard'

const deviceWidth = Math.round(Dimensions.get('window').width);
const deviceHeight = Math.round(Dimensions.get('window').height);

export default function FruitPage(props){

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  },[]);

    return (
    <SafeAreaView>
      <StatusBar backgroundColor="#5a8d26"/>
      <View style={styles.head}>
        <View style={[
            tw("bg-white flex rounded-lg"),
            {width: '95%', height: 120, }]}>
          <Text style={{color: 'gray'}}>{props.route.params.data.id}</Text>
          <Text style={styles.header_text}>{props.route.params.data.name}</Text>
          <Text style={{color: 'gray'}}>{props.route.params.data.sci_name}</Text>
          <Image 
                style={[
                tw(" absolute inset-y-0 right-0 "),
                {width:"30%",height:"100%",resizeMode:"stretch"}]}
                source = {{uri: props.route.params.data.img}}
            />
        </View>
      </View>
      <View style={[tw('h-full'),
          {width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#5a8d26',}]}>
        <ScrollView 
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={[tw("self-center flex"),
          {width: deviceWidth, marginBottom:180,}]}>
            <Text style={styles.text}>Fruit Details</Text>
            <ScrollView style={[
              tw("bg-white p-5 flex rounded-lg"),
              {width: deviceWidth-13, height: 200, margin: 6, }]}>
              <Text style={{color: 'gray', paddingBottom: 40}}>{props.route.params.data.desc}</Text>
            </ScrollView>
            <Text style={styles.text}>Comments</Text>
            <View style={[
              tw("bg-white p-5 flex rounded-lg"),
              {width: deviceWidth-13, height: 85, margin: 6, }]}>
            </View>

        </ScrollView>
      </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
      width:"100%",
    },
    head: {
      backgroundColor: '#5a8d26',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: 140,
    },
    text: {
      color: 'white',
      fontSize: 30,
      fontFamily: 'sans-serif',
      alignSelf: 'center',
    },
    header_text: {
      color: 'black',
      fontSize: 30,
      fontFamily: 'sans-serif',
    }
  });