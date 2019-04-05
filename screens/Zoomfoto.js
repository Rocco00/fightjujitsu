import React from "react";
import {View,Image,StyleSheet} from "react-native";
class Zoomfoto extends React.Component{
    render () {
        return (
            <View>
                <Image source = {{uri:foto}} style = {styles.immagine} />
            </View>
        )
    }
}
const styles = StyleSheet.create ({
    immagine:{
        height:140,
        width:100,
    }
})
export default Zoomfoto;