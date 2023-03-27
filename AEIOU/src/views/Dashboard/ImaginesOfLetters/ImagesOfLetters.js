import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Text, Button, Provider} from 'react-native-paper';
import Sound from 'react-native-sound';
import letterImgA from '../../../../assets/letraA.png';
import letterImgE from '../../../../assets/letraE.png';
import letterImgI from '../../../../assets/letraI.png';
import letterImgO from '../../../../assets/letraO.png';
import letterImgU from '../../../../assets/letraU.png';
import audioA from '../../../../assets/vocalA.mp3';
import audioE from '../../../../assets/vocalE.mp3';
import audioI from '../../../../assets/vocalI.mp3';
import audioO from '../../../../assets/vocalO.mp3';
import audioU from '../../../../assets/vocalU.mp3';

const ImagesOfLetters = () => {
  const [position, setPosition] = useState(
    Math.floor(Math.random() * (4 - 0 + 1)) + 0,
  );
  const [letters, setLetters] = useState([
    {
      name: 'A',
      img: letterImgA,
      audio: audioA,
    },
    {
      name: 'E',
      img: letterImgE,
      audio: audioE,
    },
    {
      name: 'I',
      img: letterImgI,
      audio: audioI,
    },
    {
      name: 'O',
      img: letterImgO,
      audio: audioO,
    },
    {
      name: 'U',
      img: letterImgU,
      audio: audioU,
    },
  ]);

  const playSound = son => {
    const whoosh = new Sound(son, error => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // console.log('No hubo fallos');
      // console.log('Miraaa ', whoosh.getDuration(), whoosh.getVolume());
      whoosh.play(() => whoosh.release());
    });
  };

  const changePosition = () => {
    setPosition(Math.floor(Math.random() * (4 - 0 + 1)) + 0);
  };

  return (
    <View style={{height: '100%', backgroundColor: '#caacf9'}}>
      {/* Imagen content */}
      <View
        style={{
          //   backgroundColor: 'red',
          height: '70%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          onTouchStart={() => playSound(letters[position].audio)}
          style={{
            backgroundColor: 'white',
            height: '80%',
            elevation: 10,
            borderRadius: 20,
          }}>
          <Image
            style={{
              resizeMode: 'contain',
              height: '100%',
            }}
            source={letters[position].img}
          />
        </View>
      </View>
      {/* Buttons content */}
      <View
        style={{
          // backgroundColor: 'green',
          // height:'20%',
          width: '100%',
          marginTop: 30,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        {/* Skip */}
        <Button
          icon="skip-previous-circle"
          contentStyle={{
            backgroundColor: 'white',
            paddingTop: 10,
            paddingBottom: 10,
          }}
          labelStyle={{color: 'black', fontSize: 20}}
          style={{width: 300}}
          onPress={changePosition}
          mode="contained">
          Anterior
        </Button>
        {/* Next */}
        <Button
          icon="skip-next-circle"
          contentStyle={{
            backgroundColor: 'white',
            flexDirection: 'row-reverse',
            paddingTop: 10,
            paddingBottom: 10,
          }}
          labelStyle={{color: 'black', fontSize: 20}}
          style={{width: 300}}
          onPress={changePosition}
          mode="contained">
          Siguiente
        </Button>
      </View>
    </View>
  );
};

export default ImagesOfLetters;
