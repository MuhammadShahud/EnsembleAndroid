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

import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Button from '../../components/Button';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {
  awardLogo,
  checkMark,
  loading,
  notiLogo,
  timeLogo,
} from '../../../assets/images/images';
import {ButtonColor} from '../../../assets/colors/colors';
import {useDispatch, useSelector} from 'react-redux';
import {GetGoals} from '../../redux/Actions/AuthAction';
import {GOALS, USER} from '../../redux/Reducers/AuthReducer';
const PersonalGoals = () => {
  const user =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYWh1ZEBwbHVtdHJlZWdyb3VwLm5ldCIsImlhdCI6MTY2NDU2NzExNSwiZXhwIjoxNjk2MTAzMTE1fQ.bG940Pi5-Tf6CX4AMxLSZ2vLHZJr3XfgkBsIRvtkNeA';
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [show, setShow] = useState(true);
  const refRBSheet = useRef();
  const height = Dimensions.get('screen').height;

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    refRBSheet.current.open();
  }, []);

  const goalsData = useSelector(GOALS);
  console.log("gaolsData",goalsData);

  const laptop = [
    {
      id: 1,
      title: 'Are you happy with the hp laptop?',
      date: '07-08-2022',
    },
    {
      id: 2,
      title: 'Are you happy with the hp laptop?',
      date: '07-08-2022',
    },

    {
      id: 3,
      title: 'Are you happy with the hp laptop?',
      date: '07-08-2022',
    },
  ];

  const data = goalsData;

  data.forEach(e => {
    let date = e.dueDate.split('T');
    console.log("dateeee",date);
    e.dueDate =date[0];
    console.log("dataaaa",data);
  });
  console.log('userrr', user.token);
  useFocusEffect(
    useCallback(() => {
      setShow(true);
      setVisible(false);
    }, []),
  );

  return (
    <View style={styles.mainView}>
      <View>
        <Header title={'The Plum Tree Group '} source={notiLogo} />
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
      <Text style={styles.personalText}>Personal Goals</Text>

      {show ? (
        <FlatList
          style={styles.flatList}
          data={data}
          keyExtractor={item => item._id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.box}
                onPress={() => navigation.navigate('duedate',{goal: item})}>
                <View style={styles.imageView}>
                  <Image source={awardLogo} />
                </View>
                <View>
                  <Text style={styles.title}>{item.goal}</Text>
                  <View style={styles.dateView}>
                    <Image source={timeLogo} />
                    <Text style={styles.date}>{item.dueDate}</Text>
                  </View>
                  <ProgressBar
                    style={styles.progressBar}
                    progress={0.3}
                    color={'black'}
                  />

                  {/* <Image style={styles.loadingline} source={loading} /> */}
                </View>
              </TouchableOpacity>
            );
          }}
        />
      ) : (
        <FlatList
          style={styles.flatListCompleted}
          data={laptop}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.laptopBox}
                onPress={() => navigation.navigate('duedate')}>
                <View style={styles.checkView}>
                  <Image source={checkMark} />
                </View>
                <View>
                  <Text style={styles.laptopTitle}>{item.title}</Text>
                  <View style={styles.laptopDateView}>
                    <Text style={styles.laptopDate}>{item.date}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      )}

      <RBSheet
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
            A SMART goal is used to help guide goal setting. SMART is an acronym
            that stands for <Text style={styles.oneword}>S</Text>pecific,{' '}
            <Text style={styles.oneword}>M</Text>easurable,{' '}
            <Text style={styles.oneword}>A</Text>chievable,{' '}
            <Text style={styles.oneword}>R</Text>ealistic, and{' '}
            <Text style={styles.oneword}>T</Text>imely.{' '}
          </Text>
          <Button
            title={'Lets Go'}
            buttonStyle={styles.button}
            onPress={() => refRBSheet.current.close()}
          />
        </View>
      </RBSheet>
    </View>
  );
};

export default PersonalGoals;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    // backgroundColor:'white'
  },
  personalText: {
    color: 'black',
    marginHorizontal: scale(20),
    marginTop: verticalScale(20),
    marginBottom: verticalScale(5),
    fontSize: moderateScale(20),
    fontWeight: 'bold',
  },

  box: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginVertical: verticalScale(7),
    borderRadius: moderateScale(20),
    marginHorizontal: scale(20),
    // alignItems:'center'
  },
  title: {
    color: 'black',
    fontSize: moderateScale(17),
    fontWeight: 'bold',
    paddingTop: verticalScale(5),
  },
  date: {
    color: 'black',
    paddingLeft: scale(8),
  },
  dateView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(15),
  },
  imageView: {
    paddingTop: verticalScale(10),
  },
  flatListCompleted: {
    // marginBottom: verticalScale(20)
    // height:'90%'
    marginTop: verticalScale(20),
  },
  loadingline: {
    marginTop: verticalScale(5),
  },
  georgeText: {
    marginTop: verticalScale(10),
    fontSize: moderateScale(40),
    color: 'black',
    fontWeight: 'bold',
  },
  smartText: {
    color: 'black',
    fontWeight: 'bold',
  },
  goalsText: {
    color: 'black',
    marginTop: verticalScale(5),
  },
  goalParagraph: {
    marginTop: verticalScale(10),
    color: 'black',
    fontSize: moderateScale(14),
    lineHeight: verticalScale(15),
  },
  bottomsheet: {
    marginHorizontal: scale(5),
  },
  oneword: {
    fontWeight: 'bold',
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
  // ensemble:{
  //   fontWeight:'bold',
  //   color:'#8C8C8C',
  //   fontSize:moderateScale(20)
  // },
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
    // fontSize:moderateScale(15)
  },
  laptopDate: {
    fontSize: moderateScale(10),
  },
  progressBar: {
    borderRadius: 20,
    height: verticalScale(7),
    backgroundColor: '#EBEBEB',
    width: '80%',
    marginTop: verticalScale(5),
  },
});
