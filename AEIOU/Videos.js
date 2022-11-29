import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import Video from 'react-native-video';
import stepBack from './assets/stepBack.mp4';

const Videos = () => {
  return (
    <View>
      <Text>Videos</Text>
      <Video
        source={stepBack} // Can be a URL or a local file.
        onBuffer={this.onBuffer} // Callback when remote video is buffering
        onError={this.videoError} // Callback when video cannot be loaded
        style={styles.backgroundVideo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    height: 200,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default Videos;
