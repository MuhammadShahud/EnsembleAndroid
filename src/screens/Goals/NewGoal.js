import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import Header from '../../components/Header/header';
import Footer from '../../components/footer/Footer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {ButtonColor} from '../../../assets/colors/colors';
import {addIcon, cross} from '../../../assets/images/images';
import DashesGoals from '../../components/Goals/dashesGoals';
import Cros from '../../../assets/images/Cros'
import AdIcon from '../../../assets/images/AdIcon'
import { PoppinsBold, PoppinsMedium, PoppinsRegular, PoppinsSemiBold } from '../../../assets/fonts/Fonts';
import { useSelector } from 'react-redux';
import { USER } from '../../redux/Reducers/AuthReducer';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import Entypo from 'react-native-vector-icons/Entypo'



const NewGoal = () => {
  const navigation = useNavigation();
  const [value, setValue] = React.useState('');
  const [addStep, setAddStep] = React.useState(false);
  const [indexes, setIndex] = React.useState([]);
  const [data, setData] = React.useState([]);
  const [goalInput, setGoalInput] = React.useState('')
  const userData = useSelector(USER);


  const toCalendar = () => {
  
    let array = [];

    data.map((d, i) => {
      console.log('indexEnd1', goal);
      console.log('dataaaaaa', d, i);
      const obj = {
        step: d.title,
        num: i + 1,
      };
      array.push(obj)
      console.log('index', goal);

    });
    goal.steps = array;
    goal.goal = goalInput;
    goal.employeeId = userData.id;
    goal.companyId = userData.companyId;
    console.log('indexEnd2', goal);

    navigation.navigate('calender',{goal});
    
  };

  let goal = {
    goal: '',
    dueDate: '',
    steps: [],
  };
  
  
  
  const Remove_Item = ind => {
    const inititial_state = data.filter((item, index) => {
      return index != ind;
    });
    setData(inititial_state);
  };
  
  const addItem = async () => {
    setData(prev => [...prev, {title: value}]);
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
  return (
    <View style={styles.mainView}>
      <View>
        <Header />
        <DashesGoals color={1}/>

        <View style={styles.firstView}>
          <Text style={styles.goal}>Set a New Goal</Text>
          <Text style={styles.setGoal}>Lets set your new goal</Text>
          <TextInput
            style={styles.input}
            onChangeText={e => setGoalInput(e)}
            placeholder="Type your new goal..."
            placeholderTextColor={'#BBBBBB'}
          />
          <Text style={styles.planText}>
            Plan the steps to achieve your goal
          </Text>
        </View>
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
                      status={
                       'unchecked'
                      }
                      onPress={() => radioValue(item.title)}
                      />
                    <Text style={styles.step}>{item.title}</Text>
                  </View>
                  <TouchableOpacity onPress={() => Remove_Item(index)}>
                    <Cros/>
                    {/* <Image source={cross} /> */}
                    {/* <Entypo name='cross' size={20} style={styles.crossIcon} /> */}
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
                placeholder="Add"
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
              <AdIcon/>
              <Text style={styles.anotherstep}>Add another step</Text>
            </TouchableOpacity>
          )}
        </View>

        <View></View>
      </View>
      <View>
        <Footer onPress={toCalendar} iconName={'chevron-right'} />
      </View>
    </View>
  );
};

export default NewGoal;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  goal: {
    color: 'black',
    fontSize: moderateScale(24),
    fontFamily:PoppinsSemiBold,
    paddingHorizontal: scale(20),
  },
  firstView: {
    marginTop: verticalScale(50),
  },
  setGoal: {
    color: 'black',
    paddingHorizontal: scale(20),
    fontFamily:PoppinsRegular,
    fontSize:moderateScale(14),
    marginTop:verticalScale(-3)
  },
  input: {
    // paddingHorizontal:scale(20),
    borderWidth: 1,
    backgroundColor: 'white',
    marginHorizontal: scale(20),
    borderColor: 'white',
    borderRadius: moderateScale(20),
    paddingLeft: scale(20),
    height: '30%',
    // paddingVertical: scale(30),
    // height:verticalScale(100),
    marginTop: verticalScale(10),
    textAlignVertical: 'top',
  },
  planText: {
    marginTop: verticalScale(20),
    color: 'black',
    fontSize: moderateScale(25),
    fontFamily:PoppinsSemiBold,
    paddingHorizontal: scale(20),
  },
  radioView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: scale(20),
  },
  step: {
    color: 'black',
  },
  stepView: {
    // marginTop: verticalScale(20),
    // height: verticalScale(120)
    marginTop: verticalScale(-30),
  },
  icon: {
    flexDirection: 'row',
    marginHorizontal: scale(25),
    alignItems: 'center',
    marginTop: verticalScale(5),
  },
  anotherstep: {
    color: 'black',
    paddingLeft: scale(5),
    color:'#696969',
    fontFamily:PoppinsRegular
  },
  stepInput: {
    color: 'black',
    width: '80%',
    borderRadius: moderateScale(20),
    paddingLeft: 0,
  },
  textInputView: {
    marginRight: scale(20),
    marginLeft: scale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  crossIcon: {
    color: 'black',
  },
  checkIcon: {
    color: ButtonColor,
  },
  radioButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: scale(20),
  },
  circleIcon: {
    marginLeft: 2,
    color: 'black',
  },
});
