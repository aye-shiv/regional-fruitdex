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
             
            <Text style={tw(" text-gray-800 font-semibold ")}>#{fruit.id} {fruit.name}</Text>
            <Text style={tw(" text-gray-800 font-semibold ")}>{fruit.sci_name}</Text>
            <Image 
                style={[
                tw(" absolute inset-y-0 right-0 "),
                {width:85,height:85,resizeMode:"stretch"}]}
                source = {{uri: fruit.img}}
            />
        </TouchableOpacity>
    );
};

export default FruitCard
