import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import QuestionHeader from '../../components/Header/QuestionHeader';
import {useNavigation} from '@react-navigation/native';
import {
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import {ButtonColor} from '../../../assets/colors/colors';
import Button from '../../components/Button';
import {picture} from '../../../assets/images/images';

const RetakePhoto = props => {
  const navigation = useNavigation();
  const urii = props.route.params.uri;
  const uri = urii?.assets && urii.assets[0].uri;
  console.log('uriiii', urii, 'uri', uri);
  return (
    <View style={styles.mainView}>
      <View>
        <QuestionHeader />

        <View style={styles.buttonView}>
          <Image source={uri ? {uri:uri} : null} style={styles.uriImage} />

          <Button
            buttonStyle={styles.button}
            title={'Continue'}
            onPress={() => navigation.navigate('drawer')}
          />
          <Button
            buttonStyle={styles.secondButton}
            title={'Retake'}
            onPress={() => navigation.navigate('camera')}
          />
        </View>
      </View>
      <View style={styles.footerView}>
        <Text style={styles.powered}>Powered by</Text>
        <Text style={styles.ensemble}>ENSEMBLE</Text>
      </View>
    </View>
  );
};

export default RetakePhoto;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#F1F1F1',
  },
  uriImage: {
    alignSelf: 'center',
    marginBottom: verticalScale(50),
    height: 260,
    width: 260,
    overflow: 'hidden',
    borderWidth: 4,
    borderRadius: 260 / 2,
  },
  input: {
    paddingBottom: verticalScale(50),
    // paddingHorizontal:scale(20)
  },
  footerView: {
    marginHorizontal: scale(20),
    marginBottom: verticalScale(20),
  },
  powered: {
    color: 'black',
  },
  ensemble: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: moderateVerticalScale(20),
  },
  buttonView: {
    marginTop: verticalScale(80),
  },
  button: {
    width: '85%',
    backgroundColor: ButtonColor,
    // marginBottom: verticalScale(10)
  },
  secondButton: {
    color: '#505050',
    width: '85%',
    backgroundColor: '#F1F1F1',
    // marginBottom: verticalScale(10)
  },
});
