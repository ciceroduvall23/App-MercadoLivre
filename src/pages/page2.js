import React from 'react';
import { Text } from 'react-native';
import { Button, View } from 'react-native';


function Sobre({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
      <Text>sjkdfvkjsd</Text>
    </View>
  );
}

export default Sobre;
