import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity,ScrollView,Image} from 'react-native';

class Topo extends Component <Props>{
    render(){
        return(
          <View style={styles.viwe1}>
          <Image source={require("../../img/jokenpo.png")}/>
          </View>
              );

            }

}
const styles = StyleSheet.create({
  viwe1:{
    alignItems:'center',
    justifyContent:'center',

    height:160,


  },

});
export default Topo;
