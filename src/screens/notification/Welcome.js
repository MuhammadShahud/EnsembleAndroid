import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header/header'
import HRText from '../../../assets/images/hrtext'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { OutfitBold, OutfitExtraBold, OutfitMedium, OutfitSemiBold, PoppinsLight, PoppinsMedium, PoppinsRegular, PoppinsSemiBold } from '../../../assets/fonts/Fonts'


const Welcome = (props) => {
  const item = props.route.params.data;
  console.log('item',item);
  return (
    <View>
      <Header />
      <View style={styles.View}>

        <View style={styles.firstView} >
          <View style={styles.circleView}>
            <HRText />
          </View>
          <View>

            <Text style={styles.text}>HR Announcement</Text>
            <Text style={styles.timeText}>{item.date}</Text>
          </View>
        </View>
        <Text style={styles.lorem}>{item.text}</Text>
      </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  circleView: {
    backgroundColor: '#F1F2FF',
    borderRadius: moderateScale(100),
    alignItems: 'center',
    width: '20%',
    justifyContent: 'center',
    paddingVertical: verticalScale(20),
    paddingHorizontal: scale(30),
    marginRight: scale(25),
    marginLeft: scale(20),

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    
    elevation: 12,



  },
  firstView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(10),
  },
  text: {
    fontSize: moderateScale(16),
    color: 'black',
    fontFamily: PoppinsSemiBold,

  },
  text1: {
    fontSize: moderateScale(16),
    color: 'black',
    fontFamily: PoppinsSemiBold,
    marginTop:verticalScale(-5)

  },
  timeText: {
    color: '#6C6C6C',
    fontFamily: PoppinsRegular
  },
  View: {
    backgroundColor: 'white',
    marginTop:verticalScale(40),
    marginHorizontal:scale(20),
    borderRadius:moderateScale(20),
    paddingTop:verticalScale(30),
    paddingBottom:verticalScale(25),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    
    elevation: 4,
  },
  lorem:{
    textAlign:'center',
    color:'#1B1B1B',
    textAlign:'left',
    paddingHorizontal:scale(20),
    paddingTop:verticalScale(10),
    fontFamily:PoppinsLight,
    lineHeight:verticalScale(20)
  }
})