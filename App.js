import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import AppNav from "./Nav";
export default class App extends React.Component {
  render() {
    return ( 
      <View style={{flex:1}}>
            <AppNav/>
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
