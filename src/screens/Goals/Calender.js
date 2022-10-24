import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import colors from '../../constants/colors';
import { Calendar } from 'react-native-calendars';
// import CustomButton from '../../components/Buttons/CustomButton';
import moment from 'moment';
import Header from '../../components/Header/header';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Button from '../../components/Button'
import { ButtonColor, PRIMARYCOLOR } from '../../../assets/colors/colors';
import Footer from '../../components/footer/Footer';
import { useNavigation } from '@react-navigation/native';

const Calen = () => {
  const navigation=useNavigation()
  //   const {id, truckDetails} = route.params;
  const [date, setDate] = useState('');
  const today = moment().format('YYYY-MM-DD');
  return (
    <View style={styles.container}>
      <View>

        <Header />
        <View style={styles.calender}>
          <Text style={styles.selectDate}>Set a due date for your goal</Text>
          <Calendar

            enableSwipeMonths={true}
            style={{
              backgroundColor :'#F1F1F1',
            }}
            
            selectedColor="red"
            onDayPress={day => {
              setDate(day.dateString);
            }}
            minDate={today}
            markedDates={{
              [date]: {
                selected: true,
                selectedColor: ButtonColor,
                

              },
            }}
          />
          <Text style={styles.remindedText}>Do you want to get reminded?</Text>

          <View style={styles.buttonContainer}>
            <Button title='No' buttonStyle={styles.button} />
            <Button title='Yes' buttonStyle={styles.button} />
          </View>
          <Text style={styles.reminder}>You’ll get reminder notification a day before goal deadline</Text>
        </View>
      </View>
      <View>

        <Footer onPress={()=>navigation.navigate('successGoal')} iconName={'check'}/>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    elevation: 1,
    backgroundColor: '#F1F1F1',
    justifyContent:'space-between'

  },
  calender: {
    marginHorizontal: scale(20),
    marginTop: verticalScale(20),
    // backgroundColor:'blue'
    
  },
  selectDate: {
    // color: colors.textgrey,
    alignSelf: 'center',
    // fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    marginBottom: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  remindedText: {
    marginHorizontal: scale(20),
    marginTop: verticalScale(12),
    color: 'black',
    fontWeight: 'bold'

  },
  button: {
    // backgroundColor:'#2B2F86',
    backgroundColor: 'white',
    color: ButtonColor,
    borderColor: ButtonColor,
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: scale(60),
    paddingVertical: verticalScale(5),
    alignSelf: 'center',
    borderRadius: moderateScale(20),
    fontWeight: 'bold',
    fontSize: moderateScale(15),
    textAlign: 'center',

  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // alignSelf:'center',
    marginTop: verticalScale(10),
  },
  reminder: {
    marginTop: verticalScale(10),
    marginHorizontal: scale(20)
  }

});
export default Calen;