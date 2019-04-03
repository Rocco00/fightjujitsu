import React from "react";
import {View,Text,TouchableOpacity,Image,StyleSheet,ScrollView,} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {db} from "../config";
import {Video} from "expo";
const videodb = db.ref ("video/gruppo2");
class Gruppo2Video extends React.Component {
    constructor(props){
        super(props);
        this.state = {video:[]}
    }
    componentDidMount () {
        videodb.on ("value", snapshot => {
            let data = snapshot.val();
            this.setState ({
                video:data
            })
        })
    }
    render (){
        return(
            <View style = {StyleSheet.grandebox}>
                <ScrollView>
                    {this.state.video.map ((video,index)=>{
                        return (
                        <View style = {styles.box} key = {index}>
                            <Video source = {{uri:video}} 
                            rate = {1.0} 
                            volume = {1.0} 
                            isMuted = {false} 
                            resizeMode = "contain"
                            style = {{ width:300, height:300}} 
                            useNativeControls
                            />          
                        </View>
                        )
                    })}
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create ({
    box:{
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",

    },
    grandebox:{
        flex:1,
    },
    video:{
        height:140,
        width:100,
    }
})
export default Gruppo2Video;
