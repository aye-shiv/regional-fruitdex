import React from 'react';
import { View, Text, TouchableHighlight, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import tw from 'tailwind-rn';

const deviceWidth = Math.round(Dimensions.get('window').width);

const BackButton = () => {

    const navigation = useNavigation();


    return (
        <TouchableHighlight 
            style= {{height: 30,width: 30,marginTop:30,marginLeft:10}}
            underlayColor="#a5dbe5"
            activeOpacity={20}
            onPress={() => navigation.navigate('Home')}>
            <Image style = {{width:"100%", height:"100%",position:"absolute", alignSelf:'flex-end',bottom:0}} source = {require('../assets/images/back_button.png')}/>
          </TouchableHighlight>
    );
};

export default BackButton;
