import {View, Text, Image} from 'react-native';
import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {USER} from '../../redux/Reducers/AuthReducer';
import {style} from './homeStyle';
import {styles} from '../../styles/GeneralStyle';
import Header from '../../components/Header/header';
import {
  pp,
  task,
  medal,
  findPeople,
  notiLogo,
} from '../../../assets/images/images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import HomeBox from '../../components/HomeBox/homeBox';
import {GetCompany, GetGoals, GetTeam} from '../../redux/Actions/AuthAction';
import {useFocusEffect} from '@react-navigation/native';

export default function Home() {
  const userData = useSelector(USER);
  const dispatch = useDispatch();
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYWh1ZEBwbHVtdHJlZWdyb3VwLm5ldCIsImlhdCI6MTY2NDU2NzExNSwiZXhwIjoxNjk2MTAzMTE1fQ.bG940Pi5-Tf6CX4AMxLSZ2vLHZJr3XfgkBsIRvtkNeA';

  useFocusEffect(
    useCallback(() => {
       dispatch(GetGoals(token));
       dispatch(GetCompany(userData.companyId));
       dispatch(GetTeam(userData.teamId));

    }, []),
  );

  return (
    <View style={style.container}>
      <Header source={notiLogo} />

      <View style={style.innerView}>
        <View>
          <View style={style.hey}>
            <View>
              <Text style={style.morning}>Morning,</Text>
              <Text style={style.name}>{userData.name}</Text>
            </View>
            <Image
              source={{
                uri: `https://onboard-backendd.herokuapp.com/${userData.profilePic}`,
              }}
              style={{borderRadius: 32,height:64, width:64}}

            />
          </View>
          <View style={{height: hp('1%')}}></View>
          <Text>{userData.questions.jobTitle} | The Plum Tree Group </Text>
        </View>

        <View style={{height: hp('3%')}}></View>

        <View>
          <Text style={style.overview}>Overview</Text>
          <View style={{height: hp('2%')}}></View>
          <HomeBox
            navigate="teams"
            image={findPeople}
            text1="Find your collegues!"
            text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
          />
          <View style={{height: hp('2%')}}></View>

          <HomeBox
            navigate="goals"
            image={medal}
            text1="Set your Goals"
            text2="Create a goal from scratch or choose goals from the templates"
          />

          <View style={{height: hp('2%')}}></View>

          <HomeBox
            navigate="surveys"
            image={task}
            text1="Start your Pulse survey!"
            text2="Lorem Ipsum dolar sit Lorem Ipsum"
            color="#2AB679"
          />
        </View>
      </View>
    </View>
  );
}
