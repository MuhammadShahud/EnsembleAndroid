import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import Check from '../../../assets/images/Check';
import Header from '../../components/Header/header';
import {notiLogo} from '../../../assets/images/images';
import {
  FiraSansSemiBold,
  PoppinsBold,
  PoppinsMedium,
  PoppinsRegular,
  PoppinsSemiBold,
} from '../../../assets/fonts/Fonts';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import OngoingCompleted from '../../components/Goals/OngoingCompleted';
import {ButtonColor} from '../../../assets/colors/colors';
import {useRef} from 'react';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {SURVEYS, USER} from '../../redux/Reducers/AuthReducer';
import WhiteMedal from '../../../assets/images/WhiteMedal';
import LightBlueStar from '../../../assets/images/LightBlueStar';
import {PatchUserFirstTime} from '../../redux/Actions/AuthAction';

const Survey = () => {
  const refRBSheet = useRef();
  const navigation = useNavigation();
  const userData = useSelector(USER);
  const surveys = useSelector(SURVEYS);
  const height = Dimensions.get('screen').height;
  const dispatch = useDispatch();
  console.log('surveysss', userData);

  const [show, setShow] = useState(true);
  useEffect(() => {
    userData.firstTimeSurvey && refRBSheet.current.open();
  }, []);

  let weeklySurvey = surveys;
  let laptop = surveys;

  console.log('length', laptop.length, weeklySurvey.length);
  userData?.completedSurveys.forEach(e => {
    console.log('eeeeee', e, weeklySurvey);
    weeklySurvey = weeklySurvey?.filter(s => s?.id !== e);
  });

  console.log('length', laptop.length, weeklySurvey.length);
  let newLap = [];
  userData?.completedSurveys.forEach(e => {
    console.log('fffff', e, newLaptop);

    let newLaptop = laptop?.forEach(s => {
      s?.id === e ? newLap.push(s) : null;
    });
  });
  laptop = newLap;
  const rbsheetClose = () => {
    const obj = {
      firstTimeSurvey: false,
    };
    dispatch(PatchUserFirstTime(obj, userData.id));
    refRBSheet.current.close();
  };
  return (
    <View style={styles.mainView}>

      <View>

      <ScrollView>
        <View>
          <Header source={notiLogo} />

          <Text style={styles.george}>Ahoy, George!</Text>
          <OngoingCompleted
            onPress={() => setShow(!show)}
            CompletedtextColor={show ? '#858585' : 'white'}
            OngoingtextColor={show ? 'white' : '#858585'}
            CompletedbackgroundColor={show ? 'white' : ButtonColor}
            OngoingbackgroundColor={show ? ButtonColor : 'white'}
            completedborderColor={show ? '#9F9F9F' : ButtonColor}
            ongoingbordercolor={show ? ButtonColor : '#9F9F9F'}
          />

          {show ? (
            <>
              <Text style={styles.weeklySurvey}>
                Your, weekly survey is here
              </Text>
              <FlatList
                style={styles.flatList}
                data={weeklySurvey}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                    style={styles.flatView}
                    onPress={() =>
                      navigation.navigate('review', {survey: item})
                      }>
                      {/* <Image style={styles.starImg} source={star} /> */}
                      <View style={styles.starImg}>
                        <WhiteMedal />
                      </View>
                      <Text style={styles.text1}>{item?.question}</Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </>
          ) : (
            <FlatList
              style={styles.flatListCompleted}
              data={laptop}
              keyExtractor={item => item.id}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                  style={styles.laptopBox}
                    // onPress={() => navigation.navigate('duedate')}
                  >
                    {/* <Image style={styles.img1} source={checkMark} /> */}
                    <Check />
                    <Text style={styles.laptopTitle}>{item?.question}</Text>
                    {/* <Image style={styles.star} source={smallstar} /> */}
                    <LightBlueStar />
                  </TouchableOpacity>
                );
              }}
            />
            )}

          {userData.firstTimeSurvey && (
            <RBSheet
              isVisible={userData.firstTimeSurvey}
              ref={refRBSheet}
              closeOnDragDown={true}
              closeOnPressMask={false}
              customStyles={{
                wrapper: {
                  backgroundColor: 'rgba(0,0,0,0.5)',
                },
                draggableIcon: {
                  backgroundColor: '#000',
                  width: '40%',
                  marginTop: verticalScale(15),
                },
                container: {
                  backgroundColor: 'white',
                  borderTopLeftRadius: moderateScale(45),
                  borderTopRightRadius: moderateScale(45),
                  paddingHorizontal: scale(20),
                  zIndex: 1,
                },
              }}
              height={height * 0.35}>
              <View style={styles.bottomsheet}>
                {/* <Text style={styles.georgeText}>What are</Text>
          <Text style={styles.georgeText1}>Pulse Surveys?</Text> */}
                <Text style={styles.georgeText}>What are Pulse Surveys?</Text>
                <Text style={styles.goalParagraph}>
                  Pulse surveys are a mechanism for measuring feedback using
                  shorter, more frequent check-ins, that's not bound to
                  measuring specific topics or content.
                </Text>

                <Button
                  title={'Lets Go'}
                  buttonStyle={styles.button}
                  onPress={() => rbsheetClose()}
                  />
              </View>
            </RBSheet>
          )}
        </View>
      </ScrollView>
                </View>
        <View style={styles.footerView}>
          <Text style={styles.powered}>Powered by</Text>
          <Text style={styles.ensemble}>ENSEMBLE</Text>
        </View>
    </View>
  );
};

