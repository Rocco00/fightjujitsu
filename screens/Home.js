import React from "react";
import {View,Text,TouchableOpacity,Image,StyleSheet} from "react-native";
import { Ionicons } from '@expo/vector-icons';
class Home extends React.Component{
    render(){
        return (
            <View style = {styles.grandebox}>
                <TouchableOpacity onPress={()=>{
                this.props.navigation.openDrawer()
                }}>
                    <Ionicons style={{marginLeft:10,marginTop:40}} name="md-menu" size={32} color="green" />
                </TouchableOpacity>
                <View style = {styles.box}>
                    <Image source = {require("../pair1.png")} style = {styles.principale}/>
                    <Text style = {styles.scrittura}>
                        Benvenuti nel mondo del Fight JuJitsu
                    </Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    principale: {
        width:100, 
        height:150,
    },
    box:{
        flex:9,
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
    },
    grandebox:{
        flex:1,  
    },
    scrittura:{
        fontSize:25,
    }
})
export default Home;
