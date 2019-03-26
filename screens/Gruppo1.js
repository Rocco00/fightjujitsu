import React from "react";
import {View,Text,TouchableOpacity,Image,StyleSheet} from "react-native";
import { Ionicons } from "..@expo/vector-icons";
class Foto extends React.Component {
    render(){
        const onegroup = ["photo1.jpeg","photo2.jpeg","photo3.jpeg","photo4.jpeg","photo5.jpg"];
        const twogroup = ["settori.jpg"];
        return(
            <View style = {StyleSheet.grandebox}>
                <TouchableOpacity onPress={()=>{
                    this.props.navigation.openDrawer()
                }}>
                    <Ionicons style={{marginLeft:10,marginTop:40}} name="md-menu" size={32} color="green" />
                </TouchableOpacity>
            </View>
        )
    }
}

