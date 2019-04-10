import React from "react";
import {View,Text,TouchableOpacity,Image,StyleSheet} from "react-native";
import { Ionicons } from '@expo/vector-icons';
class Home extends React.Component{
    render(){
        return (
            <View style = {styles.grandebox}>
                <View style = {styles.riga}>
                    <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate("Foto") }}>
                    <Image source ={require("../assets/camera.png")} style = {styles.icona} resizeMode = "contain" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate("Video") }}>
                    <Image source ={require("../assets/youtube.png")} style = {styles.icona} resizeMode = "contain" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate("News") }}>
                    <Image source ={require("../assets/newspaper.png")} style = {styles.icona} resizeMode = "contain" />
                    </TouchableOpacity>
                </View>
                <View style = {styles.box}>
                    <Image source = {require("../pair1.jpeg")} style = {styles.principale} resizeMode = "contain" />
                    <Text style = {styles.scrittura}>
                        Benvenuti nella nostra palestra "Fit-Jitsu"
                    </Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    principale: {
        width:"90%", 
        height:"50%",
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
        textAlign:"center",
    },
    riga:{
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
        flex:1,
    },
    icona:{
        width:80, 
        height:80,
        marginTop:150,
        marginRight:5,
    }
})
export default Home;
