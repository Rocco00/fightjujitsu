import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export default class App extends React.Component {
  render() {
    return ( 
      <View style={{flex:1}}>
         <Ionicons style={{marginLeft:10,marginTop:40}} name="md-menu" size={32} color="green" />
      <View style={styles.container}>
        <Image style={{width:50, height:50}} source={require('./pair1.png')}/>
        <Text>Benvenuti nel mondo della Fight ju jitsu! </Text>
      </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
