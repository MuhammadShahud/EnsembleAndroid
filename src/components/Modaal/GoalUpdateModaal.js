import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Modal, StyleSheet, View, Image,Text} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {ButtonColor} from '../../../assets/colors/colors';
import Button from '../Button';
import {frameLogo} from '../../../assets/images/images';
import AntDesign from 'react-native-vector-icons/AntDesign'

const SetGoalModaal = props => {
  const navigation = useNavigation();
  console.log('hahahahaha', props.modalVisible);

  const navigateNewGoal = ()=>{
    props.setModalVisible(false)
    navigation.navigate('personalgoals')
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
                <AntDesign name='checkcircleo' size={50} color={ButtonColor} style={styles.icon}/>
              {/* <Image source={frameLogo} /> */}
            </View>
            <Text style={styles.text}>Goals Updated Successfully</Text>
            <Button
              title="Go Back To Goals"
              buttonStyle={styles.setButtton}
              onPress={navigateNewGoal}
            />

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
    // marginVertical: verticalScale(10),
    // alignSelf: 'center',
    marginBottom: verticalScale(20),
    width:'45%',
    height:'45%',
    backgroundColor:'rgba(43, 47, 134, 0.04)',
    borderRadius:moderateScale(200),
    justifyContent:'center'
  },
  setButtton: {
    backgroundColor: ButtonColor,
    marginBottom: verticalScale(10),
    paddingHorizontal: scale(60),
    borderRadius: moderateScale(30),

  },
 

  text:{
    color:'black',
    fontSize:moderateScale(25),
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:verticalScale(10)
  },
  icon:{
    alignSelf:'center',
    justifyContent:'center'
  }
});

export default SetGoalModaal;
