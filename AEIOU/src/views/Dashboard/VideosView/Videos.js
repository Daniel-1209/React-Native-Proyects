import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Modal, Portal, Text, Button, Provider} from 'react-native-paper';
import Video from 'react-native-video';
import stepBack from '../../../../assets/stepBack.mp4';
import stayWithMe from '../../../../assets/stayWithMe.mp4';

const Videos = () => {
  const [visible, setVisible] = useState(false);
  const [videoNow, setVideoNow] = useState({});
  const [listVideos, setListVideos] = useState([
    {
      url: '',
      source: stepBack,
      name: 'Step Back',
      imagenCover: '',
    },
    {
      url: '',
      source: stayWithMe,
      name: 'Stay With Me',
      imagenCover: '',
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
            <Text>Video {v.name}</Text>
            <Video
              controls
              paused
              resizeMode="contain"
              source={v.source} // Can be a URL or a local file.
              onBuffer={this.onBuffer} // Callback when remote video is buffering
              onError={this.videoError} // Callback when video cannot be loaded
              style={styles.backgroundVideo}
            />
            <Button
              style={{position: 'absolute', top: 0, right: 0}}
              onPress={() => {
                setVideoNow(v);
                showModal();
              }}
              mode="contained">
              Agrandar
            </Button>
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
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  containerVideos: {
    backgroundColor: 'blue',
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  containerVideo: {
    backgroundColor: 'red',
    marginTop: 10,
    width: 400,
    height: 300,
    borderWidth: 3,
  },
});

export default Videos;
