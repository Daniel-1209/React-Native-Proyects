import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({navigation}) => {
  return (
    <View style={styles.body}>
      {/* Games Section */}
      <Text style={styles.sectionTitle}>
        {' '}
        <Icon name="gamepad" style={{fontSize: 30}} /> JUEGOS
      </Text>
      <View style={styles.section}>
        {/* Container to Letters */}
        <View
          onTouchStart={() => navigation.navigate('ImagesOfLetters')}
          style={styles.container}>
          <Image
            source={require('../../../../assets/letrasE.png')}
            style={styles.containerImage}
          />
          <Text style={styles.containerTitle}>Letras</Text>
        </View>
        {/* Container to Globes */}
        <View
          onTouchStart={() => navigation.navigate('Globes')}
          style={styles.container}>
          <Image
            source={require('../../../../assets/globo.png')}
            style={styles.containerImage}
          />
          <Text style={styles.containerTitle}>Globos</Text>
        </View>
      </View>
      {/* Multimedia Section */}
      <Text style={styles.sectionTitle}>
        {' '}
        <Icon name="image" style={{fontSize: 25}} /> MULTIMEDIA
      </Text>
      <View style={styles.section}>
        {/* Container to Videos */}
        <View
          onTouchStart={() => navigation.navigate('Videos')}
          style={styles.container}>
          <Image
            source={require('../../../../assets/logoVideo.png')}
            style={styles.containerImage}
          />
          <Text style={styles.containerTitle}>Videos Musicales</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {backgroundColor: '#dbeffe', minHeight: '100%'},
  sectionTitle: {fontSize: 25, marginLeft: 10, marginTop: 30, color: 'black'},
  section: {
    // backgroundColor: 'green',
    marginLeft: 50,
    flexDirection: 'row',
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
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});

export default Home;
