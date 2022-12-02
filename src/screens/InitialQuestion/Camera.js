import {
  StyleSheet,
  Text,
  View,
  Image,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import QuestionHeader from '../../components/Header/QuestionHeader';
import * as ImagePicker from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {camera} from '../../../assets/images/images';
import Button from '../../components/Button';
import {ButtonColor} from '../../../assets/colors/colors';

const Camera = () => {
  const navigation = useNavigation();
  const [imageUri, setImageUri] = useState();

  console.log('imageUri', imageUri);

  const launchCameraa = React.useCallback(() => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchCamera(options, response => {
      if (response.didCancel) {
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      } else {
        navigation.navigate('retake', {uri: response});
      }
    });
  }, []);

  const imageGalleryLaunch = React.useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      } else {
        navigation.navigate('retake', {uri: response});
      }
    });
  }, []);
  return (
    <View style={styles.mainView}>
      <View>
        <QuestionHeader />
        <View style={styles.cameraView}>
          <Image source={camera} style={{alignSelf: 'center'}} />
          <Text style={styles.photo}>A Photo Of you</Text>
          <Text style={styles.lorem}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </View>
        <View style={styles.buttonView}>
          <Button
            buttonStyle={styles.button}
            title={'Take Photo'}
            onPress={launchCameraa}
          />
          <Button
            buttonStyle={styles.secondButton}
            title={'Choose from camera roll'}
            onPress={imageGalleryLaunch}
          />
        </View>
      </View>

      {/* <Footer powered={{ color: 'black' }} ensemble={{ color: 'black' }} iconName={'chevron-right'} onPress={() => navigation.navigate('enjoy')} /> */}
      <View style={styles.footerView}>
        <Text style={styles.powered}>Powered by</Text>
        <Text style={styles.ensemble}>ENSEMBLE</Text>
      </View>
    </View>
  );
};

export default Camera;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  powered: {
    color: 'black',
  },
  ensemble: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: moderateScale(20),
  },
  footerView: {
    marginHorizontal: scale(20),
    marginBottom: verticalScale(20),
  },
  cameraView: {
    marginTop: verticalScale(40),
  },
  photo: {
    color: 'black',
    fontWeight: '500',
    textAlign: 'center',
    fontSize: moderateScale(25),
    marginTop: verticalScale(50),
  },
  lorem: {
    color: '#5C5C5C',
    marginHorizontal: scale(30),
    textAlign: 'center',
    marginTop: verticalScale(10),
    lineHeight: verticalScale(20),
  },
  button: {
    width: '85%',
    backgroundColor: ButtonColor,
    marginBottom: verticalScale(10),
    borderRadius: moderateScale(40),
    paddingVertical: verticalScale(14),
  },
  secondButton: {
    width: '85%',
    backgroundColor: 'black',
    marginBottom: verticalScale(10),
    borderRadius: moderateScale(40),
    paddingVertical: verticalScale(14),
  },
  buttonView: {
    marginTop: verticalScale(50),
  },
});
