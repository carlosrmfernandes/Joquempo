/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity,ScrollView,Image} from 'react-native';

import Topo from './src/components/Topo';
import Icone from './src/components/Icone';

export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state={
      opcaouser:"",
      opcaocomputer:"",
      Resultado:""
    };
  };
  EscolhadoUser(opcaouser){
  var numerorandon=Math.floor(Math.random()*3);
  var escolhacomputer='';
  switch(numerorandon){
    case 0:escolhacomputer="Pedra"; break;
    case 1:escolhacomputer="Papel"; break;
    case 2:escolhacomputer="Tesoura"; break;
  }

  var Resultado = '';
    if(escolhacomputer=="Pedra"){
      if(opcaouser=="Pedra"){
        Resultado="Empate";
      }if(opcaouser=="Papel"){
        Resultado="Usuário Ganhou";
      }if(opcaouser=="Tesoura"){
        Resultado="Computador Ganhou";
      }
    }else

    if(escolhacomputer=="Papel"){
      if(opcaouser=="Papel"){
        Resultado="Empate";
      }if(opcaouser=="Tesoura"){
        Resultado="Usuário Ganhou";
      }if(opcaouser=="Pedra"){
        Resultado="Computador Ganhou";
      }
    }else

    if(escolhacomputer=="Tesoura"){
      if(opcaouser=="Tesoura"){
        Resultado="Empate";
      }if(opcaouser=="Pedra"){
        Resultado="Usuário Ganhou";
      }if(opcaouser=="Papel"){
        Resultado="Computador Ganhou";
      }
    }
    this.setState({
      opcaouser:opcaouser,
      opcaocomputer:escolhacomputer,
      Resultado:Resultado
    })


  }
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
      <Topo/>
      <View style={styles.viwe2}>
      <TouchableOpacity style={styles.botao} onPress={()=>this.EscolhadoUser("Pedra")}>
      <Text style={styles.textobotao} >Pedra</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.botao} onPress={()=>this.EscolhadoUser("Papel")}>
      <Text style={styles.textobotao}>Papel</Text></TouchableOpacity>
      <TouchableOpacity  style={styles.botao} onPress={()=>this.EscolhadoUser("Tesoura")}>
      <Text style={styles.textobotao}>Tesoura</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.viwe3}>
      <Text style={styles.resultado}> {this.state.Resultado}</Text>
      <Icone escolha={this.state.opcaocomputer} jogador="computador"></Icone>
      <Icone escolha={this.state.opcaouser} jogador="    usuário"></Icone>
      </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop:60,


  },

  viwe2:{
    justifyContent:'center',
    flexDirection:'row',
    padding:5,
  },
  viwe3:{
    alignItems:'center',
    justifyContent:'center',

  },
  botao:{
    backgroundColor:'blue',
    padding:10,
    width:95,
    height:50,
    margin:20,

  },
  textobotao:{
      textAlign: 'center',
      color:'white',
      fontSize:20,
      fontWeight:'600',
  },
  resultado:{
    fontSize:25,
    fontWeight:'bold',
    color:"red",
  }


});
