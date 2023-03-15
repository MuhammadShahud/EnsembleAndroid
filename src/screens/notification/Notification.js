import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '../../components/Header/header';
import {
  OutfitMedium,
  PoppinsMedium,
  PoppinsRegular,
  PoppinsSemiBold,
} from '../../../assets/fonts/Fonts';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {ButtonColor} from '../../../assets/colors/colors';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {NOTI} from '../../redux/Reducers/AuthReducer';
import HRR from '../../../assets/images/HRR';
import BlueBrief from '../../../assets/images/BlueBrief';
import BlueAward from '../../../assets/images/BlueAward';

const Notification = () => {
  const navigation = useNavigation();
  const notifications = useSelector(NOTI);
  const notiToday = notifications;
console.log("notiTodaayyyyy",notiToday);
  notiToday?.map((n, i) => {
    let split = n.createdAt.split('T23:');
    console.log('split', split);
    let split2 = split[1].split('.');
    console.log('split2', split2);

    let date = `${split[0]} ${split2[0]}`;
    console.log('data', date);

    notiToday[i].date = date;
  });
  console.log('notiToday', notiToday);

  const notiYesterday = [
    {
      id: 1,
      imageURL: require('../../../assets/images/HR.png'),
      title: 'HR Announcement X Day Will Be',
      title1: 'Work From Home.',
      date: '24 hours ago',
    },
    {
      id: 2,
      imageURL: require('../../../assets/images/HR.png'),
      title: 'Welcome On Board!',
      title1: 'You are Champ!',
      date: '24 hours ago',
    },
  ];

  const onClick = item => {
    item.title === 'Complete Your Goal'
      ? navigation.navigate('Goals')
      : item.title === 'Start a New Survey'
      ? navigation.navigate('Surveys')
      : navigation.navigate('welcome', {data: item});
  };

  return (
    <View>
      <View>
        <Header />
        <Text style={styles.notiText}>Notifications</Text>
        <FlatList
          style={styles.flatListCompleted}
          // onPress={navigation.navigate('welcome')}

          data={notiToday}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  onClick(item);
                }}
                // onPress={()=>navigation.navigate('welcome')}
                style={styles.todayView}>
                <View>
                  {/* <Image
                    source={
                      item.title === 'HR ANNOUNCEMENT'
                        ? HR
                        : item.title === 'Complete Your Goal'
                          ? awardLogo
                          : bag
                    }
                  /> */}
                  {item.title === 'HR ANNOUNCEMENT' ? (
                    <HRR />
                  ) : item.title === 'Complete Your Goal' ? (
                    <BlueAward />
                  ) : (
                    <BlueBrief />
                  )}
                </View>
                <View style={styles.setup}>
                  <Text style={styles.flatText}>{item.text}</Text>
                  <Text style={styles.date}>{item.date}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
        {/* <Text style={styles.yesterdayText}>Yesterday</Text>

                <FlatList
                    style={styles.flatListCompleted}
                    data={notiYesterday}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (

                            <View style={styles.todayView}>
                                <View>

                                    <Image source={item.imageURL} />
                                </View>
                                <View>

                                    <Text style={styles.flatText}>{item.title}</Text>
                                    <Text style={styles.flatText}>{item.title1}</Text>
                                    <View style={styles.setup}>
                                        <View>

                                            <Text style={styles.date}>{item.date}</Text>
                                        </View>
                                      
                                    </View>
                                </View>
                            </View>

                        );
                    }}
                /> */}
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  notiText: {
    color: 'black',
    fontFamily: PoppinsSemiBold,
    fontSize: moderateScale(24),
    marginHorizontal: scale(20),
    marginVertical: verticalScale(30),
  },
  todayView: {
    flexDirection: 'row',
    backgroundColor: 'white',
    flexShrink: 1,
    marginHorizontal: scale(20),
    marginVertical: verticalScale(8),
    paddingTop: verticalScale(15),
    borderRadius: moderateScale(25),
    paddingHorizontal: scale(10),
    // alignItems:'center'
  },
  flatText: {
    color: 'black',
    flexShrink: 1,
    fontFamily: PoppinsRegular,
  },
  date: {
    color: '#6C6C6C',
    paddingTop: verticalScale(5),
    fontFamily: PoppinsMedium,
  },
  setup: {
    // justifyContent: 'space-between',
    flexShrink: 1,
  },
  survey: {
    fontSize: moderateScale(10),
    color: ButtonColor,
    fontFamily: PoppinsMedium,
    paddingLeft: scale(15),
    paddingTop: verticalScale(5),
  },
  arrowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  yesterdayText: {
    color: '#505050',
    fontFamily: OutfitMedium,
    marginHorizontal: scale(20),
    marginTop: verticalScale(10),
    marginBottom: verticalScale(5),
  },
});
