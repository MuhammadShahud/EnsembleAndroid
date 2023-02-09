import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header/header';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {ButtonColor} from '../../../assets/colors/colors';
import Medaal from '../../../assets/images/Medaal'
import {
  awardLogo,
  timeLogo,
  loading,
  greenMedal,
} from '../../../assets/images/images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {ProgressBar, MD3Colors} from 'react-native-paper';
import {
  FiraSansMedium,
  FiraSansRegular,
  FiraSansSemiBold,
  PoppinsBold,
  PoppinsMedium,
  PoppinsRegular,
  PoppinsSemiBold,
} from '../../../assets/fonts/Fonts';
import {useDispatch, useSelector} from 'react-redux';
import {PatchGoalSteps} from '../../redux/Actions/AuthAction';
import {USER} from '../../redux/Reducers/AuthReducer';

const GoalsDueDate = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const goal = props.route.params.goal;
  const userData = useSelector(USER);
  let array = [];

  goal?.steps.forEach(e => {
    e.isDone ? array.push(e.step) : array.filter(f => f !== e.step);
  });

  const [form, setForm] = useState(array);

  function pickForm(selectedForm) {
    console.log(selectedForm);
    // const index = form.findIndex(form => form == selectedForm)
    if (form.includes(selectedForm)) {
      setForm(form.filter(form => form !== selectedForm));
      return;
    }
    setForm(form => form.concat(selectedForm));
  }

  const selectStep = (i, step) => {
    let obj = {steps: goal.steps};

    obj.steps[i].isDone = !goal.steps[i].isDone;
    console.log('workinggg', obj);

    dispatch(PatchGoalSteps(obj, goal.id, userData.id));
    pickForm(step);
  };
  console.log('goallll', goal);
  return (
    <View>
      <Header />
      <Text style={styles.duedateText}>Due Date</Text>
      <View style={styles.container}>
        <Text style={styles.number}>{goal.dueDate.split(' ')[0]}</Text>
        <View>
          <Text style={styles.dateText}>{goal.dueDate.split(' ')[1]}</Text>
          <Text style={styles.timeText}>12:00 Am</Text>
        </View>
      </View>

      <View style={styles.boxView}>
        <View style={styles.circle}>
          {/* <Image source={greenMedal} style={styles.imageLogo} /> */}
          <Medaal  style={styles.imageLogo}/>
        </View>
        <View style={styles.boxContainer}>
          <Text style={styles.design}>{goal.goal}</Text>
          <View style={styles.iconView}>
            <Ionicons name="time" size={15} style={styles.icon} />
            <Text style={styles.date}>{goal.dueDate}</Text>
          </View>
        </View>
      </View>

      <View style={styles.progressView}>
        <Text style={styles.progress}>Progress</Text>
        <View style={styles.mainProgressView}>
          <View style={styles.progressBarView}>
            <ProgressBar
              style={styles.progressBar}
              progress={goal.progress / 100}
              color={'black'}
            />
          </View>
          <Text style={styles.progressNumber}>{goal.progress}%</Text>
        </View>
      </View>
      <View style={styles.editView}>
        <View>
          <Text style={styles.steps}>Steps</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('editgoal', {goal: goal})}>
          <Feather name="edit-2" size={18} style={styles.editIcon} />
          <Text style={styles.edit}>Edit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.select}>
        {goal.steps.map((step, i) => (
          <View key={step.step} style={styles.checkboxView}>
            <TouchableOpacity
              style={styles.checkBox}
              onPress={() => selectStep(i, step.step)}>
              {form.includes(step.step) && <Text style={styles.tick}>✔</Text>}
            </TouchableOpacity>
            <Text style={styles.optionText}>{step.step}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default GoalsDueDate;

const styles = StyleSheet.create({
  duedateText: {
    color: 'black',
    fontSize: moderateScale(25),
    fontFamily: PoppinsSemiBold,
    marginHorizontal: scale(20),
    marginTop: verticalScale(30),
  },
  container: {
    marginHorizontal: scale(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  number: {
    color: ButtonColor,
    fontSize: moderateScale(50),
    fontFamily: PoppinsBold,
  },
  dateText: {
    paddingLeft: scale(5),
    color: 'black',
    marginTop: verticalScale(-5),
    fontFamily: PoppinsMedium,
  },
  timeText: {
    paddingLeft: scale(5),
    color: 'black',
    fontFamily: PoppinsRegular,
    marginTop: verticalScale(-5),
  },
  boxView: {
    backgroundColor: ButtonColor,
    marginHorizontal: scale(20),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: moderateScale(20),
    marginTop: verticalScale(20),
    paddingHorizontal: scale(10),
    height: verticalScale(80),
  },

  design: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: moderateScale(15),
    paddingLeft: scale(10),
    fontFamily: FiraSansSemiBold,
  },
  date: {
    color: 'white',
    fontWeight: '400',
    fontSize: moderateScale(10),
    paddingLeft: scale(10),
    fontFamily: FiraSansRegular,
  },
  circle: {
    marginTop: verticalScale(20),
  },
  icon: {
    color: '#7fffd4',
  },
  iconView: {
    flexDirection: 'row',
    paddingHorizontal: scale(10),
    marginTop: verticalScale(3),
  },
  imageLogo: {
    alignItems: 'center',
  },
  boxContainer: {},
  progress: {
    color: 'black',
    marginTop: verticalScale(15),
    fontSize: moderateScale(20),
    fontFamily: PoppinsMedium,
  },
  steps: {
    color: 'black',
    fontSize: moderateScale(20),
    fontFamily: PoppinsMedium,
  },
  editView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: scale(25),
    marginBottom: verticalScale(5),
    marginTop: verticalScale(15),
  },
  edit: {
    color: ButtonColor,
    fontFamily: FiraSansMedium,
  },
  editIcon: {
    color: ButtonColor,
  },
  checkBox: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderRadius: moderateScale(50),
  },
  tick: {
    color: 'white',
    width: 23,
    height: 23,
    borderRadius: moderateScale(50),

    textAlign: 'center',
    backgroundColor: ButtonColor,
  },
  checkboxView: {
    flexDirection: 'row',
    marginHorizontal: scale(20),
    marginVertical: verticalScale(5),
  },
  optionText: {
    color: 'black',
    paddingLeft: scale(15),
    fontSize: moderateScale(15),
    fontFamily: PoppinsRegular,
  },

  progressView: {
    marginHorizontal: scale(25),
    marginTop: verticalScale(15),
  },
  loadingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  progressBar: {
    borderRadius: 20,
    height: verticalScale(7),
    backgroundColor: '#EBEBEB',
    width: '85%',
  },
  progressBarView: {
    width: '85%',
  },
  mainProgressView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: verticalScale(5),
  },
  select: {
    marginHorizontal: scale(5),
  },
  progressNumber: {
    color: 'black',
  },
});
