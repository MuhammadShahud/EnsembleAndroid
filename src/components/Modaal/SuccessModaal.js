import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import { tickLogo } from '../../../assets/images/images';
import PrimaryButton from '../PrimaryButton';

const SuccessModaal = props => {
  const navigation = useNavigation();
  const submitLogin = () => {
    props.setVisible(!props.visible);
    navigation.navigate('home');
  };
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.visible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          props.setVisible(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={[styles.modalText,props.modalText]}>{props.successText}</Text>

            <View style={styles.imageView}>
              <Image style={styles.imageView2} source={tickLogo} />
            </View>
            <View style={{width:'80%'}}>
            <PrimaryButton
              title={props.buttonTitle}
              backgroundColor={props.backgroundButtonColor}
              color="white"
              onPress={submitLogin}
            />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.70)',

    // marginTop: 22
  },
  modalView: {
    // margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    // padding: 25,
    paddingVertical: verticalScale(20),
    height: '45%',
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: '#2B2F86',
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    paddingHorizontal: scale(10),
  },
  imageView: {
    marginVertical: verticalScale(20),
    width:'45%',
    height:'45%'
  },
  imageView2: {
    width:'100%',
    height:'100%'
  },
});

export default SuccessModaal;
