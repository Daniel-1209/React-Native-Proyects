import React from 'react';
import {Image, Text, View, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({navigation}) => {
  return (
    <ScrollView style={styles.body}>
      {/* Games Section */}
      <>
        {/* Title */}
        <Text style={styles.sectionTitle}>
          {' '}
          <Icon name="gamepad" style={{fontSize: 30}} /> JUEGOS
        </Text>
        {/* Content */}
        <ScrollView horizontal={true} style={styles.section}>
          {/* Container to Letters */}
          <View
            // onTouchStart={() => navigation.navigate('ImagesOfLetters')}
            style={styles.container}>
            <Image
              source={require('../../../../assets/letrasE.png')}
              style={styles.containerImage}
            />
            <Text
              onPress={() => navigation.navigate('ImagesOfLetters')}
              style={styles.containerTitle}>
              Letras
            </Text>
          </View>
          {/* Container to Globes */}
          <View style={styles.container}>
            <Image
              source={require('../../../../assets/globo.png')}
              style={styles.containerImage}
            />
            <Text
              onPress={() => navigation.navigate('Globes')}
              style={styles.containerTitle}>
              Globos
            </Text>
          </View>
          {/* Container to Draw */}
          <View style={styles.container}>
            <Image
              source={require('../../../../assets/logoDubujar.png')}
              style={styles.containerImage}
            />
            <Text
              onPress={() => navigation.navigate('Draw')}
              style={styles.containerTitle}>
              Marcar
            </Text>
          </View>
          {/* Container to Draw with help */}
          <View style={styles.container}>
            <Image
              source={require('../../../../assets/logoLapiz.png')}
              style={styles.containerImage}
            />
            <Text
              onPress={() => navigation.navigate('Write')}
              style={styles.containerTitle}>
              Escribir
            </Text>
          </View>
        </ScrollView>
      </>
      {/* Multimedia Section */}
      <>
        {/* Title */}
        <Text style={styles.sectionTitle}>
          {' '}
          <Icon name="image" style={{fontSize: 25}} /> MULTIMEDIA
        </Text>
        {/* Content */}
        <ScrollView horizontal={true} style={styles.section}>
          {/* Container to Videos */}
          <View style={styles.container}>
            <Image
              source={require('../../../../assets/logoVideo.png')}
              style={styles.containerImage}
            />
            <Text
              onPress={() => navigation.navigate('Videos')}
              style={styles.containerTitle}>
              Videos Musicales
            </Text>
          </View>
        </ScrollView>
      </>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {backgroundColor: '#dbeffe', minHeight: '100%'},
  sectionTitle: {fontSize: 25, marginLeft: 10, marginTop: 30, color: 'black'},
  section: {
    // backgroundColor: 'green',
    marginLeft: 50,
    padding: 20,
  },
  container: {
    height: 150,
    width: 100,
    backgroundColor: 'white',
    marginRight: 30,
    borderRadius: 20,
  },
  containerImage: {
    height: '60%',
    width: '100%',
    resizeMode: 'contain',
    backgroundColor: '#e4fbfb',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  containerTitle: {
    textAlign: 'center',
    color: 'black',
    textTransform: 'uppercase',
    // backgroundColor: 'pink',
    height: 58,
    textAlignVertical: 'center',
  },
});

export default Home;
