import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Modal, StyleSheet, View, Image} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {ButtonColor} from '../../../assets/colors/colors';
import Button from '../Button';
import {frameLogo} from '../../../assets/images/images';
import Entypo from 'react-native-vector-icons/Entypo'
import GoalButton from '../GoalButton/GoalButton';

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
              <Image source={frameLogo} />
            </View>
          
              <GoalButton
           title="Set New Goals"
           onPress={navigateNewGoal}
           buttonViewStyle={styles.buttonStyle}/>

            <Button title="Browse Goals" buttonStyle={styles.browseButton} onPress={()=>navigation.navigate('discovergoals')} />
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
    marginVertical: verticalScale(10),
    // alignSelf: 'center',
    marginBottom: verticalScale(20),
    width:'50%',
    height:'50%',
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
  },
  
  buttonStyle:{
    paddingHorizontal:scale(45),
    marginBottom:verticalScale(10),
  }
});

export default SetGoalModaal;
