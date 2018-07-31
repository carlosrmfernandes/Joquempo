import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity,ScrollView,Image} from 'react-native';

class Icone extends Component <Props>{
    render(){

          if(this.props.escolha=='Pedra'){
            return(
              <View>
              <Text>{this.props.jogador}</Text>
              <Image source={require("../../img/pedra.png")}/>
              </View>
            );
          }else if(this.props.escolha=='Papel'){
            return(
              <View>
              <Text>{this.props.jogador}</Text>
              <Image source={require("../../img/papel.png")}/>
              </View>
            );
          }else if(this.props.escolha=='Tesoura'){
            return(
              <View>
              <Text>{this.props.jogador}</Text>
              <Image source={require("../../img/tesoura.png")}/>
              </View>
            );
          }else{
            return false;
          }


            }

}
export default Icone;
