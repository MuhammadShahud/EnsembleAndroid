import {Image, Text, View, FlatList} from 'react-native';
import {
  ensembleLogo,
  goalLogo,
  onBoardLogo,
  ship,
} from '../../../assets/images/images';
import {boat} from '../../../assets/images/images';
import PrimaryButton from '../../components/PrimaryButton';
import {styles} from './splashStyle';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Lottie from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Goals from '../../../assets/images/goals';
import Feedback from '../../../assets/images/feedbackk';
import Connect from '../../../assets/images/connect';
import {useDispatch} from 'react-redux';
import {GetUser, LoginFunction} from '../../redux/Actions/AuthAction';

const Splash = () => {
  const splash = [
    {
      imageURL: 'abc',
      title: 'Set Your Goals',
      text: 'Set your monthly goal and grow',
      text1: 'with company',
    },
    {
      imageURL: 'xyz',
      title: 'Share Feedback',
      text: 'Share your valueable',
      text1: 'feedback to the company',
    },
    {
      imageURL: 'bbb',
      title: 'Connect Colleagues',
      text: 'Connect with your colleagues and',
      text1: 'more angaged at work',
    },
  ];
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const getAsyncData = async () => {
    const response = await AsyncStorage.getItem('user');
    console.log('responsee', JSON.parse(response));
    if (response) {
      console.log('iffff', JSON.parse(response).id);
      dispatch(GetUser(navigation, 'drawer', JSON.parse(response).id));
    } else {
      console.log('elseee');

      navigation.navigate('login');
    }
  };

  const onStart = () => {
    console.log('working');
    getAsyncData();
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerView}>
        <Image
          style={styles.imageStyle2}
          resizeMode="contain"
          source={ensembleLogo}
        />
      </View>

      <Lottie
        source={require('../../../assets/lootiefile/splashLootie.json')}
        style={styles.lootie}
        autoPlay
        loop
        speed={2.0}
      />

      <View style={styles.flatlistView}>
        <FlatList
          style={styles.flatListCompleted}
          data={splash}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <View style={styles.boxView}>
                <View style={styles.imageView}>
                  {/* <Image style={styles.imageView} source={item.imageURL} /> */}
                  {item.imageURL === 'abc' ? (
                    <Goals />
                  ) : item.imageURL === 'xyz' ? (
                    <Feedback />
                  ) : item.imageURL === 'bbb' ? (
                    <Connect />
                  ) : null}
                </View>
                <View>
                  <Text style={styles.setGoals}>{item.title}</Text>
                  <Text style={styles.monthly}>{item.text}</Text>
                  <Text style={styles.company}>{item.text1}</Text>
                </View>
              </View>
            );
          }}
        />
      </View>

      <View style={styles.btn}>
        <PrimaryButton
          title="Let's Get Started"
          backgroundColor="#2B2F86"
          color="white"
          onPress={onStart}
        />
      </View>
    </View>
  );
};

export default Splash;
