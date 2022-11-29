import React, {useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Keyframe, Easing, useSharedValue,useAnimatedStyle, withRepeat, withTiming} from 'react-native-reanimated';
import Animated from 'react-native-reanimated';

const App = () => {
  const [position, setPosition] = useState({x: 50, y: 500});
  const [positions, setPositions] = useState([
    {x: 100, y: 500},
    {x: 200, y: 500},
    {x: 300, y: 500},
    {x: 400, y: 500},
    {x: 500, y: 500},
  ]);
  const opacity = useSharedValue(0);

  // Set the opacity value to animate between 0 and 1
  opacity.value = withRepeat(
    withTiming(1, { duration: 1000, easing: Easing.ease }),
    -1,
    true
  );

  const style = useAnimatedStyle(() => ({ opacity: opacity.value, height: 100, width:100, backgroundColor:'red' }), []);
  // const enteringAnimation = new Keyframe({
  //   0: {
  //     originX: 0,
  //     originY: 200,
  //     backgroundColor: 'red',
  //     // transform: [{translate: ' 200px 0px'}],
  //   },
  //   25: {
  //     originX: 200,
  //     originY: 200,
  //     backgroundColor: 'green',
  //     borderRadius: '50%',
  //     // transform: [{translate: '200px 200px'}],
  //   },
  //   50: {
  //     originX: 200,
  //     originY: -200,
  //     backgroundColor: 'yellow',
  //     // rotate: '45deg',
  //     // scale: 2,
  //     // transform: [{rotate: '45deg', scale: 2}],
  //   },
  //   75: {
  //     originX: 0,
  //     originY: -200,
  //     backgroundColor: 'white',
  //     // scale: 1,
  //     // transform: [{scale: 1}],
  //   },
  //   100: {
  //     originX: 0,
  //     originY: 200,
  //     // rotate: '-45deg,',
  //     // transform: [{rotate: '-45deg,'}],
  //     easing: Easing.quad,
  //   },
  // }).duration(2000);
  const a = Math.floor(Math.random() * (700 - 500 + 1) + 500);
  const b = Math.floor(Math.random() * (700 - 500 + 1) + 500);
  const c = Math.floor(Math.random() * (500 - 0 + 1) + 0);
  const d = Math.floor(Math.random() * (500 - 0 + 1) + 0);
  console.log('Number ', a, b,c,d);


  const enteringAnimation = new Keyframe({
    0: {
      originX: a,
      originY: b,
      // backgroundColor: 'red',
      // transform: [{rotate: '45deg'}],
    },
    25: {
      originX: c,
      originY: d,
      // transform: [{rotate: '45deg'}],
    },
    50: {
      originX: a,
      originY: c,
      // transform: [{scaleX: 2}],
    },
    70: {
      originX: c,
      originY: d,
      // transform: [{rotate: '-90deg'}],
    },
    100: {
      originX: d,
      originY: d,
      // transform: [{rotate: '0deg'}],
      easing: Easing.quad,
    },
  }).duration(4000);

  const exitingAnimation = new Keyframe({
    0: {
      opacity: 1,
      transform: [{skewX: '0deg'}],
    },
    30: {
      opacity: 0.5,
      transform: [{skewX: '40deg'}],
      easing: Easing.exp,
    },
    100: {
      opacity: 0,
      transform: [{skewX: '-10deg'}],
    },
  }).duration(2000);
  return (
    // All screen
    <SafeAreaView style={{height: '100%', width: '100%'}}>
      <View style={styles.viewMain}>
        {/* First Panel Invicible */}
        <View
          style={styles.panelOne}
          onTouchStart={e => {
            console.log('Miraaaa View 1 -> ');
            const positionNow = {
              x: e.nativeEvent.locationX,
              y: e.nativeEvent.locationY,
            };
            setPosition(positionNow);
            console.log(e.nativeEvent.locationX, ' ', e.nativeEvent.locationY);
          }}
        />
        {/* Second Panel blue */}
        <View style={styles.panel}>
          <Animated.View
            entering={enteringAnimation}
            style={style}
          />
          <Text
            style={{
              ...styles.contenLetter,
              left: positions[0].x - 35,
              top: positions[0].y - 30,
              '@keyframes myEffect': {
                '0%': {},
                '25%': {},
                '50%': {},
                '75%': {},
                '100%': {},
              },
            }}>
            A
          </Text>
          <Text
            style={{
              ...styles.contenLetter,
              left: positions[1].x - 35,
              top: positions[1].y - 30,
            }}>
            E
          </Text>
          <Text
            style={{
              ...styles.contenLetter,
              left: positions[2].x - 35,
              top: positions[2].y - 30,
            }}>
            I
          </Text>
          <Text
            style={{
              ...styles.contenLetter,
              left: positions[3].x - 35,
              top: positions[3].y - 30,
            }}>
            O
          </Text>
          <Text
            style={{
              ...styles.contenLetter,
              left: positions[4].x - 35,
              top: positions[4].y - 30,
            }}>
            U
          </Text>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          minHeight: 200,
          minWidth: 200,
          backgroundColor: 'blue',
          transform: [{translateX: -121}],
        }}>
        {/* <Button
          title="Press me"
          onPress={() => {
            console.log('Holaaa');
            const a = positions;
            for (let i = 0; i < 5; i += 1) {
              a[i].x = position.x;
            }
            setPositions(a);
          }}
        /> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewMain: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 0,
    backgroundColor: 'orange',
  },
  panelOne: {
    minHeight: 200,
    minWidth: 200,
    height: '80%',
    width: '50%',
    zIndex: 40,
    position: 'absolute',
    opacity: 0,
    backgroundColor: 'yellow',
  },
  panel: {
    minHeight: 200,
    minWidth: 200,
    height: '80%',
    width: '50%',
    flexWrap: 'wrap',
    zIndex: 0,
    position: 'absolute',
    backgroundColor: 'blue',
  },
  contenLetter: {
    width: 70,
    height: 70,
    textAlign: 'center',
    margin: 1,
    zIndex: 10,
    position: 'absolute',
    fontSize: 40,
    borderRadius: 100,
    backgroundColor: 'red',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
