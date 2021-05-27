// React Native Full Screen Background Image
// https://aboutreact.com/react-native-full-screen-background-image/

// import React in our code
import React from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
       style={styles.img}
        //We are using online image to set background
        source={{
          uri:
            'https://images.pexels.com/photos/2691478/pexels-photo-2691478.jpeg?cs=srgb&dl=pexels-artem-beliaikin-2691478.jpg&fm=jpg',
        }}
        //You can also set image from your project folder
        //require('./images/background_image.jpg')        //
      >
        
          <Text style={styles.titleStyle}>
           Promoção Carrinhos de Brinquedos
          </Text>
      
        
      </ImageBackground>
    </SafeAreaView>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    backgroundColor:'#2800',
    height:200,
    marginTop:50,
    margin:10
    
  },
  img:{
    height: 100,
    width: 350,
     top:30,
     right:8, 
     borderBottomLeftRadius: 10,
     borderBottomRightRadius: 10,
     borderTopRightRadius: 10,
     borderTopLeftRadius: 10,
     overflow: 'hidden',
    
  },
    titleStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#fff',
  },
  centerContentStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

