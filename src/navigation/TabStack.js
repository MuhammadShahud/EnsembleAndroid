import * as React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Home from '../screens/home/home';
import Goals from '../screens/Goals/goals';
import Survey from '../screens/survey/survey';
import Teams from '../screens/Teams/teams';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  greenHome,
  setting,
  tabGoal,
  tabSurvey,
  tabTeam,
} from '../../assets/images/images';
import {Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import NewGoal from '../screens/Goals/NewGoal';
import PersonalGoals from '../screens/Goals/PersonalGoals';
import {GoalStack} from './MainStack';
import Settings from '../screens/settings/Settings';
import Review from '../screens/survey/Review';
import SurveySuceed from '../screens/survey/SurveySuceed';

const TabStack = () => {
  const Tab = createMaterialBottomTabNavigator();

  let initialRoute = 'home';

  return (
    <Tab.Navigator
      barStyle={{backgroundColor: '#000000', height: hp('7%')}}
      initialRouteName={initialRoute}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image source={greenHome} style={styles.tabImageStyle} />
          ),
        }}
      />
      <Tab.Screen
        name="goals"
        component={PersonalGoals}
        options={{
          tabBarIcon: ({focused}) => (
            <Image source={tabGoal} style={styles.tabImageStyle} />
          ),
        }}
      />
      <Tab.Screen
        name="surveys"
        component={Survey}
        options={{
          tabBarIcon: ({focused}) => (
            <Image source={tabSurvey} style={styles.tabImageStyle} />
          ),
        }}
      />
     
    
   
      <Tab.Screen
        name="teams"
        component={Teams}
        options={{
          tabBarIcon: ({focused}) => (
            <Image source={tabTeam} style={styles.tabImageStyle} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabImageStyle: {},
});

export default TabStack;