export default Survey;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  george: {
    color: 'black',
    fontFamily: FiraSansSemiBold,
    marginHorizontal: scale(20),
    marginTop: verticalScale(20),
    fontSize: moderateScale(20),
  },
  weeklySurvey: {
    color: 'black',
    fontFamily: FiraSansSemiBold,
    marginHorizontal: scale(20),
    marginBottom: verticalScale(10),
    marginTop: verticalScale(30),
    fontSize: moderateScale(20),
  },
  starImg: {
    paddingTop: verticalScale(15),
  },
  flatView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: ButtonColor,
    marginVertical: verticalScale(5),
    marginHorizontal: scale(20),
    borderRadius: moderateScale(20),
    // paddingVertical: verticalScale(12),
    paddingHorizontal: scale(10),
  },
  letshare: {
    flexDirection: 'row',
  },
  dueDate: {
    paddingTop: verticalScale(20),
  },
  due: {
    fontFamily: PoppinsRegular,
    color: 'white',
  },
  date: {
    fontFamily: PoppinsMedium,
    color: 'white',
  },
  text1: {
    color: 'white',
    fontFamily: PoppinsRegular,
  },
  text2: {
    color: 'white',
    fontFamily: PoppinsSemiBold,
    paddingLeft: scale(3),
  },
  laptopBox: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginVertical: verticalScale(7),
    borderRadius: moderateScale(20),
    marginHorizontal: scale(20),
    alignItems: 'center',
    paddingVertical: verticalScale(15),
    paddingHorizontal: scale(15),
  },
  checkView: {
    // paddingHorizontal: scale(10),
  },
  laptopTitle: {
    color: 'black',
    fontFamily: PoppinsRegular,
    fontSize: moderateScale(12),
    width: '70%',
    marginHorizontal: scale(5),
    paddingLeft: scale(5),
  },
  img1: {},
  laptopDateView: {
    // paddingTop: verticalScale(5),
  },
  laptopDate: {
    fontSize: moderateScale(10),
    fontFamily: PoppinsRegular,
  },
  star: {},
  footerView: {
    marginHorizontal: scale(20),
    marginVertical: verticalScale(15),
    // marginBottom: verticalScale(40),
  },
  powered: {
    color: 'black',
    fontFamily: PoppinsRegular,
  },
  ensemble: {
    color: 'black',
    fontSize: moderateScale(20),
    fontFamily: PoppinsSemiBold,
    marginTop: verticalScale(-3),
  },
  bottomsheet: {
    marginHorizontal: scale(5),
  },

  georgeText: {
    fontSize: moderateScale(35),
    color: 'black',
    fontFamily: PoppinsBold,
    // marginRight:50
  },

  button: {
    backgroundColor: 'black',
    borderRadius: moderateScale(30),
    paddingVertical: verticalScale(8),
    marginTop: verticalScale(8),
    marginBottom: verticalScale(8),
    fontFamily: PoppinsSemiBold,
  },
  goalParagraph: {
    fontFamily: PoppinsRegular,
    color: 'black',
  },
  flatListCompleted: {
    marginTop: verticalScale(20),
  },
});
