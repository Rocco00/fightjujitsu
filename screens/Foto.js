import React from "react";
import {View,Text,TouchableOpacity,Image,StyleSheet} from "react-native";
import { Ionicons } from '@expo/vector-icons';
class Foto extends React.Component{
    render(){
        return(
            <View style ={styles.grandebox}>
            <TouchableOpacity onPress={()=>{
           this.props.navigation.openDrawer()
            }}>
                <Ionicons style={{marginLeft:10,marginTop:40}} name="md-menu" size={32} color="green" />
            </TouchableOpacity>
                <View style = {styles.box}>
                    <Text>
                        Foto
                    </Text>
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
    }
})
export default Foto;
