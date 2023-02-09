import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {add, edit} from '../../../assets/images/images';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {ButtonColor} from '../../../assets/colors/colors';
import {PoppinsRegular, PoppinsSemiBold} from '../../../assets/fonts/Fonts';
import Add from '../../../assets/images/addd';
import {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Cross from '../../../assets/images/cross';

const EditButtons = props => {
  const [other, setOther] = useState();
  const [show, setShow] = useState(false);
  const array = props.properties;

  const inputBox = () => {
    setShow(!show);
  };
  const inputPlusIcon = () => {
   if(other){
    console.log("work");
     array.push(other);
     if (props.setSkills) {
        console.log('SssSs');
        props.setSkills(array);
      }
      if (props.setEnjoy) {
        console.log('SssSs');
  
        props.setEnjoy(array);
      }
   }
   setOther()
   setShow(!show);

  };
  console.log('props.properties', array);

  const deleteOne = v => {
    console.log('working');
    const arr = array.filter((e)=>e !== v)
    console.log('arr', array);
    if (props.setSkills) {
      console.log('SssSs');
      props.setSkills(arr);
    }
    if (props.setEnjoy) {
      console.log('SssSs');

      props.setEnjoy(arr);
    }
  };

  return (
    <View style={{flex: 1}}>
      <View style={{marginTop: verticalScale(20), marginHorizontal: scale(20)}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: verticalScale(10),
            alignItems: 'center',
          }}>
          <Text style={styles.title}>{props.title}</Text>
          <Image source={props.addImage} />
        </View>

        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {array.map((v, i) => (
            <View style={styles.button}>
              <Text style={styles.text}>{v}</Text>

              {props.cross ? (
                <TouchableOpacity
                  style={styles.crossStyle}
                  onPress={() => deleteOne(v)}>
                  <Cross />
                </TouchableOpacity>
              ) : null}
            </View>
          ))}

          {props.addIcon && !show ? (
            <TouchableOpacity
              onPress={inputBox}
              style={{justifyContent: 'center'}}>
              <Add />
            </TouchableOpacity>
          ) : null}
        </View>

        {show ? (
          props.input ? (
            <View style={styles.input}>
              <TextInput
                placeholderTextColor="#414141"
                value={other}
                onChangeText={setOther}
                style={[styles.input, props.inputStyle]}
                placeholder="Write other option here.."
                multiline={true}
              />
              <TouchableOpacity
                style={styles.circleView}
                onPress={inputPlusIcon}>
                <Entypo name="plus" size={20} color="white" />
              </TouchableOpacity>
            </View>
          ) : null
        ) : null}
      </View>
      <View
        style={{
          width: '200%',
          height: '1%',
          backgroundColor: '#E0E0E0',
          marginTop: verticalScale(25),
        }}></View>
    </View>
  );
};

export default EditButtons;

const styles = StyleSheet.create({
  button: {
    backgroundColor: ButtonColor,
    marginVertical: verticalScale(5),
    paddingHorizontal: scale(15),
    borderRadius: moderateScale(50),
    paddingVertical: verticalScale(10),
    marginRight: verticalScale(10),
    position: 'relative',
    // width:'15%',
  },
  text: {
    color: 'white',
    fontFamily: PoppinsRegular,
  },
  title: {
    color: 'black',
    fontSize: moderateScale(20),
    fontFamily: PoppinsSemiBold,
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'black',
    textAlignVertical: 'center',
    backgroundColor: 'white',
    // marginHorizontal: scale(20),
    paddingHorizontal: scale(10),
    // marginTop:verticalScale(5),
    borderRadius: moderateScale(25),
    marginVertical: verticalScale(3),
    // width:'75%'
  },
  circleView: {
    backgroundColor: '#2AB679',
    borderRadius: moderateScale(20),
    marginRight: scale(10),
    height: verticalScale(30),
    width: scale(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  crossStyle: {
    position: 'absolute',
    top: verticalScale(-3),
    right: scale(-3),
  },
});
