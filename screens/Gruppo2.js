import React from "react";
import {View,Text,TouchableOpacity,Image,StyleSheet,ScrollView} from "react-native";
import { Ionicons } from "@expo/vector-icons";
class Gruppo2 extends React.Component {
    render (){
        const onegroup = ["photo1.jpeg","photo2.jpeg","photo3.jpeg","photo4.jpeg","photo5.jpg"];
        const twogroup =["settori.jpg"];
        return(
            <View style = {StyleSheet.grandebox}>
            <ScrollView>
                    {twogroup.map((foto,index)=>{
                        return (
                            <View style = {styles.box} key={index}>
                                <Image source = {{uri:"https://s3.amazonaws.com/mv-earth/testing/"+foto}} style = {styles.immagine}/>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    box:{
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
    },
    grandebox:{
        flex:1,
    },
    immagine:{
        height:140,
        width:100,
    }
})
export default Gruppo2;