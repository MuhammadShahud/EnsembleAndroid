import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Button from '../../components/Button';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {ButtonColor} from '../../../assets/colors/colors';
import Header from '../../components/Header/header';
import {useNavigation} from '@react-navigation/native';
import { checkLogo } from '../../../assets/images/images'
import { PoppinsMedium, PoppinsRegular, PoppinsSemiBold } from '../../../assets/fonts/Fonts';
import BlackCheck from '../../../assets/images/BlackCheck'

const SuccessGoal = () => {
  const navigation = useNavigation();
  const navigate = () => {
    console.log('shahudd');
    navigation.navigate('tab');
  };
  const navigateGoal = () => {
    console.log('asdadasdas');
    navigation.navigate('newGoal');
  };
  return (
    <View style={styles.mainView}>
      <Header />
      <View style={styles.firstView}>
        <Text style={styles.yayy}>YAYY!</Text>
        <Text style={styles.newGoal}>You have set a new goal!</Text>

        {/* <Image style={styles.image} source={checkLogo} /> */}
        <BlackCheck style={styles.image}/>

        <View style={styles.buttonView}>
          <Button
            title="Home"
            onPress={navigate}
            buttonStyle={styles.homeButton}
          />
          <Button
            title="Set Another Goal"
            onPress={navigateGoal}
            buttonStyle={styles.goalButton}
          />
        </View>
      </View>
    </View>
  );
};

export default SuccessGoal;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
  },

  yayy: {
    textAlign: 'center',
    color: ButtonColor,
    fontSize: moderateScale(50),
    // fontWeight: 'bold',
    fontFamily:PoppinsSemiBold,
    fontSize:moderateScale(74)
  },
  newGoal: {
    textAlign: 'center',
    color: 'black',
    fontSize: moderateScale(18),
    fontFamily:PoppinsRegular,
    paddingTop: verticalScale(10),
  },
  homeButton: {
    backgroundColor: ButtonColor,
    width: '85%',
    borderRadius: moderateScale(30),
    fontFamily:PoppinsMedium,
    fontSize:moderateScale(16)
  },
  goalButton: {
    width: '85%',
    color: ButtonColor,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'green',
    marginTop: verticalScale(10),
    borderRadius: moderateScale(30),
    fontFamily:PoppinsMedium,
    fontSize:moderateScale(16)

  },
  buttonView: {
    marginTop: verticalScale(40),
  },
  image: {
    alignSelf: 'center',
    marginVertical: verticalScale(50),
  },
  firstView: {
    marginTop: verticalScale(80),
  },
});
