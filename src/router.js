
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/pages/page1';
import Sobre from './src/pages/page2';
import Inicio from '../App';



const Drawer = createDrawerNavigator(); {/* nome "Drawer" é opcional mas nunca esqueça que altera antes do Screen*/ }

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Inicio"> {/* aqui posso definir a tela inicial*/}
        <Drawer.Screen name="Inicio" component={Inicio} />
		<Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Notifications" component={Sobre} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}