import {StyleSheet, Text, View, Image} from 'react-native';
import React, {forwardRef, useState} from 'react';
import Header from '../../components/Header/header';
import {halfloading, sketch} from '../../../assets/images/images';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {InterBold, InterRegular} from '../../../assets/fonts/Fonts';
import Footer from '../../components/footer/Footer';

import {useNavigation} from '@react-navigation/native';
import {Checkbox} from 'react-native-paper';
import {ButtonColor} from '../../../assets/colors/colors';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useDispatch, useSelector} from 'react-redux';
import {PatchSurveys} from '../../redux/Actions/AuthAction';
import Sketch from '../../../assets/images/Sketch';
import { USER } from '../../redux/Reducers/AuthReducer';

const Review = props => {
  const [checked, setChecked] = React.useState(0);
  const survey = props.route.params.survey;
  const dispatch = useDispatch();
  const user = useSelector(USER)
  const navigation = useNavigation();
  const forward = () => {
    const response = survey.response;
    response.push(checked);
    const obj ={
      user:{
        id: user.id
      },
      update:{
        response:response
      }
    }
    dispatch(
      PatchSurveys(obj, navigation, 'surveysuceed', survey.id),
    );
    // navigation.navigate('surveysuceed')
  };

  return (
    <View style={styles.mainView}>
      <View>
        <Header />
        <View style={styles.sketch}>
          {/* <Image source={sketch} /> */}
          <Sketch />
        </View>
        <Text style={styles.text}>{survey.question}</Text>

        <View style={styles.checkboxView}>
          <View>
            <BouncyCheckbox
              isChecked={checked === 1 ? true : false}
              disableBuiltInState={true}
              style={styles.checkBox}
              size={25}
              fillColor="#2AB679"
              innerIconStyle={{borderWidth: 2, borderColor: '#808080'}}
              onPress={() => {
                checked === 1 ? setChecked(0) : setChecked(1);
              }}
            />

            <Text style={styles.text1}>Strongly </Text>
            <Text style={styles.text1}>Disagree </Text>
          </View>
          <View>
            <BouncyCheckbox
              isChecked={checked === 2 ? true : false}
              disableBuiltInState={true}
              style={styles.checkBox}
              size={25}
              fillColor="#2AB679"
              innerIconStyle={{borderWidth: 2, borderColor: '#808080'}}
              onPress={() => {
                checked === 2 ? setChecked(0) : setChecked(2);
              }}
            />
            <Text style={styles.text1}>Disagree </Text>
          </View>
          <View>
            <BouncyCheckbox
              isChecked={checked === 3 ? true : false}
              disableBuiltInState={true}
              style={styles.checkBox}
              size={25}
              fillColor="#2AB679"
              innerIconStyle={{borderWidth: 2, borderColor: '#808080'}}
              onPress={() => {
                checked === 3 ? setChecked(0) : setChecked(3);
              }}
            />
            <Text style={styles.text1}>Neutral </Text>
          </View>

          <View>
            <BouncyCheckbox
              isChecked={checked === 4 ? true : false}
              disableBuiltInState={true}
              style={styles.checkBox}
              size={25}
              fillColor="#2AB679"
              innerIconStyle={{borderWidth: 2, borderColor: '#808080'}}
              onPress={() => {
                checked === 4 ? setChecked(0) : setChecked(4);
              }}
            />
            <Text style={styles.text1}>Agree </Text>
          </View>

          <View>
            <BouncyCheckbox
              isChecked={checked === 5 ? true : false}
              disableBuiltInState={true}
              style={styles.checkBox}
              size={25}
              fillColor="#2AB679"
              innerIconStyle={{borderWidth: 2, borderColor: '#808080'}}
              onPress={() => {
                checked === 5 ? setChecked(0) : setChecked(5);
              }}
            />
            <Text style={styles.text1}>Strongly </Text>
            <Text style={styles.text1}>Agree </Text>
          </View>
        </View>
      </View>
      <View>
        <Footer
          iconName={'chevron-right'}
          powered={{color: 'black'}}
          ensemble={{color: 'black'}}
          onPress={() => forward()}
        />
      </View>
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  sketch: {
    alignSelf: 'center',
    marginVertical: verticalScale(60),
  },
  text: {
    fontFamily: InterBold,
    color: 'black',
    marginHorizontal: scale(20),
    fontSize: moderateScale(24),
    marginTop: verticalScale(15),
  },
  loadingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: scale(20),
  },
  loadingText: {
    color: '#616161',
    fontFamily: InterRegular,
    fontSize: moderateScale(16),
  },
  checkboxView: {
    flexDirection: 'row',
    marginHorizontal: scale(20),
    justifyContent: 'space-between',
    marginVertical: verticalScale(25),
  },
  text1: {
    fontFamily: InterRegular,
    color: '#616161',
  },
  checkBox: {
    marginBottom: verticalScale(10),
    alignSelf: 'center',
  },

  // container: {
  //     flex: 1,
  //     alignItems: "center",
  //     justifyContent: "center",
  //   },
  //   checkboxContainer: {
  //     flexDirection: "row",
  //     marginBottom: 20,
  //   },
  //   checkbox: {
  //     alignSelf: "center",
  //   },
  //   label: {
  //     margin: 8,
  //   },
});
