import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Modal, StyleSheet, View, Image} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {ButtonColor} from '../../../assets/colors/colors';
import Button from '../Button';
import {frameLogo} from '../../../assets/images/images';
import Entypo from 'react-native-vector-icons/Entypo'
import GoalButton from '../GoalButton/GoalButton';
import { PoppinsBold } from '../../../assets/fonts/Fonts';
import GoalFrame from '../../../assets/images/GoalFrame'

const SetGoalModaal = props => {
  const navigation = useNavigation();
  console.log('hahahahaha', props.modalVisible);

  const navigateNewGoal = ()=>{
    props.setModalVisible(false)
    navigation.navigate('newGoal')
  }
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={props.requestClose}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.imageView}>
              {/* <Image source={frameLogo} /> */}
              <GoalFrame/>
            </View>
          
              <GoalButton
           title="Set New Goals"
           buttonTextStyle={{fontSize:moderateScale(16)}}
           onPress={navigateNewGoal}
           buttonViewStyle={styles.buttonStyle}/>

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
    borderRadius: moderateScale(20),
    // padding: 25,
    paddingVertical: verticalScale(20),
    height: '40%',
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
    paddingHorizontal: scale(10),
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
    marginBottom: verticalScale(15),
    textAlign: 'center',
    color: '#2B2F86',
    fontSize: moderateScale(20),
    // fontWeight: 'bold',
    fontFamily:PoppinsBold,
    paddingHorizontal: scale(10),
  },
  imageView: {
    marginVertical: verticalScale(10),
    // alignSelf: 'center',
    marginBottom: verticalScale(40),
    width:'54%',
    height:'54%',
    backgroundColor:'rgba(43, 47, 134, 0.04)',
    borderRadius:moderateScale(200)
  },
  setButtton: {
    backgroundColor: ButtonColor,
    marginBottom: verticalScale(10),
    paddingHorizontal: scale(60),
    borderRadius: moderateScale(30),

  },
  browseButton: {
    backgroundColor: 'white',
    color: ButtonColor,
    borderWidth: 1,
    borderColor: ButtonColor,
    borderRadius: moderateScale(30),
    width: '100%',
    paddingHorizontal: scale(60),
    fontSize:moderateScale(16),
    paddingTop:verticalScale(8),
    paddingBottom:verticalScale(5)
  },
  
  buttonStyle:{
    paddingHorizontal:scale(45),
    marginBottom:verticalScale(10),
    // paddingTop:verticalScale(10)
  }
});

export default SetGoalModaal;
