import {StyleSheet, Text, View, Switch, Image} from 'react-native';
import React, {useState} from 'react';
import SettingsHeader from '../../components/Header/SettingsHeader';
import {
  PoppinsBold,
  PoppinsLight,
  PoppinsMedium,
  PoppinsRegular,
  PoppinsSemiBold,
} from '../../../assets/fonts/Fonts';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Setup from '../../components/Setup';
import {
  accessiblity,
  darkmode,
  help,
  lock,
  notification,
  privacy,
  right,
  terms,
} from '../../../assets/images/images';
import {useNavigation} from '@react-navigation/native';
import Footer from '../../components/footer/Footer';

const Settings = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const navigation = useNavigation();
  return (
    <View style={styles.mainView}>
      <View>
        <SettingsHeader />
        <Text style={styles.settings}>Settings</Text>
        <Setup
          title={'Notification'}
          rightImage={right}
          source={notification}
          onPress={() => navigation.navigate('notification')}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: scale(20),
            marginTop: verticalScale(25),
            marginBottom: verticalScale(-5),
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image source={darkmode} />
            <Text style={styles.text}>Dark Mode</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: -10,
            }}>
            <Text style={styles.toggleText}>Off</Text>
            <Switch
              trackColor={{false: '#CDD8DD', true: '#2AB579'}}
              thumbColor={isEnabled ? 'white' : 'white'}
              ios_backgroundColor="#3e3e3e"
              // onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        <Setup title={'Help'} rightImage={right} source={help} />
        <Setup title={'Privacy Policy'} rightImage={right} source={privacy} />
        <Setup title={'Acessiblity'} rightImage={right} source={accessiblity} />
        <Setup
          title={'Terms and Condition'}
          rightImage={right}
          source={terms}
        />
        <Setup
          title={'Change Password'}
          rightImage={right}
          source={lock}
          onPress={() => navigation.navigate('changepassword')}
        />
      </View>
      <View style={styles.footerView}>
        <Text style={styles.powered}>Powered by</Text>
        <Text style={styles.ensemble}>ENSEMBLE</Text>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  settings: {
    color: 'black',
    fontFamily: PoppinsBold,
    fontSize: moderateScale(20),
    marginHorizontal: scale(20),
    marginVertical: verticalScale(20),
  },
  text: {
    color: 'black',
    fontFamily: PoppinsMedium,
    fontSize: moderateScale(16),
    paddingLeft: scale(10),
  },
  mainView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  ensemble: {
    // fontWeight:'bold',
    color: '#8C8C8C',
    fontSize: moderateScale(20),
    fontFamily: PoppinsSemiBold,
  },
  powered: {
    color: '#8C8C8C',
    fontFamily: PoppinsRegular,
    marginBottom: verticalScale(-5),
  },
  footerView: {
    marginHorizontal: scale(20),
    marginVertical: verticalScale(15),
  },
  toggleText: {
    paddingRight: scale(5),
    fontFamily: PoppinsLight,
    fontSize: moderateScale(14),
    color: '#1B1B1B',
  },
});
