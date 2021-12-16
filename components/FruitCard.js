import React, {useEffect} from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useSelector, useDispatch } from 'react-redux';
import { getFruit } from '../util/actions';

import tw from 'tailwind-rn';

const deviceWidth = Math.round(Dimensions.get('window').width);

const FruitCard = (props) => {

    const navigation = useNavigation();
    const fruit = props.fruit;


    return (
        <TouchableOpacity style={[
            tw("bg-white p-5 flex rounded-lg"),
            {width: deviceWidth-13, height: 85}]}
            onPress={() => navigation.navigate('FruitPage', {data: fruit})}>
            <View style= {{flexDirection: 'row'}} >
                <Text style={{color:'#5a8d26', fontWeight:"500", fontSize: 16, marginTop: -2, marginLeft: -10}}>#{fruit.id}</Text>
                <Text style={{color:'#104b0b', fontWeight:"700", fontSize: 18, marginLeft: 3, marginTop: -4}}>{fruit.name}</Text>
            </View>
            <Text style={{color:'#77816d', fontWeight:"400", fontSize: 14, marginTop: 3, marginLeft: -2}}>{fruit.sci_name}</Text>
            <Image 
                style={[
                tw("absolute inset-y-0 right-0 rounded-lg "),
                {width:85,height:85,resizeMode:"stretch"}]}
                source = {{uri: fruit.img}}
            />
        </TouchableOpacity>
    );
};

export default FruitCard
