import * as React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Home from '../screens/home/home';
import Survey from '../screens/survey/survey';
import Teams from '../screens/Teams/teams';
import Homee from '../../assets/images/Homee'
import HomeFilled from '../../assets/images/HomeFilled'
import Goalsss from '../../assets/images/Goalsss'
import GoalsFilled from '../../assets/images/GoalsFilled'
import SurveyFilled from '../../assets/images/SurveyFilled'
import Surveyss from '../../assets/images/Surveyss'
import Teamsss from '../../assets/images/Teamsss'
import TeamFilled from '../../assets/images/TeamFilled'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  blackGoals,
  blackHome,
  blackSurvey,
  blackTeams,
  filledGoals,
  filledHome,
  filledSurvey,
  filledTeam,

} from '../../assets/images/images';
import {Image, StyleSheet, View} from 'react-native';
import PersonalGoals from '../screens/Goals/PersonalGoals';
import {verticalScale} from 'react-native-size-matters';
import { HomeStack } from './DrawerStack';

const TabStack = () => {
  const Tab = createMaterialBottomTabNavigator();

  let initialRoute = 'home';

  return (
    <Tab.Navigator
      barStyle={{backgroundColor: 'white', height: hp('8%')}}
      initialRouteName={initialRoute}
      
      >
        
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => (
            // <Image
            //   source={focused ? filledHome : blackHome}
            //   style={styles.tabImageStyle}
            //   />
            <View style={styles.tabImageStyle}>
              {
                focused?
                <HomeFilled/>:<Homee/>
              }
            </View>
          ),
          tabBarAccessibilityLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Goals"
        component={PersonalGoals}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabImageStyle}>
            {
              focused?
              <GoalsFilled/>:<Goalsss/>
            }
          </View>
          ),
        }}
      />
      <Tab.Screen
        name="Surveys"
        component={Survey}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabImageStyle}>
              {
                focused?
                <SurveyFilled/>:<Surveyss/>
              }
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Teams"
        component={Teams}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabImageStyle}>
              {
                focused?
                <TeamFilled/>:<Teamsss/>
              }
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabImageStyle: {
    // marginBottom:verticalScale(30)
    marginBottom: verticalScale(0),
  },
});

export default TabStack;
