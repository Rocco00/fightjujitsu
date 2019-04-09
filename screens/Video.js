import React from "react";
import {View,Text,TouchableOpacity,StyleSheet} from "react-native";
import { Ionicons } from '@expo/vector-icons';
class Video extends React.Component{
    static navigationOptions = {header: null}
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
                        this.props.navigation.navigate("Gruppo1Video")
                    }}>
                    <Text>
                        FIGHT
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.rettangolo} onPress={()=>{
                        this.props.navigation.navigate("Gruppo2Video")
                    }}>
                        <Text>
                            TECNICHE
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
    rettangolo:{
        paddingBottom:20,
        paddingTop:20,
        paddingLeft:20,
        paddingRight:20,
        borderColor: "black",
        borderWidth:1,
        width:"100%",
        marginBottom:30,
        alignContent:"center",
        alignItems:"center",
    }
})
export default Video;

