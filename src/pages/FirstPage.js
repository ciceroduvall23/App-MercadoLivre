
import * as React from 'react';
import { View,StyleSheet,Text,ScrollView } from 'react-native';
import { LinearGradient} from 'expo-linear-gradient';


import Carousel from '../components/carousel2';
import Circulo from '../components/circulo';
import Card from '../components/card';
import Produto from '../components/card2';

const MyComponent = () => (
  <ScrollView style={style.body}>
      <LinearGradient
        // Button Linear Gradient
        colors={['#FFF159', '#FFF159', '#2800']}
        style={style.fundo}>
        <View><Carousel /></View>
      </LinearGradient>
  <Circulo />
  <Card />
  <Produto style={style.produtos}/>

  </ScrollView>
);


const style = StyleSheet.create({
     body:{
      padding:3,
     backgroundColor:'#2800',
   

     }, 
     fundo:{
      width: 400,
      height:190,
      marginTop:0  
     }, 
   
});

export default MyComponent;


