import React from 'react';
import Splash from '../screens/splash/Splash';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/login/login';
import DrawerStack from './DrawerStack';
import TabStack from './TabStack';
import VerifyEmail from '../screens/login/VerifyEmail';
import VerificationCode from '../screens/login/VerificationCode';
import ResetPassword from '../screens/login/ResetPassword';
import NewGoal from '../screens/Goals/NewGoal';
import SuccessGoal from '../screens/Goals/SuccessGoal';
import PersonalGoals from '../screens/Goals/PersonalGoals';
import Calen from '../screens/Goals/Calender';
import Footer from '../components/footer/Footer';
import DiscoverGoals from '../screens/Goals/DiscoverGoals';
import GoalsDueDate from '../screens/Goals/GoalsDueDate';
import EditGoal from '../screens/Goals/EditGoal';
import Name from '../screens/InitialQuestion/Name';
import JobTitle from '../screens/InitialQuestion/JobTitle';
import DescribeYourself from '../screens/InitialQuestion/DescribeYourself';
import Skills from '../screens/InitialQuestion/Skills';
import EnjoyDoing from '../screens/InitialQuestion/EnjoyDoing';
import DescribeYourJob from '../screens/InitialQuestion/DescribeYourJob';
import Achievements from '../screens/InitialQuestion/Achievements';
import About from '../screens/InitialQuestion/About';
import Camera from '../screens/InitialQuestion/Camera';
import RetakePhoto from '../screens/InitialQuestion/RetakePhoto';
import EditProfile from '../screens/Goals/EditProfile';
import Review from '../screens/survey/Review';
import Settings from '../screens/settings/Settings';
import SurveySuceed from '../screens/survey/SurveySuceed';
import ChangePassword from '../screens/settings/ChangePassword';
import Notification from '../screens/notification/Notification';


const Main = createNativeStackNavigator();
const Auth = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Main.Navigator
      initialRouteName="auth"
      headerMode="none"
      options={{
        animationEnabled: false,
      }}>
      <Main.Screen
        name="auth"
        component={AuthStack}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="tab"
        component={TabStack}
        options={{headerShown: false}}
        
      />
      <Main.Screen
        name="drawer"
        component={DrawerStack}
        options={{headerShown: false}}
      />
      
      <Main.Screen
        name="name"
        component={Name}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="describeyourself"
        component={DescribeYourself}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="achievements"
        component={Achievements}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="describeyourjob"
        component={DescribeYourJob}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="jobtitle"
        component={JobTitle}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="enjoy"
        component={EnjoyDoing}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="skills"
        component={Skills}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="camera"
        component={Camera}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="about"
        component={About}
        options={{headerShown: false}}
      />

       <Main.Screen
        name="newGoal"
        component={NewGoal}
        options={{headerShown: false}}
      />
       <Main.Screen
        name="retake"
        component={RetakePhoto}
        options={{headerShown: false}}
      />
       <Main.Screen
        name="personalgoals"
        component={PersonalGoals}
        options={{headerShown: false}}
      />
       <Main.Screen
        name="successGoal"
        component={SuccessGoal}
        options={{headerShown: false}}
      />
       {/* <Main.Screen
        name="calender"
        component={Calen}
        options={{headerShown: false}}
      /> */}
       <Main.Screen
        name="footer"
        component={Footer}
        options={{headerShown: false}}
      />
       <Main.Screen
        name="discovergoals"
        component={DiscoverGoals}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="editprofile"
        component={EditProfile}
        options={{ headerShown: false }}
      />
       {/* <Main.Screen
        name="duedate"
        component={GoalsDueDate}
        options={{headerShown: false}}
      /> */}
       {/* <Main.Screen
        name="editgoal"
        component={EditGoal}
        options={{headerShown: false}}
      /> */}
       {/* <Main.Screen
        name="review"
        component={Review}
        options={{headerShown: false}}
      /> */}
      <Main.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      />
       <Main.Screen
        name="changepassword"
        component={ChangePassword}
        options={{headerShown: false}}
      />
        {/* <Main.Screen
        name="surveysuceed"
        component={SurveySuceed}
        options={{headerShown: false}}
      /> */}
      {/* <Main.Screen
        name="notification"
        component={Notification}
        options={{headerShown: false}}
      /> */}
    </Main.Navigator>
  );
};

export const AuthStack = () => {
  return (
    <Auth.Navigator
      initialRouteName="splash"
      headerMode="none"
      options={{
        animationEnabled: false,
      }}>
      <Auth.Screen
        name="splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Auth.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
      <Auth.Screen
        name="verifyemail"
        component={VerifyEmail}
        options={{headerShown: false}}
      />
      <Auth.Screen
        name="verificationcode"
        component={VerificationCode}
        options={{headerShown: false}}
      />
      <Auth.Screen
        name="resetpassword"
        component={ResetPassword}
        options={{headerShown: false}}
      />
    </Auth.Navigator>
  );
};


export default MainStack;
