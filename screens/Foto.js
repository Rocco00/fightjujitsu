import React from "react";
import {View,Text,TouchableOpacity,Image,StyleSheet} from "react-native";
import { Ionicons } from '@expo/vector-icons';
class Foto extends React.Component{
    render(){
        const onegroup = ["photo1.jpeg","photo2.jpeg","photo3.jpeg","photo4.jpeg","photo5.jpg"];
        const twogroup = ["settori.jpg"];
        return(
            <View style ={styles.grandebox}>
                <TouchableOpacity onPress={()=>{
                this.props.navigation.openDrawer()
                }}>
                    <Ionicons style={{marginLeft:10,marginTop:40}} name="md-menu" size={32} color="green" />
                </TouchableOpacity>
                <View style = {styles.box}>
                <Image source = {require("../add_foto/"+"photo1.jpeg")} style = {styles.immagine}/>
                {onegroup.map(function(foto){
                    console.log("text")
                    console.log("../add_foto/"+foto)
                    const prova = "https://s3.amazonaws.com/mv-earth/testing/"+foto
                    return <Image source = {{uri:prova}} style = {styles.immagine}/> 
                })
                }
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
    },
    immagine:{
        height:140,
        width:100,
    }

})
export default Foto;
