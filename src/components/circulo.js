import * as React from 'react';
import { Title } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import {StyleSheet, View} from 'react-native';

const Circulo= () => (
  <View >
    <View style={styles.circulo}> 
    <AntDesign style={styles.icone}   name="qrcode" size={24} color="black" />
    <Title style={styles.text}>Pagar com{"\n"}código QR</Title>
    </View>

    <View style={styles.circulo2}>
      <AntDesign style={styles.icone} name="tagso" size={24} color="black" /> 
      <Title style={styles.text2}>Ofertas {"\n"}dos dias</Title>

    </View>

    <View style={styles.circulo3}>
    <Ionicons style={styles.icone} name="basket-outline" size={24} color="black" /> 
    <Title style={styles.text3}>Mercado</Title>
  
     </View>

    <View style={styles.circulo4}>
    <AntDesign style={styles.icone} name="car" size={24} color="black" /> 
    <Title style={styles.text4}>Carros e {"\n"}Motos</Title>
  
    </View>

    <View style={styles.circulo5}>
      <AntDesign style={styles.icone} name="pluscircleo" size={24} color="black" />
      <Title style={styles.text5}>Mais</Title>

    </View>
  </View>
  
);



const styles = StyleSheet.create({
  circulo: {
    marginTop:20,
    left:20,
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor:'#FFFFFF',
  },
  circulo2: {
    marginTop:-50,
    left:90,
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor:'#FFFFFF',
  },
  circulo3: {
    marginTop:-50,
    left:160,
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor:'#FFFFFF',
  },
  circulo4: {
    marginTop:-50,
    left:230,
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor:'#FFFFFF',
  },
  circulo5: {
    marginTop:-50,
    left:300,
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor:'#FFFFFF',
  },
  icone:{
    justifyContent: 'center',
    alignItems: 'center',
    padding:12

  },
  text:{
   fontSize:12,
   width:100,
   left:-6,
   lineHeight: 17,
   top:5,
   color:'#6d6d6d'
  
  },
  text2:{
    fontSize:12,
    width:100,
    left:8,
    lineHeight: 17,
    top:5,
    color:'#6d6d6d'
   
   },
   text3:{
    fontSize:12,
    width:100,
    left:8,
    lineHeight: 17,
    top:5,
    color:'#6d6d6d'
   },
   text4:{
    fontSize:12,
    width:100,
    left:8,
    lineHeight: 17,
    top:5,
    color:'#6d6d6d'
   
   },
   text5:{
    fontSize:12,
    width:100,
    left:8,
    top:5,
    lineHeight: 17,
    color:'#6d6d6d'

   }


});

export default Circulo;