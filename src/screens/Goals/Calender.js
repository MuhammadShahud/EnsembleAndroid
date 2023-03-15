import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Header from '../../components/Header/header';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Button from '../../components/Button'
import { ButtonColor, PRIMARYCOLOR } from '../../../assets/colors/colors';
import Footer from '../../components/footer/Footer';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { FlashMessage, PatchGoal, PostGoal } from '../../redux/Actions/AuthAction';
import GoalUpdateModaal from '../../components/Modaal/GoalUpdateModaal';
import DashesGoals from '../../components/Goals/dashesGoals';
import { PoppinsMedium, PoppinsRegular, PoppinsSemiBold } from '../../../assets/fonts/Fonts';
import moment from 'moment';

const Calen = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation()
  const [visible, setVisible] = useState(false);
  const [reminder, setReminder] = useState();
  console.log("reminderrrr",reminder);
  const today = moment().format('YYYY-MM-DD');
  let goal = props.route.params.goal;
  const datee=  props.route.params.edit ?goal.dueDate.split('T')[0] :today;
  const user =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYWh1ZEBwbHVtdHJlZWdyb3VwLm5ldCIsImlhdCI6MTY2NDU2NzExNSwiZXhwIjoxNjk2MTAzMTE1fQ.bG940Pi5-Tf6CX4AMxLSZ2vLHZJr3XfgkBsIRvtkNeA';  //   const {id, truckDetails} = route.params;
  const [date, setDate] = useState(datee);


  const createGoal = () => {
    if(reminder===true || reminder===false){
      console.log(reminder);
      goal.reminder = reminder;
    goal.dueDate = date;
    console.log("finalGoal", goal, user);

    props.route.params.edit ?
      dispatch(PatchGoal(goal, navigation, 'successGoal', user, goal._id,setVisible))
      :
      dispatch(PostGoal(goal, navigation, 'successGoal', user))
    }else{
      FlashMessage( {
         message: "Choosing reminder is required",
        type: 'danger'})
    }
  }


  console.log("dateee", date, goal);
  console.log("goaaaalll", props.route.params.goal);
  return (
    <View style={styles.container}>
      <View>

        <Header />
        <DashesGoals color={2} />
        <View style={styles.calender}>
          <Text style={styles.selectDate}>Set a due date for your goal</Text>
          {/* <Calendar

            enableSwipeMonths={true}
            style={{
              backgroundColor :'#F1F1F1',
              fontFamily:PoppinsRegular
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
          /> */}



          <Calendar
            enableSwipeMonths={true}
            style={{
              backgroundColor: '#F1F1F1',
              fontFamily: PoppinsRegular,
            }}
          
            theme={{
              backgroundColor: '#F1F1F1',
              calendarBackground: '#F1F1F1',

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
            <Button title='NO' onPress = {()=>setReminder(false)} buttonStyle={styles.button} />
            <Button title='YES' onPress = {()=>setReminder(true)} buttonStyle={styles.button} />
          </View>
          <Text style={styles.reminder}>You’ll get reminder notification a day before goal deadline</Text>
        </View>
      </View>
      <View>
      <GoalUpdateModaal
          modalVisible={visible}
          setModalVisible={setVisible}
          requestClose={() => setVisible(false)}
        />
        <Footer onPress={createGoal} iconName={'check'} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    elevation: 1,
    backgroundColor: '#F1F1F1',
    justifyContent: 'space-between'

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
    fontSize: moderateScale(20),

    marginBottom: 15,
    color: 'black',
    fontFamily: PoppinsSemiBold
  },
  remindedText: {
    marginHorizontal: scale(20),
    marginTop: verticalScale(12),
    color: 'black',
    fontFamily: PoppinsSemiBold,
    fontSize: moderateScale(14)


  },
  button: {
    // backgroundColor:'#2B2F86',
    backgroundColor: 'white',
    color: ButtonColor,
    borderColor: ButtonColor,
    borderWidth: 1,
    // width: '70%',
    paddingHorizontal: scale(60),
    paddingTop: verticalScale(7),
    paddingBottom: verticalScale(2),
    alignSelf: 'center',
    borderRadius: moderateScale(20),
    // fontWeight: 'bold',
    fontFamily: PoppinsSemiBold,
    fontSize: moderateScale(15),
    textAlign: 'center',
    marginHorizontal:scale(2)
    // paddingTop:verticalScale(10)

  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    // alignSelf:'center',
    marginTop: verticalScale(10),
    marginHorizontal:scale(20)
  },
  reminder: {
    marginTop: verticalScale(10),
    marginHorizontal: scale(20),
    fontFamily: PoppinsRegular,
    fontSize: moderateScale(13),
    color: '#777777'
  },


});
export default Calen;