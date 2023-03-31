import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import Animated, {
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
  withSpring,
} from 'react-native-reanimated';
import globoImg from '../../../../assets/globo.png';
import abejaImg from '../../../../assets/abeja.png';
import elefanteImg from '../../../../assets/elefante.jpeg';
import iglesiaImg from '../../../../assets/iglesia.jpg';
import osoImg from '../../../../assets/oso.png';
import unicorniImg from '../../../../assets/unicornio2.png';
import audioA from '../../../../assets/vocalA.mp3';
import audioE from '../../../../assets/vocalE.mp3';
import audioI from '../../../../assets/vocalI.mp3';
import audioO from '../../../../assets/vocalO.mp3';
import audioU from '../../../../assets/vocalU.mp3';
import errorAudio from '../../../../assets/errorsonido.mp3';

import Sound from 'react-native-sound';

const Globes = () => {
  const [letters, setLetters] = useState([
    {
      name: 'A',
      img: abejaImg,
      audio: audioA,
      labelImg: 'A-BE-JA',
      x: 0,
      y: 0,
    },
    {
      name: 'E',
      img: elefanteImg,
      audio: audioE,
      labelImg: 'E-LE-FAN-TE',
      x: 0,
      y: 0,
    },
    {
      name: 'I',
      img: iglesiaImg,
      audio: audioI,
      labelImg: 'I-GLE-SI-A',
      x: 0,
      y: 0,
    },
    {
      name: 'O',
      img: osoImg,
      audio: audioO,
      labelImg: 'O-SO',
      x: 0,
      y: 0,
    },
    {
      name: 'U',
      img: unicorniImg,
      audio: audioU,
      labelImg: 'U-NI-COR-NI-O',
      x: 0,
      y: 0,
    },
  ]);
  const [position, setPosition] = useState(0);
  const [maxWidth, setMaxWidth] = useState(
    // (78 * Dimensions.get('window').width) / 100 - 100,
    Dimensions.get('window').width - 100,
  );
  const [maxHeigth, setMaxHeigth] = useState(
    // Dimensions.get('window').height - 200,
    (78 * Dimensions.get('window').height) / 100 - 200,
  );

  const playSound = sss => {
    const whoosh = new Sound(sss, error => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // console.log('No hubo fallos');
      // console.log('Miraaa ', whoosh.getDuration(), whoosh.getVolume());
      whoosh.play(() => whoosh.release());
    });
  };

  const checkLetter = lett => {
    console.log('Pressed ', lett);
    const arrayNow = [];

    if (letters[position].name === lett) {
      console.log('Siiiii');
      playSound(letters[position].audio);
      setPosition((position + 1) % 5);
    } else {
      console.log('Noooo');
      playSound(errorAudio);
    }

    for (let i = 0; i < 5; i += 1) {
      arrayNow.push({
        ...letters[i],
        x: Math.floor(Math.random() * (maxWidth - 1 + 1)) + 1,
        y: Math.floor(Math.random() * (maxHeigth - 1 + 1)) + 1,
      });
    }
    setLetters(arrayNow);
  };

  const glowAnimation = useAnimatedStyle(() => ({
    transform: [
      {
        scale: withRepeat(
          withSequence(
            withTiming(1.2, {duration: 1500}),
            withTiming(1.6, {duration: 1500}),
            withTiming(1.8, {duration: 1500}),
          ),
          -1,
          true,
        ),
      },
    ],
  }));

  const animatedMove = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withRepeat(
          withSequence(
            withTiming(0.1, {duration: 2500}),
            withTiming(120.1, {duration: 2500}),
            withTiming(0.1, {duration: 2500}),
            //   withTiming(Math.random() * 100, {duration: 2500}),
          ),
        ),
      },
    ],
  }));

  return (
    <View style={styles.viewMain}>
      {/* View left */}
      <View style={styles.viewLeft}>
        {/* letter */}
        <View style={styles.conteinerLetter}>
          <Text adjustsFontSizeToFit style={{fontSize: 20, textAlign: 'center'}}>Explota</Text>
          <Animated.View style={[styles.glowContainer, glowAnimation]}>
            <Text
              onPress={() => playSound(letters[position].audio)}
              adjustsFontSizeToFit
              style={{fontSize: 50, textAlign: 'center'}}>
              {letters[position].name}
            </Text>
          </Animated.View>
        </View>
        {/* Image Animation */}
        {/* <Animated.View style={[styles.contenerImage, animatedMove]}> */}
        <View style={styles.contenerImage}>
          <Image style={styles.imgCover} source={letters[position].img} />
          <Text
            onPress={() => playSound(letters[position].audio)}
            adjustsFontSizeToFit
            style={{
              fontSize: 35,
              display: 'none',
              textAlign: 'center',
              color: 'white',
            }}>
            {letters[position].labelImg}
          </Text>
        </View>
        {/* </Animated.View> */}
      </View>

      {/* View Rigth */}
      <View style={styles.viewRigth}>
        {/* A */}
        <View
          style={{
            height: 100,
            width: 100,
            alignItems: 'center',
            flexDirection: 'column',
            position: 'absolute',
            left: letters[0].x,
            top: letters[0].y,
          }}>
          <Image style={styles.imgGlobo} source={globoImg} />
          <Text
            style={styles.styleLeter}
            mode="contained"
            onTouchStart={() => checkLetter('A')}>
            A
          </Text>
        </View>
        {/* E */}
        <View
          style={{
            height: 100,
            width: 100,
            alignItems: 'center',
            flexDirection: 'column',
            position: 'absolute',
            left: letters[1].x,
            top: letters[1].y,
          }}>
          <Image style={styles.imgGlobo} source={globoImg} />
          <Text
            style={styles.styleLeter}
            mode="contained"
            onTouchStart={() => checkLetter('E')}>
            E
          </Text>
        </View>
        {/* I */}
        <View
          style={{
            height: 100,
            width: 100,
            alignItems: 'center',
            position: 'absolute',
            flexDirection: 'column',
            left: letters[2].x,
            top: letters[2].y,
          }}>
          <Image style={styles.imgGlobo} source={globoImg} />
          <Text
            style={styles.styleLeter}
            mode="contained"
            onTouchStart={() => checkLetter('I')}>
            I
          </Text>
        </View>
        {/* O */}
        <View
          style={{
            height: 100,
            width: 100,
            alignItems: 'center',
            position: 'absolute',
            flexDirection: 'column',
            left: letters[3].x,
            top: letters[3].y,
          }}>
          <Image style={styles.imgGlobo} source={globoImg} />
          <Text
            style={styles.styleLeter}
            mode="contained"
            onTouchStart={() => checkLetter('O')}>
            O
          </Text>
        </View>
        {/* U */}
        <View
          style={{
            height: 100,
            width: 100,
            alignItems: 'center',
            position: 'absolute',
            flexDirection: 'column',
            left: letters[4].x,
            top: letters[4].y,
          }}>
          <Image style={styles.imgGlobo} source={globoImg} />
          <Text
            style={styles.styleLeter}
            mode="contained"
            onTouchStart={() => checkLetter('U')}>
            U
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewMain: {
    height: '100%',
    width: '100%',
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  imgGlobo: {
    height: 91,
    width: 51.5,
  },
  styleLeter: {
    top: -95,
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
  },
  imgCover: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  viewLeft: {
    backgroundColor: '#9ca2ef',
    height: '20%',
    width: '100%',
    padding: 5,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  viewRigth: {
    backgroundColor: '#d2ecff',
    width: '100%',
    height: '78%',
    borderRadius: 30,
  },
  glowContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    bottom: 0,
    left: 0,
    right: 4,
  },
  conteinerLetter: {
    backgroundColor: 'white',
    borderRadius: 10,
    // marginTop: 10,
    height: '100%',
    width: 100,
  },
  contenerImage: {
    width: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    // marginTop: 10,
    height: '100%',
  },
});

export default Globes;
