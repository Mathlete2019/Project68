import React from 'react';
import {View,Text, StyleSheet} from 'react-native';

export default class FBscreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                
                <Text
               style={styles.displayText}
                >FaceBook </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container:{backgroundColor:"#fc5185",padding:40},
    displayText:{backgroundColor:"#3fc1c9",color:"#364f6b", alignSelf:"center", fontSize:100, fontWeight:"bold", marginTop:100, borderWidth:5,borderColor:"#f5f5f5"}

});

