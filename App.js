import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}> 
      <Image style={{width:50, height:50}} source={require('./pair1.png')}/>
        <Text>Benvenuti nel mondo della Fight ju jitsu! Ciao di Babajide</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
