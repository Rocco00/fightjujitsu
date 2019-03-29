import React from "react";
import {View,Text,TouchableOpacity,StyleSheet} from "react-native";
import { Ionicons } from '@expo/vector-icons';
class Video extends React.Component{
    render(){
        return(
        <View style ={styles.grandebox}>
            <TouchableOpacity onPress={()=>{
           this.props.navigation.openDrawer()
            }}>
                <Ionicons style={{marginLeft:10,marginTop:40}} name="md-menu" size={32} color="green" />
            </TouchableOpacity>
            <View style = {styles.box} >
                <TouchableOpacity style = {styles.rettangolo} onPress={()=>{
                        this.props.navigation.navigate("gruppo1video")
                    }}>
                    <Text>
                    Gruppo1
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.rettangolo} onPress={()=>{
                        this.props.navigation.navigate("gruppo2video")
                    }}>
                        <Text>
                            Gruppo 2
                        </Text>
                    </TouchableOpacity>
            </View>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    box:{
        flex:9,
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
    },
    grandebox:{
        flex:1,
    },
})
export default Video;
