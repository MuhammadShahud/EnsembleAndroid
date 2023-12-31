import {View, Text, Image, ScrollView} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {COMPANY, USER} from '../../redux/Reducers/AuthReducer';
import {style} from './homeStyle';
import Header from '../../components/Header/header';
import {notiLogo} from '../../../assets/images/images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import HomeBox from '../../components/HomeBox/homeBox';
import {
  GetCompany,
  GetGoals,
  GetNoti,
  GetSurveys,
  GetTeam,
} from '../../redux/Actions/AuthAction';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';
import axios from 'axios';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'


export default function Home() {
  const userData = useSelector(USER);
  const company = useSelector(COMPANY);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYWh1ZEBwbHVtdHJlZWdyb3VwLm5ldCIsImlhdCI6MTY2NDU2NzExNSwiZXhwIjoxNjk2MTAzMTE1fQ.bG940Pi5-Tf6CX4AMxLSZ2vLHZJr3XfgkBsIRvtkNeA';

  const sendFcmToken = async () => {
    try {
      await messaging().registerDeviceForRemoteMessages();
      const token = await messaging().getToken();
      const obj = {
        token: token,
        companyId: company.id,
      };

      await axios
        .patch(
          `https://ensemble-backendd.herokuapp.com/api/noti/token/${userData.id}`,
          obj,
        )
        .then(r => {
          console.log('workingggggggg', r);
        });
    } catch (err) {
      //Do nothing
      console.log('errrorrrr', err);
      return;
    }
  };

  useEffect(() => {
    sendFcmToken();
  }, []);

  useEffect(() => {
    // Assume a message-notification contains a "type" property in the data payload of the screen to open

    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.data.type,
      );
      remoteMessage.data.type === 'Surveys' ? dispatch(GetSurveys()) : null;

      remoteMessage.data.type
        ? navigation.navigate(remoteMessage.data.type)
        : null;
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
          remoteMessage.data.type
            ? navigation.navigate(remoteMessage.data.type)
            : null;
        }
      });
  }, []);

  useFocusEffect(
    useCallback(() => {
      dispatch(GetGoals(token, userData.id));
      dispatch(GetCompany(userData?.companyId));
      dispatch(GetTeam(userData?.teamId));
      dispatch(GetSurveys(userData.companyId));
      dispatch(GetNoti(company.id));
    }, []),
  );

  return (
    <View style={style.container}>
      <Header source={notiLogo} title={company.companyName} />

      <ScrollView style={style.innerView}>
        <View>
          <View style={style.hey}>
            <View>
              <Text style={style.morning}>Morning,</Text>
              <Text style={style.name}>{userData?.name}</Text>
            </View>
            <Image
              source={{
                uri: `https://ensemble-backendd.herokuapp.com/${userData?.profilePic}`,
              }}
              style={{borderRadius: moderateScale(32), height: verticalScale(64), width: scale(64)}}
            />
          </View>
          <Text style={style.position}>
            {userData?.jobTitle} | {company.companyName}{' '}
          </Text>
        </View>

        <View style={{height: hp('3%')}}></View>

        <View>
          <Text style={style.overview}>Overview</Text>
          <View style={{height: hp('3%')}}></View>
          <HomeBox
            navigate="Teams"
            // image={findPeople}
            text1="Find your collegues!"
            text2="Search your colleagues and get connected now "
            firstImage="aa"
          />
          <View style={{height: hp('3%')}}></View>

          <HomeBox
            navigate="Goals"
            // image={medal}
            text1="Set your Goals"
            text2="Create a goal from scratch or choose 
            goals from the templates"
            secondImage="qqq"
          />

          <View style={{height: hp('3%')}}></View>

          <HomeBox
            navigate="Surveys"
            thirdImage="sdadfd"
            text1="Start your Pulse survey!"
            text2="Answer these pulse survey questions anonymously"
            color={company.brandColor}
          />
        </View>
        
      </ScrollView>
    
    </View>
  );
}
