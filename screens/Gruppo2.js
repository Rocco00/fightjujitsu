import React from "react";
import {View,Text,TouchableOpacity,Image,StyleSheet,ScrollView} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {db} from "../config";
const fotodb = db.ref ("foto/gruppo2");
class Gruppo2 extends React.Component {
    constructor(props){
        super(props);
        this.state = {foto:[]}
    }
    componentDidMount () {
        fotodb.on ("value",snapshot => {
            let data = snapshot.val();
            this.setState ({
                foto:data
            })
            console.log (data);
            console.log(this.state);
        })
    }
    render (){
        return(
            <View style = {StyleSheet.grandebox}>
                <ScrollView>
                <View style = {styles.riga}>
                        {this.state.foto.map((foto,index)=>{
                            return (
                            <View style = {styles.box} key={index}>
                                <TouchableOpacity onPress={()=>{
                                this.props.navigation.navigate("Zoomfoto",{apertura:foto})
                                 }}>
                                    <Image source = {{uri:foto}} style = {styles.immagine}/>
                                    </TouchableOpacity>
                                </View>
                            )
                        })}
                </View>
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
    },
    riga:{
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
        marginRight:30,
        marginLeft:30,
    }
})
export default Gruppo2;