import {Thumbnail, Text } from 'native-base';
import {Button, View } from  'react-native';
import * as React from 'react';


export const Scan=(props)=>{
    const {onPress}=props;
    return(
    <View style={{justifyContent:'center',alignItem:'center',padding:8}}>
        <Thumbnail  large  style={{alignSelf:'center'}} source={require('./desktop.png')} />
        <Text> No Data found please scan bar code to get Info</Text>
        <Button  onPress={onPress} title='Scan BarCode'>Scan BarCode</Button>
    </View>
    );
}