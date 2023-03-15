import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import Cros from '../../../assets/images/Cros'
import AdIcon from '../../../assets/images/AdIcon'

import Header from '../../components/Header/header';
import Footer from '../../components/footer/Footer';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ButtonColor } from '../../../assets/colors/colors';
import GoalUpdateModaal from '../../components/Modaal/GoalUpdateModaal';
import { useDispatch, useSelector } from 'react-redux';
import { PatchGoal } from '../../redux/Actions/AuthAction';
import { PoppinsMedium, PoppinsRegular, PoppinsSemiBold } from '../../../assets/fonts/Fonts';
import { USER } from '../../redux/Reducers/AuthReducer';

const EditGoal = props => {
  const goal = props.route.params.goal;
  const [visible, setVisible] = useState(false);
  const [goalInput, setGoalInput] = React.useState(goal.goal);
  const [value, setValue] = React.useState('');
  const [addStep, setAddStep] = React.useState(false);
  const [indexes, setIndex] = React.useState([]);
  const [data, setData] = React.useState(goal.steps);
  const dispatch = useDispatch();
  console.log('goalll', goalInput, 'dataaaa');
  const userData = useSelector(USER);

  const user =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYWh1ZEBwbHVtdHJlZWdyb3VwLm5ldCIsImlhdCI6MTY2NDU2NzExNSwiZXhwIjoxNjk2MTAzMTE1fQ.bG940Pi5-Tf6CX4AMxLSZ2vLHZJr3XfgkBsIRvtkNeA';

  const toCalendar = (noDate) => {
    let array = [];

    data.map((d, i) => {
      console.log('indexEnd1', goalInput);
      console.log('dataaaaaa', d, i);
      const obj = {
        step: d.step,
        num: i + 1,
      };
      array.push(obj);
      console.log('index', goal);
    });
    goal.steps = array;
    goal.goal = goalInput;
    console.log('indexEnd5', goal._id);
    delete goal.__v

    if (noDate === true) {
      dispatch(PatchGoal(goal, navigation, null, user, goal._id, setVisible, userData.id))

    } else {
      navigation.navigate('calender', { goal, edit: true });
    }
  };

  const Remove_Item = ind => {
    const inititial_state = data.filter((item, index) => {
      return index != ind;
    });
    setData(inititial_state);
  };

  const addItem = async () => {
    setData(prev => [...prev, { step: value }]);
    setAddStep(false);
    setValue('');
  };

  const radioValue = ind => {
    if (indexes.includes(ind)) {
      const filtered = indexes.filter(e => e !== ind);
      setIndex(filtered);
    } else {
      let newArray = indexes.concat([ind]);
      setIndex(newArray);
    }
  };

  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.mainView}>
      <View>
        <Header />
{/* <KeyboardAwareScrollView enableOnAndroid={true}> */}
{/* <ScrollView contentContainerStyle={{height:'120%'}}> */}


          <Text style={styles.editGoalText}>Edit Goal</Text>
          <Text style={styles.stepsText}>Steps</Text>

          <View style={styles.stepView}>
            <FlatList
              data={data}
              keyExtractor={item => Math.random()}
              renderItem={({ item, index }) => {
                console.log(index);
                return (
                  <View style={styles.radioButtonView}>
                    <View style={styles.radioView}>
                      <RadioButton
                        color="black"
                        value="first"
                        status={'unchecked'}
                        onPress={() => radioValue(index)}
                        />
                      <Text style={styles.step}>{item.step}</Text>
                    </View>
                    <TouchableOpacity onPress={() => Remove_Item(index)}>
                      {/* <Entypo name='cross' size={20} style={styles.crossIcon} /> */}
                      {/* <Image source={cross} /> */}
                      <Cros />
                    </TouchableOpacity>
                  </View>
                );
              }}
            />

            {addStep ? (
              <View style={styles.textInputView}>
                <RadioButton
                  color="black"
                  value="first"
                  status={'unchecked'}
                  onPress={() => radioValue()}
                  />
                <TextInput
                  placeholder="Type"
                  onChangeText={text => setValue(text)}
                  value={value}
                  style={styles.stepInput}
                  />
                <TouchableOpacity onPress={addItem}>
                  <AntDesign name="check" size={20} style={styles.checkIcon} />
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity
              onPress={() => setAddStep(true)}
              style={styles.icon}>
                {/* <Ionicons name='add-circle-outline'
                                size={25}
                                style={styles.circleIcon}
                              /> */}
                {/* <Image source={addIcon} /> */}
                <AdIcon />
                <Text style={styles.anotherstep}>Add another step</Text>
              </TouchableOpacity>
            )}
          </View>

          <Text style={styles.steps}>Edit your goal</Text>
          <TextInput
            style={styles.input2}
            value={goalInput}
            onChangeText={(e) => setGoalInput(e)}
            />
          {/* <Text>AAA</Text> */}
          <View style={styles.goaldueDate}>
            <Text onPress={toCalendar} style={styles.editGoalDate}>
              Click To Edit Due Date
            </Text>
          </View>
        {/* </ScrollView> */}
      {/* </KeyboardAwareScrollView> */}
        {/* </ScrollView> */}
      </View>

      <View>
        <GoalUpdateModaal
          modalVisible={visible}
          setModalVisible={setVisible}
          requestClose={() => setVisible(false)}
          />
        <Footer iconName={'check'} onPress={() => toCalendar(true)} />
      </View>
    </ScrollView>
  );
};

export default EditGoal;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'space-between',
    // height:'500%'
  },
  input2: {
    borderWidth: 1,
    backgroundColor: 'white',
    marginHorizontal: scale(20),
    borderColor: 'white',
    borderRadius: moderateScale(25),
    paddingLeft: scale(20),
    marginTop: verticalScale(10),
    textAlignVertical: 'top',
    paddingBottom: verticalScale(35)


  },
  editGoalText: {
    marginHorizontal: scale(20),
    color: 'black',
    fontFamily: PoppinsSemiBold,
    fontSize: moderateScale(25),
    marginTop: verticalScale(30),
  },
  steps: {
    color: 'black',
    fontSize: moderateScale(20),
    marginHorizontal: scale(20),
    marginTop: verticalScale(15),
    fontFamily: PoppinsMedium
  },
  stepsText: {
    color: 'black',
    fontSize: moderateScale(20),
    fontFamily: PoppinsMedium,
    marginHorizontal: scale(20),
    marginTop: verticalScale(15),
    marginBottom: scale(30),
  },
  editGoalDate: {
    color: 'black',
    textAlign: 'center',
    fontFamily: PoppinsMedium,
    marginVertical: verticalScale(50),
    width: '38%',
    borderBottomWidth: 1,
    marginLeft: '50%',
    fontSize: moderateScale(12)
  },
  stepView: {
    marginTop: verticalScale(-20),
  },
  radioButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: scale(20),
  },
  radioView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: scale(14),
  },
  step: {
    color: 'black',
    fontFamily: PoppinsRegular
  },
  crossIcon: {
    color: 'black',
  },
  textInputView: {
    marginRight: scale(20),
    marginLeft: scale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stepInput: {
    color: 'black',
    width: '80%',
    borderRadius: moderateScale(20),
    paddingLeft: 0,
  },
  checkIcon: {
    color: ButtonColor,
  },
  icon: {
    flexDirection: 'row',
    marginHorizontal: scale(20),
    alignItems: 'center',
    marginTop: verticalScale(5),
  },
  anotherstep: {
    paddingLeft: scale(5),
    fontFamily: PoppinsRegular
  },
  input: {
    paddingBottom: verticalScale(50),
  },
});
