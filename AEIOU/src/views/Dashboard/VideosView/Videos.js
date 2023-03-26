import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image} from 'react-native';
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
      url: '',
      source: require('../../../../assets/stepBack.mp4'),
      name: 'Step Back',
      imagenCover: require('../../../../assets/letraO.png'),
    },
    {
      url: '',
      source: require('../../../../assets/stayWithMe.mp4'),
      name: 'Stay With Me',
      imagenCover: require('../../../../assets/letraO.png'),
    },
  ]);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'black', height: '110%', top: -10};

  return (
    <>
      {/* Main Body */}
      <View style={styles.containerVideos}>
        {/* List videos */}
        {listVideos.map((v, i) => (
          <View key={i} style={styles.containerVideo}>
            <Text
              style={{
                position: 'absolute',
                alignSelf: 'center',
                zIndex: 10,
                bottom: 5,
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
      </View>
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
    height: 300,
    resizeMode: 'center',
  },
  containerVideos: {
    // backgroundColor: 'blue',
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  containerVideo: {
    // backgroundColor: 'red',
    marginTop: 10,
    width: 400,
    height: 300,
    borderRadius: 10,
    borderColor:'gray',
    borderWidth: 1,
  },
});

export default Videos;
