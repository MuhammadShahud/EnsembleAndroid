import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {RadioButton} from 'react-native-paper';

import Header from '../../components/Header/header';
import Footer from '../../components/footer/Footer';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import InputField from '../../components/Input Fields/InputField';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ButtonColor} from '../../../assets/colors/colors';
import GoalUpdateModaal from '../../components/Modaal/GoalUpdateModaal';
import {addIcon, cross} from '../../../assets/images/images';
import { useDispatch } from 'react-redux';
import { PatchGoal } from '../../redux/Actions/AuthAction';

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
    console.log('indexEnd5', goal);

if(noDate===true){
  dispatch(PatchGoal(goal,navigation,null,user,goal.id,setVisible))

}else{
    navigation.navigate('calender', {goal, edit: true});
}
  };

  const Remove_Item = ind => {
    const inititial_state = data.filter((item, index) => {
      return index != ind;
    });
    setData(inititial_state);
  };

  const addItem = async () => {
    setData(prev => [...prev, {step: value}]);
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
    <View style={styles.mainView}>
      <View>
        <Header />
        <Text style={styles.editGoalText}>Edit Goal</Text>
        <Text style={styles.stepsText}>Steps</Text>

        <View style={styles.stepView}>
          <FlatList
            data={data}
            keyExtractor={item => Math.random()}
            renderItem={({item, index}) => {
              console.log(index);
              return (
                <View style={styles.radioButtonView}>
                  <View style={styles.radioView}>
                    <RadioButton
                      color="black"
                      value="first"
                      status={indexes.includes(index) ? 'checked' : 'unchecked'}
                      onPress={() => radioValue(index)}
                    />
                    <Text style={styles.step}>{item.step}</Text>
                  </View>
                  <TouchableOpacity onPress={() => Remove_Item(index)}>
                    {/* <Entypo name='cross' size={20} style={styles.crossIcon} /> */}
                    <Image source={cross} />
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
                status={indexes.includes() ? 'checked' : 'unchecked'}
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
              <Image source={addIcon} />
              <Text style={styles.anotherstep}>Add another step</Text>
            </TouchableOpacity>
          )}
        </View>

        <Text style={styles.steps}>Edit your goal</Text>
        <TextInput
          style={styles.input2}
          value={goalInput}
          onChangeText={(e)=>setGoalInput(e)}
        />
        {/* <Text>AAA</Text> */}
        <View style={styles.goaldueDate}>
          <Text onPress={toCalendar} style={styles.editGoalDate}>
            Click To Edit Due Date
          </Text>
        </View>
      </View>

      <View>
        <GoalUpdateModaal
          modalVisible={visible}
          setModalVisible={setVisible}
          requestClose={() => setVisible(false)}
        />
        <Footer iconName={'check'} onPress={()=>toCalendar(true)} />
      </View>
    </View>
  );
};

export default EditGoal;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  input2: {
    // paddingHorizontal:scale(20),
    borderWidth: 1,
    backgroundColor: 'white',
    marginHorizontal: scale(20),
    borderColor: 'white',
    borderRadius: moderateScale(25),
    paddingLeft: scale(20),
    marginTop: verticalScale(10),
    textAlignVertical: 'top',
    paddingBottom:verticalScale(35)


},
  editGoalText: {
    marginHorizontal: scale(20),
    color: 'black',
    fontWeight: 'bold',
    fontSize: moderateScale(25),
    marginTop: verticalScale(30),
  },
  steps: {
    color: 'black',
    fontSize: moderateScale(20),
    fontWeight: '500',
    marginHorizontal: scale(20),
    marginTop: verticalScale(15),
    // marginBottom:scale(30)
  },
  stepsText: {
    color: 'black',
    fontSize: moderateScale(20),
    fontWeight: '500',
    marginHorizontal: scale(20),
    marginTop: verticalScale(15),
    marginBottom: scale(30),
  },
  editGoalDate: {
    color: 'black',
    textAlign: 'center',
    fontWeight: '500',
    marginVertical: verticalScale(60),
    width: '38%',
    borderBottomWidth: 1,
    marginLeft: '53%',
    // width:'50%'
  },
  stepView: {
    // marginTop: verticalScale(20),
    // height: verticalScale(120)
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
  },
  crossIcon: {
    color: 'black',
  },
  textInputView: {
    // borderWidth: 1,
    marginRight: scale(20),
    marginLeft: scale(20),
    // marginTop:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stepInput: {
    // backgroundColor: 'white',
    color: 'black',
    width: '80%',
    // borderWidth: 1,
    borderRadius: moderateScale(20),
    // borderColor: 'red',
    // marginHorizontal:10,
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
  },
  input: {
    paddingBottom: verticalScale(50),
  },
});
