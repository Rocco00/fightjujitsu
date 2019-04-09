import React from "react";
import {View,Image,StyleSheet} from "react-native";
class Zoomfoto extends React.Component{
    render () {
        const apertura = this.props.navigation.getParam("apertura")
        return (
            <View style = {styles.box}>
                <Image source = {{uri:apertura}} style = {styles.immagine} resizeMode = "contain" />
            </View>
        )
    }
}
const styles = StyleSheet.create ({
    immagine:{
        height:"100%",
        width:"100%",
    },
    box:{
        justifyContent:"center",
        alignItems:"center",
        alignContent:"center",
        flex:1,
        backgroundColor:"#e7e7e7",
    }
})
export default Zoomfoto;