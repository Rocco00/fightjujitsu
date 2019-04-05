import React from "react";
import {View,Text,TouchableOpacity,StyleSheet, WebView} from "react-native";
import { Ionicons } from '@expo/vector-icons';
class News extends React.Component{
    render(){
        return(
            <View style ={styles.grandebox}>
            <TouchableOpacity onPress={()=>{
           this.props.navigation.openDrawer()
            }}>
                <Ionicons style={{marginLeft:10,marginTop:40}} name="md-menu" size={32} color="green" />
            </TouchableOpacity>
                <WebView source  = {{uri:"http://m.italiajujitsu.it/1/news_4276687.html"}} style = {{flex:9 }}/>
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
export default News;
