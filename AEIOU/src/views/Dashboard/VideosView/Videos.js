import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, ScrollView} from 'react-native';
import {
  Modal,
  Portal,
  Text,
  Button,
  Provider,
  IconButton,
} from 'react-native-paper';
import Video from 'react-native-video';

const Videos = () => {
  const [visible, setVisible] = useState(false);
  const [videoNow, setVideoNow] = useState({});
  const [inPlay, setInPlat] = useState(false);
  const [listVideos, setListVideos] = useState([
    {
      urlYoutube: 'https://www.youtube.com/watch?v=q8aD-OS7kn8',
      source: require('../../../../assets/Videos/v01.mp4'),
      name: 'Aprende a pronunciar Las Vocales en Español aeiou',
      imagenCover: require('../../../../assets/Videos/i01.jpeg'),
    },
    {
      urlYoutube: 'https://www.youtube.com/watch?v=CqTXFbnG0ag&t=1s',
      source: require('../../../../assets/Videos/v02.mp4'),
      name: 'Ronda De Las Vocales - MundoCanticuentos',
      imagenCover: require('../../../../assets/Videos/i02.jpeg'),
    },
    {
      urlYoutube: 'https://www.youtube.com/watch?v=-2b3sNObuwM',
      source: require('../../../../assets/Videos/v03.mp4'),
      name: 'Las Vocales - Aprende las vocales',
      imagenCover: require('../../../../assets/Videos/i03.jpeg'),
    },
    {
      urlYoutube: 'https://www.youtube.com/watch?v=Bf_li_H-J8M',
      source: require('../../../../assets/Videos/v04.mp4'),
      name: 'La Risa de la Vocales - Canciones y Clásicos Infantiles',
      imagenCover: require('../../../../assets/Videos/i04.jpeg'),
    },
    {
      urlYoutube: 'https://www.youtube.com/watch?v=4Dnw1Nxo5bs',
      source: require('../../../../assets/Videos/v05.mp4'),
      name: 'Las vocales - Canciones infantiles - Canta y baila',
      imagenCover: require('../../../../assets/Videos/i05.jpeg'),
    },
    {
      urlYoutube: 'https://www.youtube.com/watch?v=hUmcjGvWaGc&t=152s',
      source: require('../../../../assets/Videos/v06.mp4'),
      name: 'Las vocales para niños - Aprender las vocales - a e i o u',
      imagenCover: require('../../../../assets/Videos/i06.jpeg'),
    },
    {
      urlYoutube: 'https://www.youtube.com/watch?v=D6ma0yF1PiE',
      source: require('../../../../assets/Videos/v07.mp4'),
      name: 'Un Lugar Muy Divertido ♫ Canciones infantiles ♫ Plim Plim',
      imagenCover: require('../../../../assets/Videos/i07.jpeg'),
    },
    {
      urlYoutube: 'https://www.youtube.com/watch?v=Rj4RwPRCQVo&t=119s',
      source: require('../../../../assets/Videos/v08.mp4'),
      name: 'Plim Plim - Aprendemos las Vocales - Videos Educativos',
      imagenCover: require('../../../../assets/Videos/i08.jpeg'),
    },
    // {
    //   urlYoutube: '',
    //   source: require('../../../../assets/Videos/v02.mp4'),
    //   name: '',
    //   imagenCover: require('../../../../assets/Videos/i02.jpeg'),
    // },
  ]);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'black', height: '110%', top: -10};

  return (
    <>
      {/* Main Body */}
      <ScrollView contentContainerStyle={styles.containerVideos}>
        {/* List videos */}
        {listVideos.map((v, i) => (
          <View key={i} style={styles.containerVideo}>
            <Text
              style={{
                position: 'absolute',
                alignSelf: 'center',
                zIndex: 10,
                bottom: 0,
                textAlign:'center',
                fontSize: 20,
              }}>
              Video {v.name}
            </Text>
            <Image source={v.imagenCover} style={styles.backgroundVideo} />
            <IconButton
              icon="play"
              size={50}
              style={{
                // backgroundColor: 'red',
                position: 'absolute',
                alignSelf: 'center',
                bottom: '40%',
              }}
              onPress={() => {
                setVideoNow(v);
                showModal();
              }}
            />
          </View>
        ))}
      </ScrollView>
      {/* Modal */}
      <Provider>
        <Portal>
          <Modal visible={visible} contentContainerStyle={containerStyle}>
            <Video
              controls
              resizeMode="contain"
              source={videoNow?.source} // Can be a URL or a local file.
              onBuffer={this.onBuffer} // Callback when remote video is buffering
              onError={this.videoError} // Callback when video cannot be loaded
              style={styles.backgroundVideo}
            />
            <Button
              style={{position: 'absolute', top: 50, right: 10}}
              mode="contained"
              onPress={hideModal}>
              Ocultar
            </Button>
          </Modal>
        </Portal>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    height: 180,
    width: 280,
    marginTop: 5,
    marginLeft:'auto',
    marginRight:'auto'
  },
  containerVideos: {
    // backgroundColor: 'blue',
    // height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  containerVideo: {
    backgroundColor: 'white',
    marginTop: 10,
    margin: 20,
    width: 320,
    height: 250,
    borderRadius: 10,
    borderColor: 'gray',
    // borderWidth: 1,
  },
});

export default Videos;
