import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import QuestionHeader from '../../components/Header/QuestionHeader';
import React, {useCallback, useEffect, useState} from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import InputField from '../../components/Input Fields/InputField';
import Footer from '../../components/footer/Footer';
import SelectList from 'react-native-dropdown-select-list';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import Questions from '../../components/Question Text/Questions';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useRef} from 'react';
import Button from '../../components/Button';
import {ButtonColor} from '../../../assets/colors/colors';
import Dashes from '../../components/Question Text/dashes';

const Name = () => {
  const navigation = useNavigation();
  const refRBSheet = useRef();
  const height = Dimensions.get('screen').height;

  useEffect(() => {
    refRBSheet.current.open();
  }, []);

  const [selected, setSelected] = React.useState('');

  const data = [
    //   {key:'1',value:'Select One'},
    {key: '2', value: 'he/him/his'},
    {key: '3', value: 'she/her/hers'},
    {key: '4', value: 'they/them/their'},
  ];

  return (
    <View style={styles.mainView}>
      <QuestionHeader />
      <Dashes color={1} />
      <View style={{justifyContent:'center',height:'75%'}}>
        {/* <Image source={first} style={{alignSelf:'center'}}/> */}
        <Questions title={'What is your preferred name?'} />
        <InputField
          placeholderTextColor={'#414141'}
          placeholder={' "Michael Scott" '}
          inputStyle={styles.input}
        />
        <Text style={styles.pronounText}>What are your pronouns?</Text>
        <View style={styles.dropDownView}>
          <SelectList
            style={styles.inside}
            //   onSelect={() => alert(selected)}
            setSelected={setSelected}
            data={data}
            arrowicon={
              <Feather name="chevron-down" size={15} color={'black'} />
            }
            searchicon={<FontAwesome name="search" size={12} color={'black'} />}
            search={false}
            boxStyles={styles.boxStyle} //override default styles
            defaultOption={{value: 'Select One'}} //default selected option
            dropdownStyles={styles.dropdownStyles}
            dropdownTextStyles={styles.dropdownTextStyles}
            dropdownItemStyles={styles.dropdownItemStyles}
          />
        </View>
      </View>
      {/* <DropDown/> */}

      <View>
        <Footer
          powered={{color: 'black'}}
          ensemble={{color: 'black'}}
          iconName={'chevron-right'}
          onPress={() => navigation.navigate('jobtitle')}
        />
      </View>

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
          draggableIcon: {
            backgroundColor: ButtonColor,
            width: '40%',
            marginTop: verticalScale(15),
          },
          container: {
            backgroundColor: 'white',
            borderTopLeftRadius: moderateScale(45),
            borderTopRightRadius: moderateScale(45),
            paddingHorizontal: scale(20),
            zIndex: 1,
          },
        }}
        height={height * 0.35}>
        <View style={styles.bottomsheet}>
          <Text style={styles.georgeText}>Let's get you</Text>
          <Text style={styles.georgeText1}>On Board!</Text>
          <Text style={styles.textBoard}>
            Ten super fun questions that will tell us more about you ✌️
          </Text>

          <Button
            title={'Begin'}
            buttonStyle={styles.button}
            onPress={() => refRBSheet.current.close()}
          />
        </View>
      </RBSheet>
    </View>
  );
};

export default Name;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  text: {
    color: 'black',
    fontSize: moderateScale(40),
    marginHorizontal: scale(20),
    fontWeight: 'bold',
  },
  input: {
    paddingBottom: verticalScale(10),
    paddingTop: verticalScale(10),
    marginHorizontal: scale(20),
    color: 'black',
    textAlignVertical: 'center',
  },
  pronounText: {
    color: 'black',
    marginHorizontal: scale(20),
    marginTop: verticalScale(25),
    fontSize: moderateScale(20),
    fontWeight: '700',
  },
  boxStyle: {
    backgroundColor: 'white',
    // marginLeft:scale(20),
    // marginRight:scale(80),
    marginVertical: verticalScale(10),
    placeholderTextColor: 'black',
    borderColor: 'white',
    borderRadius: moderateScale(50),
  },
  dropDownView: {
    marginLeft: scale(20),
    marginRight: scale(80),
    borderColor: 'white',
  },
  dropdownStyles: {
    backgroundColor: 'white',
    color: 'black',
    borderColor: 'white',
    marginTop: 0,
  },
  dropdownTextStyles: {
    color: 'black',
  },
  dropdownItemStyles: {
    paddingVertical: verticalScale(10),
  },
  bottomsheet: {
    marginHorizontal: scale(5),
  },
  georgeText: {
    marginTop: verticalScale(10),
    fontSize: moderateScale(40),
    marginBottom: verticalScale(-10),
    color: 'black',
    fontWeight: 'bold',
  },
  georgeText1: {
    fontSize: moderateScale(40),
    color: 'black',
    fontWeight: 'bold',
  },
  textBoard: {
    color: 'black',
    fontSize: moderateScale(15),
    lineHeight: verticalScale(20),
    marginTop: verticalScale(15),
    marginBottom: verticalScale(10),
  },
  button: {
    backgroundColor: ButtonColor,
    borderRadius: moderateScale(30),
  },
});
