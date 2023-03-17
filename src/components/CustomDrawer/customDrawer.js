import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {styles} from '../../styles/GeneralStyle';
import {style} from '../Header/headerStyle';
import Survey from '../../../assets/images/Survey';
import Resources from '../../../assets/images/resources';
import Plugin from '../../../assets/images/plugin';
import BriefCase from '../../../assets/images/briefcase';
import Setting from '../../../assets/images/setting';
import Logout from '../../../assets/images/logout';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {COMPANY, USER} from '../../redux/Reducers/AuthReducer';
import PEOPLE from '../../../assets/images/PEOPLE';
import DrawerGoal from '../../../assets/images/DrawerGoal';
import {
  PoppinsBold,
  PoppinsRegular,
  PoppinsSemiBold,
} from '../../../assets/fonts/Fonts';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Login} from '../../redux/Actions/AuthAction';

const CustomDrawer = props => {
  const company = useSelector(COMPANY);
  const dispatch = useDispatch();

  const userData = useSelector(USER);
  const navigation = useNavigation();
  const filteredProps = {
    ...props,
    state: {
      ...props.state,
      routeNames: props.state.routeNames.filter(
        // To hide single option
        routeName => routeName !== 'Home',
      ),
      routes: props.state.routes.filter(route => route.name !== 'Home'),
    },
  };

  const Logoutt =async()=> {
    console.log("logouuttt");
    await AsyncStorage.removeItem('user');
    dispatch(Login({}));
    navigation.navigate('Login');
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F1F1F1',
        padding: wp('4%'),
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
      }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#F1F1F1'}}>
        <View style={{height: hp('4%')}}></View>
        <View
          style={[
            style.halfHeader,
            {justifyContent: 'flex-start', paddingLeft: wp('4%')},
          ]}>
          {/* <Image
            style={{marginRight: wp('3%')}}
            resizeMode="contain"
            source={drawerPT}
          /> */}
          <Image
            source={{
              uri: `https://ensemble-backendd.herokuapp.com/${company?.profilePic}`,
            }}
            style={{height: 40, width: 46, marginRight: wp('3%')}}
            resizeMode="contain"
          />
          <Text style={[styles.large, style.companyName]}>
            {company.companyName}{' '}
          </Text>
        </View>

        <View style={{height: hp('4%')}}></View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            paddingLeft: wp('4%'),
          }}>
          <Image
            source={{
              uri: `https://ensemble-backendd.herokuapp.com/${userData?.profilePic}`,
            }}
            style={{borderRadius: 23, marginBottom: 10, height: 50, width: 50}}
          />
          <TouchableOpacity
            style={{paddingLeft: wp('3%')}}
            onPress={() => navigation.navigate('Profile', {userData})}>
            <Text
              style={{
                color: '#1B1B1B',
                fontFamily: 'Poppins',
                fontWeight: 'bold',
                fontSize: wp('4.5%'),
              }}>
              {userData?.name}
            </Text>
            <Text
              style={{
                color: '#1B1B1B',
                fontFamily: 'Poppins',
                fontWeight: '100',
                fontSize: wp('3%'),
              }}>
              View your profile
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: '#F1F1F1',
            paddingTop: 10,
          }}></View>

        <View>
          <TouchableOpacity
            style={style.drawerTabs}
            onPress={() => navigation.navigate('Teams')}>
            <View style={style.tabImage}>
              {/* <Image source={blackPeople}  /> */}
              <PEOPLE />
            </View>
            <Text style={style.tabText}>People</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={style.drawerTabs}
            onPress={() => navigation.navigate('Goals')}>
            <View style={style.tabImage}>
              {/* <Image source={drawerGoals}  /> */}
              <DrawerGoal />
            </View>
            <Text style={style.tabText}>Goals</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={style.drawerTabs}
            onPress={() => navigation.navigate('Surveys')}>
            <View style={style.tabImage}>
              {/* <Image source={drawerSurvey}  /> */}
              <Survey />
            </View>
            <Text style={style.tabText}>Survey</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.drawerTabs}>
            <View style={style.tabImage}>
              {/* <Image source={blackResources}  /> */}
              <Resources />
            </View>
            <Text style={[style.tabText,style.greyOut]}>Resources</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.drawerTabs}>
            <View style={style.tabImage}>
              {/* <Image source={blackFun}  /> */}
              <Plugin />
            </View>
            <Text style={[style.tabText,style.greyOut]}>Fun stuff</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.drawerTabs}>
            <View style={style.tabImage}>
              {/* <Image source={blackBriefCase}  /> */}
              <BriefCase />
            </View>
            <View style={style.PDView}>
            <Text style={[style.tabText,style.greyOut]}>Professional Development</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={style.drawerTabs}
            onPress={() => navigation.navigate('Settings')}>
            <View style={style.tabImage}>
              {/* <Image source={blackSetting}  /> */}
              <Setting />
            </View>
            <Text style={style.tabText}>Settings</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
      <View style={{padding: wp('4%')}}>
        <TouchableOpacity
          onPress={()=>Logoutt()}
          style={{
            paddingVertical: wp('4%'),
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: moderateScale(40),
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {/* <Image source={blackLogout} /> */}
            <Logout />
            <Text
              style={{
                fontSize: moderateScale(13),
                marginLeft: scale(5),
                color: '#1B1B1B',
                fontFamily: PoppinsBold,
              }}>
              Logout
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            paddingVertical: verticalScale(15),
          }}>
          <Text
            style={{
              fontSize: moderateScale(12),
              fontFamily: PoppinsRegular,
              color: '#767676',
            }}>
            Powered by
          </Text>
          <Text
            style={{
              fontSize: moderateScale(16),
              fontFamily: PoppinsSemiBold,
              color: '#767676',
            }}>
            Ensemble{' '}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CustomDrawer;
