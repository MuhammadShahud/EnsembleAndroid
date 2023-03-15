import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import SetGoals from '../../components/Goals/SetGoals';
import OngoingCompleted from '../../components/Goals/OngoingCompleted';
import Header from '../../components/Header/header';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useRef} from 'react';
import {ProgressBar, MD3Colors} from 'react-native-paper';
import Check from '../../../assets/images/Check';
import Awardd from '../../../assets/images/Awardd';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Button from '../../components/Button';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {notiLogo, timeLogo} from '../../../assets/images/images';
import {ButtonColor} from '../../../assets/colors/colors';
import {useDispatch, useSelector} from 'react-redux';
import {GOALS, USER} from '../../redux/Reducers/AuthReducer';
import {
  FiraSansBold,
  FiraSansRegular,
  FiraSansSemiBold,
  PoppinsBold,
  PoppinsMedium,
  PoppinsRegular,
  PoppinsSemiBold,
} from '../../../assets/fonts/Fonts';
import {PatchUserFirstTime} from '../../redux/Actions/AuthAction';
const PersonalGoals = () => {
  const user =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYWh1ZEBwbHVtdHJlZWdyb3VwLm5ldCIsImlhdCI6MTY2NDU2NzExNSwiZXhwIjoxNjk2MTAzMTE1fQ.bG940Pi5-Tf6CX4AMxLSZ2vLHZJr3XfgkBsIRvtkNeA';
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [show, setShow] = useState(true);
  const [num, setNum] = useState(0);
  const refRBSheet = useRef();
  const height = Dimensions.get('screen').height;
  const userData = useSelector(USER);
  let goalsData = useSelector(GOALS);
  goalsData.reverse();
  console.log('goalsData', goalsData[0]?.dueDate.split('T')[0].split('-'));
  const [visible, setVisible] = useState(false);

  const data = goalsData;

  goalsData = data.filter(e => e.isCompleted === false);

  const laptop = data.filter(e => e.isCompleted === true);

  userData.firstTimeGoal && useEffect(() => {
    refRBSheet.current.open();
  }, []);

  const rbsheetClose = () => {
    const obj = {
      firstTimeGoal: false,
    };
    dispatch(PatchUserFirstTime(obj, userData.id));
    refRBSheet.current.close();
  };

  useFocusEffect(
    useCallback(() => {
      setShow(true);
      setVisible(false);
    }, []),
  );

  return (
    <View style={styles.mainView}>
      <Header source={notiLogo} />
      <ScrollView>
        <View>
          <SetGoals visible={visible} setVisible={setVisible} />

          <OngoingCompleted
            onPress={() => setShow(!show)}
            CompletedtextColor={show ? '#858585' : 'white'}
            OngoingtextColor={show ? 'white' : '#858585'}
            CompletedbackgroundColor={show ? 'white' : ButtonColor}
            OngoingbackgroundColor={show ? ButtonColor : 'white'}
            completedborderColor={show ? '#9F9F9F' : ButtonColor}
            ongoingbordercolor={show ? ButtonColor : '#9F9F9F'}
          />
        </View>

        {show ? (
          <>
            <Text style={styles.personalText}>Personal Goals</Text>
            <FlatList
              style={styles.flatList}
              data={goalsData}
              keyExtractor={item => item._id}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    style={styles.box}
                    onPress={() =>
                      navigation.navigate('duedate', {goal: item})
                    }>
                    <View style={styles.imageView}>
                      {/* <Image source={awardLogo} /> */}
                      <Awardd />
                    </View>
                    <View style={{width: '60%'}}>
                      <Text style={styles.title}>{item?.goal}</Text>

                      <View style={styles.dateView}>
                        <Image source={timeLogo} />
                        <Text style={styles.date}>{item?.dueDate}</Text>
                      </View>
                      <ProgressBar
                        style={styles.progressBar}
                        progress={item.progress / 100}
                        color={'black'}
                      />

                      {/* <Image style={styles.loadingline} source={loading} /> */}
                    </View>
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
                <View
                  style={styles.laptopBox}
                  // onPress={() => navigation.navigate('duedate')}
                >
                  <View style={styles.checkView}>
                    <Check />
                  </View>
                  <View>
                    <Text style={styles.laptopTitle}>{item?.goal}</Text>
                    <View style={styles.laptopDateView}>
                      <Text style={styles.laptopDate}>{item?.dueDate}</Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        )}

     { userData.firstTimeGoal &&  <RBSheet
          isVisible={userData.firstTimeGoal}
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
            <Text style={styles.georgeText}>Ahoy, George!</Text>
            <Text style={styles.goalsText}>
              What are <Text style={styles.smartText}>S.M.A.R.T</Text> Goals
            </Text>
            <Text style={styles.goalParagraph}>
              A SMART goal is used to help guide goal setting. SMART is an
              acronym that stands for <Text style={styles.oneword}>S</Text>
              pecific, <Text style={styles.oneword}>M</Text>easurable,{' '}
              <Text style={styles.oneword}>A</Text>chievable,{' '}
              <Text style={styles.oneword}>R</Text>ealistic, and{' '}
              <Text style={styles.oneword}>T</Text>imely.{' '}
            </Text>
            <Button
              title={'Lets Go'}
              buttonStyle={styles.button}
              onPress={() => rbsheetClose()}
            />
          </View>
        </RBSheet>}
        <View style={styles.footerView}>
          <Text style={styles.powered}>Powered by</Text>
          <Text style={styles.ensemble}>ENSEMBLE</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default PersonalGoals;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  personalText: {
    color: 'black',
    marginHorizontal: scale(20),
    marginTop: verticalScale(20),
    marginBottom: verticalScale(5),
    fontSize: moderateScale(20),
    fontFamily: FiraSansBold,
  },

  box: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    marginVertical: verticalScale(7),
    borderRadius: moderateScale(20),
    marginHorizontal: scale(20),
    paddingBottom: verticalScale(8),
  },
  title: {
    color: 'black',
    fontSize: moderateScale(16),
    fontFamily: FiraSansSemiBold,
    paddingTop: verticalScale(5),
    flex: 1,
  },
  date: {
    color: 'black',
    paddingLeft: scale(8),
    fontFamily: FiraSansRegular,
  },
  dateView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(10),
  },
  imageView: {
    paddingTop: verticalScale(20),
    paddingLeft: scale(15),
    paddingRight: scale(12),
  },
  flatListCompleted: {
    marginTop: verticalScale(20),
  },
  loadingline: {
    marginTop: verticalScale(5),
  },
  georgeText: {
    marginTop: verticalScale(10),
    fontSize: moderateScale(35),
    color: 'black',
    fontFamily: PoppinsBold,
  },
  smartText: {
    color: 'black',
    fontFamily: PoppinsMedium,
  },
  goalsText: {
    color: 'black',
    marginTop: verticalScale(5),
    fontFamily: PoppinsRegular,
    marginTop: verticalScale(-5),
  },
  goalParagraph: {
    marginTop: verticalScale(10),
    color: 'black',
    fontSize: moderateScale(14),
    lineHeight: verticalScale(15),
    fontFamily: PoppinsRegular,
  },
  bottomsheet: {
    marginHorizontal: scale(5),
  },
  oneword: {
    fontFamily: PoppinsBold,
  },
  button: {
    backgroundColor: 'black',
    borderRadius: moderateScale(30),
    width: '100%',
    paddingVertical: verticalScale(10),
    marginTop: verticalScale(20),
  },
  sheetContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: moderateScale(45),
    borderTopRightRadius: moderateScale(45),
    paddingHorizontal: scale(20),
    zIndex: 1,
  },

  checkView: {
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(10),
  },
  laptopBox: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginVertical: verticalScale(7),
    borderRadius: moderateScale(20),
    marginHorizontal: scale(20),
    alignItems: 'center',
    paddingVertical: verticalScale(10),
  },
  laptopDateView: {
    paddingTop: verticalScale(5),
  },
  laptopTitle: {
    color: 'black',
    fontFamily: PoppinsRegular,
  },
  laptopDate: {
    fontSize: moderateScale(10),
    color: '#8C8C8C',
    fontFamily: PoppinsRegular,
    marginTop: verticalScale(-5),
  },
  progressBar: {
    borderRadius: 20,
    height: verticalScale(7),
    backgroundColor: '#EBEBEB',
    width: '95%',
    marginTop: verticalScale(5),
  },
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
});
