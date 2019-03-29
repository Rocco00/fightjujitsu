import React from "react";
import {View,Text,TouchableOpacity,Image,StyleSheet,ScrollView} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {db} from "../config";
const fotodb = db.ref ("foto/gruppo1");
class Gruppo1 extends React.Component {
    constructor(props){
        super(props);
        this.state = {foto:[]}
    }
    componentDidMount () {
            fotodb.on ("value", snapshot => {
                let data = snapshot.val();
                this.setState({
                foto:data
            })
       })
    }
    render(){
        return(
            <View style = {StyleSheet.grandebox}>
                <ScrollView>
                    {this.state.foto.map((foto,index)=>{
                        return (
                            <View style = {styles.box} key={index}>
                                <Image source = {{uri:foto}} style = {styles.immagine}/>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    box:{
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
export default Gruppo1;

