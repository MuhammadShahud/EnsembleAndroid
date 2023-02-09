import React, {useEffect} from 'react';
import {View} from 'react-native';
import Store from './redux/store';
import Router from './navigation/Router';
import {Provider} from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import messaging from '@react-native-firebase/messaging';
import axios from 'axios';

const App = () => {

  const tokenId = '638e8e677bb5e473f75d062c';
  const sendFcmToken = async () => {
    
    try {
      await messaging().registerDeviceForRemoteMessages();
      const token = await messaging().getToken();
      console.log('workingggg');
      await axios.patch(
        `https://onboard-backendd.herokuapp.com/api/noti/token/${tokenId}`,
        {token},
      );
    } catch (err) {
      //Do nothing
      console.log("errror",err.response);
      return;
    }
  };

  useEffect(() => {
    sendFcmToken();
    
  }, []);

  return (
    <Provider store={Store}>
      <View style={{width: '100%', height: '100%', zIndex: -1}}>
        <Router />
        <FlashMessage
          canRegisterAsDefault={true}
          floating={false}
          position="top"
          style={{zIndex: 1000}}
        />
      </View>
    </Provider>
  );
};

export default App;
