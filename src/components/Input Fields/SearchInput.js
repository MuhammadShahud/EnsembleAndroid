import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import { seerch } from '../../../assets/images/images';

const InputField = props => {
  return (
    <View style={[styles.input, props.inputStyle]}>
      <TextInput
        value={props.searchPhrase}
        onChangeText={props.setSearchPhrase}
        onFocus={() => {
          props.setClicked(true);
        }}
        placeholderTextColor={props.placeholderTextColor}
        placeholder={props.placeholder}
      />
        {/* <Image source={seerch}/> */}
      {props.clicked? (
          <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
            props.setSearchPhrase("")
            props.setClicked(false)
          }}/>
        ):
      <Image source={seerch} />
      }
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  input: {
    // paddingHorizontal:scale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: 'white',
    marginHorizontal: scale(20),
    borderColor: 'white',
    borderRadius: moderateScale(35),
    paddingHorizontal: scale(20),
    marginTop: verticalScale(10),
    textAlignVertical: 'top',
    // paddingBottom:verticalScale(35),
  },
});
