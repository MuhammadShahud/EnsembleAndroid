import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Button from '../Button';
import {
  ButtonColor,
} from '../../../assets/colors/colors';
import SetGoalModaal from '../Modaal/SetGoalModaal';
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native-gesture-handler';
import GoalButton from '../GoalButton/GoalButton';


const SetGoals = ({visible , setVisible}) => {
 

  return (
    <View style={styles.mainView}>
      <View style={styles.container}>
        <View style={styles.GoalView}>
          <Text style={styles.GoalText}>Goals</Text>
          <Text style={styles.SetGoalText}>Lets set your goals</Text>
        </View>
      
          <GoalButton
           title="Set A New Goal"
           onPress={() => setVisible(true)}/>




      </View>
      <SetGoalModaal modalVisible={visible} setModalVisible={setVisible} requestClose={()=>setVisible(false)}/>
    </View>
  );
};

export default SetGoals;

const styles = StyleSheet.create({
  mainView: {
    marginTop: verticalScale(10),
  },

  GoalText: {
    color: 'black',
    fontSize: moderateScale(30),
    fontWeight: '900',
    fontSize: moderateScale(35),
  },
  SetGoalText: {
    color: 'black',
  },
  GoalView: {
    // marginHorizontal:scale(20),
  },
  button: {
    width: '100%',
    paddingHorizontal: scale(25),
    backgroundColor: ButtonColor,
    borderRadius: moderateScale(30),
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: scale(20),
  },
  setNewGoal: {
    flexDirection: 'row',
  },
  absoluteIcon:{
    position:'absolute',
    right:157,
    top:26,
    color:'white'

  }
});
