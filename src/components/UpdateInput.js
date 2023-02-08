import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {PoppinsSemiBold} from '../../assets/fonts/Fonts';

const UpdateInput = props => {


  return (
    <View style={styles.inputView}>
      <Text style={styles.text}>{props.title}</Text>
        <TextInput
          multiline={true}
          onChangeText={props.onChangeText}
          style={styles.inputField}
          value={props.placeholder}
        />
      {props.line ? null : (
        <View
          style={{
            width: '200%',
            height: '1%',
            backgroundColor: '#E0E0E0',
            marginTop: verticalScale(0),
          }}></View>
      )}
    </View>
  );
};

export default UpdateInput;

const styles = StyleSheet.create({


    inputFieldView: {
        // backgroundColor: 'white',
        // flexDirection: 'row',
        // alignItems: 'center',
        // marginHorizontal: scale(20),
        // justifyContent: 'space-between',
        // borderRadius: moderateScale(20),
        // paddingHorizontal: scale(20),
        // marginTop: verticalScale(3),
        // marginBottom: verticalScale(10)
    },
    text: {
        color: 'black',
        fontSize: moderateScale(18),
        fontFamily: PoppinsSemiBold,
        marginHorizontal: scale(20)
    },
    inputView: {
        marginTop: verticalScale(30),
        flex:1



    },
    inputField:{
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: scale(20),
        justifyContent: 'space-between',
        borderRadius: moderateScale(20),
        paddingHorizontal: scale(20),
        marginTop: verticalScale(3),
        marginBottom: verticalScale(10)
    }




})