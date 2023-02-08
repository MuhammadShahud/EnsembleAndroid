import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Survey from '../screens/survey/survey';

import CustomDrawer from '../components/CustomDrawer/customDrawer';
import TabStack from './TabStack';
import {Image} from 'react-native';
import {
  fun,
  goals,
  notiLogo,
  people,
  profDev,
  resource,
  setting,
  survey,
} from '../../assets/images/images';
import EditProfile from '../screens/Goals/EditProfile';
import Notification from '../screens/notification/Notification';
import GoalsDueDate from '../screens/Goals/GoalsDueDate';
import EditGoal from '../screens/Goals/EditGoal';
import Calen from '../screens/Goals/Calender';
import Review from '../screens/survey/Review';
import SurveySuceed from '../screens/survey/SurveySuceed';
import Teams from '../screens/Teams/teams';
import PersonalGoals from '../screens/Goals/PersonalGoals';
import Welcome from '../screens/notification/Welcome';
import UpdateProfile from '../screens/Goals/UpdateProfile';
import People from '../../assets/images/PEOPLE'

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home/home';
import { AuthStack } from './MainStack';


const Drawer = createDrawerNavigator();
const HomeTab = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <HomeTab.Navigator
      initialRouteName="Homee"
      headerMode="none"
      options={{
        animationEnabled: false,
      }}>
      <HomeTab.Screen
        name="Profile"
        component={EditProfile}
        options={{headerShown: false}}
      />
      <HomeTab.Screen
        name="Homee"
        component={Home}
        options={{headerShown: false}}
      />
       <HomeTab.Screen
        name="notification"
        component={Notification}
        options={{headerShown: false}}
      />
       <HomeTab.Screen
        name="updateprofile"
        component={UpdateProfile}
        options={{headerShown: false}}
      />
       <HomeTab.Screen
        name="welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
     
    </HomeTab.Navigator>
  );
};


const DrawerStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      useLegacyImplementation
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        drawerBackgroundColor: 'transparent',
        drawerActiveBackgroundColor: '#F1F1F1',
        drawerActiveTintColor: 'black',
        drawerPosition: 'right',
        drawerInactiveTintColor: '#333',
        drawerStyle: {
          backgroundColor: 'transparent',
        },
        drawerLabelStyle: {
          marginLeft: -10,
          fontFamily: 'Poppins',
          fontSize: 14,
        },
      }}>
      <Drawer.Screen name="home" component={TabStack} />
      {/* <Drawer.Screen name="Profile" component={EditProfile} /> */}
      <Drawer.Screen name="review" component={Review} />
      <Drawer.Screen
        name="surveysuceed"
        component={SurveySuceed}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="People"
        component={Teams}
        options={{
          drawerIcon: ({color}) => (
       <Image source={people} style = {{height:21,width:21}}/>
      // <People/>
          ),
        }}
      />
      <Drawer.Screen name="duedate" component={GoalsDueDate} />
      <Drawer.Screen name="editgoal" component={EditGoal} />
      <Drawer.Screen name="calender" component={Calen} />
      <Drawer.Screen
        name="auth"
        component={AuthStack}
      />
      <Drawer.Screen
        name="goals"
        component={PersonalGoals}
        options={{
          drawerIcon: ({color}) => (
            <Image source={goals} style={{height: 21, width: 21}} />
          ),
        }}
      />
      <Drawer.Screen
        name="survey"
        component={Survey}
        options={{
          drawerIcon: ({color}) => (
            <Image source={survey} style={{height: 21, width: 21}} />
          ),
        }}
      />
      <Drawer.Screen
        name="Resources"
        component={Survey}
        options={{
          drawerIcon: ({color}) => (
            <Image source={resource} style={{height: 21, width: 21}} />
          ),
        }}
      />
      <Drawer.Screen
        name="Fun stuff"
        component={Survey}
        options={{
          drawerIcon: ({color}) => (
            <Image source={fun} style={{height: 21, width: 21}} />
          ),
        }}
      />
      <Drawer.Screen
        name="Professional Development"
        component={Survey}
        options={{
          drawerIcon: ({color}) => (
            <Image source={profDev} style={{height: 21, width: 21}} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Survey}
        options={{
          drawerIcon: ({color}) => (
            <Image source={setting} style={{height: 21, width: 21}} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};




export default DrawerStack;
