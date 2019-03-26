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
                    <TouchableOpacity>
                        <Text>
                            Gruppo 1
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
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
    immagine:{
        height:140,
        width:100,
    }

})
export default Foto;
