import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  PermissionsAndroid,
  Image,
  Platform,
} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {TextInput} from 'react-native-paper';
import FaceDetection, {
  FaceDetectorContourMode,
  FaceDetectorLandmarkMode,
  FaceContourType,
} from 'react-native-face-detection';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  // Local path to file on the device
  const [imagePath, setImagePath] = useState(
    '/emulated/O/Download/image_1659397032579.jpg',
  );
  const [text, setText] = React.useState('');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const checkPermission = async () => {
    // Function to check the platform
    // If iOS then start downloading
    // If Android then ask for permission

    if (Platform.OS === 'ios') {
      downloadImage();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message: 'App needs access to your storage to download Photos',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Once user grant the permission start downloading
          console.log('Storage Permission Granted.');
          downloadImage();
        } else {
          // If permission denied then show alert
          alert('Storage Permission Not Granted');
        }
      } catch (err) {
        // To handle permission related exception
        console.warn(err);
      }
    }
  };

  const downloadImage = () => {
    // Main function to download the image

    // To add the time suffix in filename
    let date = new Date();
    // Image URL which we want to download
    let image_URL = text;
    // Getting the extention of the file
    let ext = getExtention(image_URL);
    ext = '.' + ext[0];
    // Get config and fs from RNFetchBlob
    // config: To pass the downloading related options
    // fs: Directory path where we want our image to download
    const {config, fs} = RNFetchBlob;
    let PictureDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        // Related to the Android only
        useDownloadManager: true,
        notification: true,
        path:
          PictureDir +
          '/image_' +
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          ext,
        description: 'Image',
      },
    };
    config(options)
      .fetch('GET', image_URL)
      .then(res => {
        // Showing alert after successful downloading
        console.log('res -> ', JSON.stringify(res));
        setImagePath(res.path);
        console.log('Esta es la url : ', imagePath);
        alert('Image Downloaded Successfully.');
      });
  };

  const getExtention = filename => {
    // To get the file extension
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
  };

  async function processFaces(imagePath) {
    const options = {
      landmarkMode: FaceDetectorLandmarkMode.ALL,
      contourMode: FaceDetectorContourMode.ALL,
    };

    const faces = await FaceDetection.processImage(imagePath, options);
    console.log('Caras', faces.length);
    faces.forEach(face => {
      console.log('Head rotation on X axis: ', face.headEulerAngleX);
      console.log('Head rotation on Y axis: ', face.headEulerAngleY);
      console.log('Head rotation on Z axis: ', face.headEulerAngleZ);

      console.log('Left eye open probability: ', face.leftEyeOpenProbability);
      console.log('Right eye open probability: ', face.rightEyeOpenProbability);
      console.log('Smiling probability: ', face.smilingProbability);
    });
  }

  useEffect(() => {
    const talk = async () => {
      console.log('\n\n\n Antes');

      try {
        await processFaces(imagePath).then(() =>
          console.log('Finished processing file.'),
        );
      } catch (error) {
        console.log('Error ', error);
      }

      console.log('\n\n\n Despues');
    };

    talk();
  }, [imagePath]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View style={styles.container}>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 30, textAlign: 'center'}}>
              React Native Image Download Example
            </Text>
            <TextInput
            style={{width: '100%', minWidth:300}}
              label="URL Imagen"
              value={text}
              onChangeText={text => setText(text)}
            />
          </View>
          <Image
            source={{
              uri: text,
            }}
            style={{
              width: '100%',
              height: 200,
              resizeMode: 'contain',
              margin: 5,
            }}
          />
          <TouchableOpacity style={styles.button} onPress={checkPermission}>
            <Text style={styles.text}>Download Image</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    width: '80%',
    padding: 10,
    backgroundColor: 'orange',
    margin: 10,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    padding: 5,
  },
});

export default App;
