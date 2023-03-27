import React, {useState} from 'react';
import {View, Text, SafeAreaView, Image, BackHandler} from 'react-native';
import {Drawer, Divider} from 'react-native-paper';
import {DrawerContentScrollView} from '@react-navigation/drawer';

const DrawerContainer = ({navigation}) => {
  const [active, setActive] = useState('home');
  const handleScreen = screen => {
    setActive(screen);
    navigation.navigate(screen);
  };
  return (
    <DrawerContentScrollView>
      <SafeAreaView>
        <Image
          style={{width: '100%', height: 150,resizeMode:'center',  borderRadius:30}}
          source={require('../../assets/logo02.png')}
        />
      </SafeAreaView>
      <Drawer.Section 
        style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop:30}}>
        <Text style={{marginBottom:10, fontSize:20}}>Menu Principal</Text>
        <Drawer.Item
          active={active === 'home'}
          icon="home-circle-outline"
          label="inicio"
          onPress={() => handleScreen('home')}
        />
        <Drawer.Item
        style={{marginTop:50}}
          icon="exit-to-app"
          label="Salir"
          onPress={() => BackHandler.exitApp()}
        />
      </Drawer.Section>
    </DrawerContentScrollView>
  );
};

export default DrawerContainer;
