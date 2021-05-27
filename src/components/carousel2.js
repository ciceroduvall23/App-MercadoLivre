import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
 
import { SliderBox } from "react-native-image-slider-box";
 
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../assets/celular.jpg'),
        require('../assets/laptop.jpg'),
        require('../assets/notebook.jpg'),
        require('../assets/celular2.jpg'),
     
      ]
    };
  }
 
  render() {
    return (
      <View style={styles.container}>
        <SliderBox
          
          images={this.state.images}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
       
        />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    height:180,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    overflow: 'hidden',
 

  },

});