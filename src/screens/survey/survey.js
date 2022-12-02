import {
  StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Dimensions
} from 'react-native'
import React, { useState, useEffect } from 'react'
import RBSheet from 'react-native-raw-bottom-sheet';

import Header from '../../components/Header/header'
import { checkMark, notiLogo, smallstar, star } from '../../../assets/images/images'
import { FiraSansSemiBold, PoppinsBold, PoppinsLight, PoppinsMedium, PoppinsRegular, PoppinsSemiBold } from '../../../assets/fonts/Fonts'
import Footer from '../../components/footer/Footer'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import OngoingCompleted from '../../components/Goals/OngoingCompleted'
import { ButtonColor } from '../../../assets/colors/colors'
import { useRef } from 'react';
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native';


const Survey = () => {
  const refRBSheet = useRef();
  const navigation=useNavigation();
  const height = Dimensions.get('screen').height;

  const [show, setShow] = useState(true);
  useEffect(() => {
    refRBSheet.current.open();
  }, []);

  const weeklySurvey = [{
    id: 1,
    imageUR: require('../../../assets/images/star.png'),
    text: 'How do you feel working?',
    text1: 'here?',
    text2: 'Lets share',
    dueDate: '08-12-2022'
  }]
  const laptop = [
    {
      id: 1,
      title: 'Are you happy with the hp laptop?',
      date: '07-08-2022',
      // imageUR: require('../../../assets/images/star.png'),


    },
    {
      id: 2,
      title: 'Are you happy with the hp laptop?',
      date: '07-08-2022',
      // imageUR: require('../../../assets/images/star.png'),

    },

    {
      id: 3,
      title: 'Are you happy with the hp laptop?',
      date: '07-08-2022',
      // imageUR: require('../../../assets/images/star.png'),

    },
  ];

  return (
    <View style={styles.mainView}>
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

        {show ? (<>
        <Text
 
           style={styles.weeklySurvey}>Your, weekly survey is here </Text>
          <FlatList
            style={styles.flatList}
            data={weeklySurvey}
            keyExtractor={item => item._id}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={styles.flatView}
                onPress={()=>navigation.navigate('review')}
                >
                  <View>
                    <Image source={item.imageUR} />
                  </View>
                  <View>
                    <Text style={styles.text1}>{item.text}</Text>
                    <View style={styles.letshare}>
                      <Text style={styles.text1}>{item.text1}</Text>
                      <Text style={styles.text2}>{item.text2}</Text>

                    </View>
                    <Text style={styles.dueDate}><Text style={styles.due}>Due Date:</Text> <Text style={styles.date}>{item.dueDate}</Text></Text>
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
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={styles.laptopBox}
                // onPress={() => navigation.navigate('duedate')}
                >

                  <View style={styles.checkView}>
                    <Image source={checkMark} />
                  </View>
                  <View>
                    <Text style={styles.laptopTitle}>{item.title}</Text>
                    <View style={styles.laptopDateView}>
                      <Text style={styles.laptopDate}>{item.date}</Text>
                    </View>
                  </View>
                  <View>
                    <Image style={styles.star} source={smallstar} />
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
            {/* <Text style={styles.georgeText}>What are</Text>
          <Text style={styles.georgeText1}>Pulse Surveys?</Text> */}
            <Text style={styles.georgeText}>What are Pulse Surveys?</Text>
            <Text style={styles.goalParagraph}>
              Pulse surveys are a mechanism for measuring feedback using shorter, more frequent check-ins, that's not bound to measuring specific topics or content.
            </Text>

            <Button
              title={'Lets Go'}
              buttonStyle={styles.button}
              onPress={() => refRBSheet.current.close()}
            />
          </View>
        </RBSheet>

      </View>
      <View style={styles.footerView}>
        <Text style={styles.powered}>Powered by</Text>
        <Text style={styles.ensemble}>ENSEMBLE</Text>
      </View>

    </View>
  )
}

export default Survey

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'space-between'
  },
  george: {
    color: 'black',
    fontFamily: FiraSansSemiBold,
    marginHorizontal: scale(20),
    marginTop: verticalScale(20),
    fontSize: moderateScale(20)
  },
  weeklySurvey: {
    color: 'black',
    fontFamily: FiraSansSemiBold,
    marginHorizontal: scale(20),
    marginTop: verticalScale(30),
    fontSize: moderateScale(20),
  },
  flatView: {
    flexDirection: 'row',
    backgroundColor: ButtonColor,
    marginTop: verticalScale(20),
    marginHorizontal: scale(20),
    borderRadius: moderateScale(15),
    paddingVertical: verticalScale(18),
    paddingHorizontal: scale(10)
  },
  letshare: {
    flexDirection: 'row',
  },
  dueDate: {
    paddingTop: verticalScale(20),
  },
  due: {
    fontFamily: PoppinsRegular,
    color: 'white'
  },
  date: {
    fontFamily: PoppinsMedium,
    color: 'white'
  },
  text1: {
    color: 'white',
    fontFamily: PoppinsRegular
  },
  text2: {
    color: 'white',
    fontFamily: PoppinsSemiBold,
    paddingLeft: scale(3)
  },
  laptopBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    fontSize: moderateScale(12)
  },
  laptopDateView: {
    // paddingTop: verticalScale(5),
  },
  laptopDate: {
    fontSize: moderateScale(10),
    fontFamily: PoppinsRegular
  },
  star: {
    // marginTop:verticalScale(5),
  },
  footerView: {
    marginHorizontal: scale(20),
    marginVertical:verticalScale(15)
    // marginBottom: verticalScale(40),

  },
  powered: {
    color: '#8C8C8C',
    fontFamily: PoppinsRegular,
  },
  ensemble: {
    color: '#8C8C8C',
    fontSize: moderateScale(20),
    fontFamily: PoppinsSemiBold,
    marginTop: verticalScale(-3)
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
    width: '100%',
    paddingVertical: verticalScale(11),
    marginTop: verticalScale(10),
    fontFamily: PoppinsSemiBold
  },
  goalParagraph: {
    fontFamily: PoppinsRegular,
    color: 'black'
  },
  flatListCompleted:{
    marginTop:verticalScale(20)
  }

})