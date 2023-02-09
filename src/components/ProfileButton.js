import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ButtonColor} from '../../assets/colors/colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import { InterSemiBold } from '../../assets/fonts/Fonts';

const ProfileButton = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.buttonView}
      onPress={() =>
        navigation.navigate('Profile', {userData: props.user})
      }>
      <Text
        style={{
          color: ButtonColor,
          fontSize: moderateScale(10),
          fontFamily:InterSemiBold
        }}>
        View Profile
      </Text>
      <Entypo name="chevron-small-right" size={15} color={ButtonColor} />
    </TouchableOpacity>
  );
};

export default ProfileButton;

const styles = StyleSheet.create({
  buttonView: {
    flex: 1,
    borderWidth: 1,
    borderColor: ButtonColor,
    // alignItems:'center',
    paddingVertical: verticalScale(6),
    // paddingHorizontal:scale(10),
    borderRadius: moderateScale(20),
    flexDirection: 'row',
    justifyContent: 'center', // fontSize:moderateScale(10),
    // width:'100%',
    // backgroundColor:'blue',
  },
});
