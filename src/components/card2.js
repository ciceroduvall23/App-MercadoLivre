import * as React from 'react';
import { View,StyleSheet } from 'react-native';
import { Card,Title,Text,Linking } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

/*const MyComponent = () => (*/
  export default function Home () {
     return (


 <Card style={{ backgroundColor:'#2800',height:1530}}>

        {/* anúncio 1  */}

      <View style={style.container}>
  
      <Title style={style.text}>Visto Recentemente</Title>
      <Text style={style.descrição}>Smartphone é, em tradução literal,"um telefone inteligente".</Text>
      
      <View style={style.preço}>
       <Text style={style.valor}>R$ 800</Text>
       <Text style={style.parcela2}>12x R$ 20<Text style={style.dimivalor2}>44</Text> Frete grátis</Text>
       <Text style={style.full}>Full</Text>
       <MaterialCommunityIcons style={style.lightning}  name="lightning-bolt"  />  
         </View>
        <View style={style.linhahorizontal}></View>
         <Text style={style.vermais}>Ver historico de navegação </Text>
         <AntDesign style={style.seta} name="right" size={20} color="blue" />
         
      <Card.Cover style={style.img} source={require('../assets/smartphone-modelo.png')} />
      </View>
  
  {/* anúncio 2  */}
      <View style={style.container2}>
  
  <Title style={style.text2}>Oferta do dia</Title>
  <Text style={style.descrição2}>Relógio Masculino Constantim Boss</Text>
  
  <View style={style.preço2}>
   <Text style={style.valor2}>R$ 140</Text>
   <Text style={style.parcela2}>12x R$ 20<Text style={style.dimivalor2}>,44</Text> Frete grátis</Text>
   <Text style={style.full2}>Full</Text>
   <MaterialCommunityIcons style={style.lightning}  name="lightning-bolt"  />  
     </View>
     <View style={style.linhahorizontal2}></View>
     <Text style={style.vermais2}>Ver todas as ofertas </Text>
     <AntDesign style={style.seta2} name="right" size={20} color="blue" />
  <Card.Cover style={style.img2} source={require('../assets/relogio.jpg')} />
  </View>
   

       {/* anúncio 3 */}

  <View style={style.container3}>
  
  <Title style={style.text3}>Inspirado no último visto</Title>
  <Text style={style.descrição3}>TV led 24 polegadas AOC em promoção</Text>
  
  <View style={style.preço3}>
   <Text style={style.valor3}>R$ 850<Text style={style.dimivalor4}>,40</Text></Text>
   <Text style={style.parcela3}>12x R$ 20<Text style={style.dimivalor3}>,44</Text> Frete grátis</Text>
   
     </View>
     <View style={style.linhahorizontal3}></View>
     <Text style={style.vermais3}>Ver mais </Text>
     <AntDesign style={style.seta3} name="right" size={20} color="blue" />
  <Card.Cover style={style.img3} source={require('../assets/tv-led.jpg')} />
  </View>
    </Card>
     );

    }


const style = StyleSheet.create({
  container:{ 
    
    backgroundColor:'#fff',
    width:340,
    height:530,
    marginTop:-30,
    left:10,
    borderRadius:10
    },
    container2:{
      backgroundColor:'#fff',
      width:340,
      height:360,
      marginTop:35,
      left:10,
      borderRadius:10

    },
    container3:{
      backgroundColor:'#fff',
      width:340,
      height:485,
      marginTop:35,
      left:10,
      borderRadius:10

    },


    img:{
      width:160,
      height:330,
      top:-190,
      left:10,
      
    },
    img2:{
      width:150,
      height:220,
      top:-180,
      

    },
    img3:{
      width:300,
      height:220,
      top:-155,
      left:20

    },
    text:{
      fontSize: 18,
      left:0,
      padding:8,
      borderBottomColor: '#bcbcba',
      borderBottomWidth: 1,
      

      },
      text2:{
        fontSize: 18,
        left:0,
        padding:8,
        borderBottomColor: '#bcbcba',
        borderBottomWidth: 1,
      
      },
      text3:{
        fontSize: 18,
        left:0,
        padding:8,
        borderBottomColor: '#bcbcba',
        borderBottomWidth: 1,
        
      
      },
      descrição:{
        fontSize: 15,
        left:180,
        top:70,
        width:170
        
      },
      descrição2:{
        fontSize: 15,
        left:180,
        top:30,
        width:170
        
      },
      descrição3:{
        fontSize: 15,
        left:3,
        top:240,
        width:310
        
      },
      preço:{
        fontSize: 52,
        left:180,
        top:80,
        width:100

      },
      preço2:{
        fontSize: 32,
        left:180,
        top:40,
        width:100

      },
      preço3:{
        fontSize: 32,
        left:10,
        top:250,
        width:100,
        color:'green'

      },
      valor:{
        fontSize:20,
        
      },
      valor2:{
        fontSize:20,
        
      },
      valor3:{
        fontSize:20,
        
      },
      full:{
        fontSize:17,
       color:'#00A650',
       fontWeight:'bold',
        left:10
      },
      full2:{
        fontSize:17,
       color:'#00A650',
       fontWeight:'bold',
        left:10
      },
  
      parcela:{
        fontSize:15,
        color:'#00A650',
      },
      parcela2:{
        fontSize:15,
        color:'#00A650',
      },
      parcela3:{
        fontSize:15,
        color:'#00A650',
      },
      dimivalor:{
        fontSize:10,
        color:'#00A650',
       
      },
      dimivalor2:{
        fontSize:10,
        color:'#00A650',
       
      },
      dimivalor3:{
        fontSize:10,
        color:'#00A650',
       
      },
      dimivalor4:{
        fontSize:10,
        
       
      },
      lightning:{
        fontSize:20,
        color:'green',
        right:7,
        top:-22,

      },
      vermais:{
        fontSize:15,
        color:'#2aa0ea',
        left:7,
        top:245,

      },
      vermais2:{
        fontSize:15,
        color:'#2aa0ea',
        left:7,
        top:100,
      

      },
      vermais3:{
        fontSize:15,
        color:'#2aa0ea',
        left:7,
        top:270,
    

      },
      linhahorizontal:{
        borderBottomColor: '#bcbcba',
        borderBottomWidth: 1,
        top:230,

      },
      linhahorizontal2:{
        borderBottomColor: '#bcbcba',
        borderBottomWidth: 1,
        top:90,

      },
      linhahorizontal3:{
        borderBottomColor: '#bcbcba',
        borderBottomWidth: 1,
        top:260,
      },
      seta:{
        top:225,
        left:310,
        color:'#2aa0ea',
      },
      seta2:{
        top:75,
        left:310,
        color:'#2aa0ea',
      },
      seta3:{
        top:248,
        left:310,
        color:'#2aa0ea',
      },

});
