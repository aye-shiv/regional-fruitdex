import React, {useLayoutEffect} from 'react';
import type {Node} from 'react';
import { useNavigation } from '@react-navigation/core';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';

import tw from 'tailwind-rn';
import tts from 'react-native-tts';
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

  const handleVoice = () =>{
    tts.speak(`${props.route.params.data.name} also known as ${props.route.params.data.alt_name}`)
  }
  const handleVoiceDescription = () =>{
    tts.speak(props.route.params.data.desc)
  }

    return (
    <SafeAreaView>
      <StatusBar backgroundColor="#5a8d26"/>
      <View>
        <ImageBackground
          resizeMode="cover"
          style={tw("h-full")}
          source={require('../assets/images/fruit_page.png')}
          >
          <View style={styles.head}>
            <View style={[
                tw("bg-white flex rounded-lg"),
                {width: '95%', height: 120, }]}>
              <Text style={styles.num_text}>#{props.route.params.data.id}</Text>
              <View style = {{flexDirection: 'row'}}>
              <Text style={styles.header_text}>{props.route.params.data.name}</Text>
                <TouchableHighlight
                  underlayColor="#a5dbe5"
                  activeOpacity={100}
                  style={{width: 30, height: 30, marginLeft:5, marginTop:10}}
                  onPress={()=>handleVoice()}>
                  <Image 
                  style={{width:"100%", height: "100%"}}
                  source={require("../assets/images/speaker_icon.png")}/>
                </TouchableHighlight>
              </View>
              <Text style={styles.sci_text}>{props.route.params.data.sci_name}</Text>
              <Image 
                    style={[
                    tw(" absolute inset-y-0 right-0 rounded-lg "),
                    {width:"30%",height:"100%",resizeMode:"stretch"}]}
                    source = {{uri: props.route.params.data.img}}
                />
            </View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              style={[tw("self-center flex"),
              {width: deviceWidth,}]}>
            <View style={[
              tw("bg-white p-4 flex rounded-lg"),
              {width: deviceWidth-13, height: 400, margin: 6, }]}>
              <View style = {{flexDirection: 'row'}}>
                <Text style={styles.sub_header}>Description</Text>
                <TouchableHighlight
                  underlayColor="#a5dbe5"
                  activeOpacity={100}
                  style={{width: 30, height: 30, marginLeft:5}}
                  onPress={()=>handleVoiceDescription()}>
                  <Image 
                  style={{width:"100%", height: "100%"}}
                  source={require("../assets/images/speaker_icon.png")}/>
                </TouchableHighlight>
              </View>
              <ScrollView showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              style={{width: "100%", height: 50,borderWidth: 0.9, borderRadius: 5, borderColor: "#5a8d26", padding: 4}}>
                <Text style={{color: '#77816d', marginBottom: 10}}>{props.route.params.data.desc}</Text>
              </ScrollView>
              <View style={{paddingTop: 10}}>
                <Text style={styles.sub_header}>Alternate names</Text>
                <Text style={{color: '#77816d',borderWidth: 0.9, borderRadius: 5, borderColor: "#5a8d26", padding: 4 }}>{props.route.params.data.alt_name}</Text>
              </View>
            </View>
            <View style={[
              tw("bg-white p-5 flex rounded-lg"),
              {width: deviceWidth-13, height: 85, margin: 6, }]}>
            </View>
          </ScrollView>
        </ImageBackground>
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
      color: '#104b0b',
      fontSize: 30,
      fontFamily: 'sans-serif',
      paddingLeft: 5,
    },
    num_text: {
      color: 'gray',
      fontSize: 11,
      fontFamily: 'sans-serif',
      paddingLeft: 7,
      paddingTop: 3,
      marginBottom: -10
    },
    sci_text: {
      color: 'grey',
      fontSize: 15,
      fontFamily: 'sans-serif',
      marginRight:130,
      marginTop: -5,
      paddingLeft: 9,
    },
    sub_header:{
      color: '#104b0b',
      fontSize: 20,
      fontFamily: 'sans-serif',
      
    },
  });