import React from 'react';
import {View,Text} from 'react-native';

export default class Instascreen extends React.Component{
    render(){
        return(
            <View style={{backgroundColor:"red"}}>
                <Text
                style={{color:"pink", alignSelf:"center", fontSize:100, fontWeight:"bold", marginTop:100}}>Instagram </Text>
            </View>
        );
    }
}