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
import { PoppinsSemiBold } from '../../../assets/fonts/Fonts';
import { greentick, tickLogo } from '../../../assets/images/images';
import PrimaryButton from '../PrimaryButton';
import CircleCheck from '../../../assets/images/CircleCheck'
const SuccessModaal = props => {
  const navigation = useNavigation();
  const submitLogin = () => {
    props.setVisible(!props.visible);
    navigation.navigate('drawer');
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
              {/* <Image style={styles.imageView2} source={props.source} /> */}
              <CircleCheck/>
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

  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: moderateScale(20),
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
    borderRadius: moderateScale(20),
    paddingHorizontal:scale(10),
    paddingVertical:verticalScale(10),
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
    textAlign: 'center',
    color: '#2B2F86',
    fontSize: moderateScale(20),
    fontFamily:PoppinsSemiBold,
    paddingHorizontal: scale(10),
    // marginBottom:verticalScale(-5)
    marginBottom:verticalScale(10)
  },
  imageView: {
    marginBottom: verticalScale(20),
    width:'45%',
    height:'45%',
  },
  imageView2: {
    width:'100%',
    height:'100%'
  },
});

export default SuccessModaal;
