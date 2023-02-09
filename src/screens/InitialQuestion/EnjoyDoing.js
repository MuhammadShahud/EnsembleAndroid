import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import QuestionHeader from '../../components/Header/QuestionHeader';
import Footer from '../../components/footer/Footer';
import {useNavigation} from '@react-navigation/native';
import Questions from '../../components/Question Text/Questions';
import RockstarSkills from '../../components/Skills/RockstarSkills';
import {
  gaming,
  hiking,

  movies,
  network,
  photography,
  reading,
 
  videography,
} from '../../../assets/images/images';
import Dashes from '../../components/Question Text/dashes';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {ButtonColor} from '../../../assets/colors/colors';
import {PoppinsSemiBold} from '../../../assets/fonts/Fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import Hikingg from '../../../assets/images/hikingg'
import { FlashMessage } from '../../redux/Actions/AuthAction';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Skills = props => {
  const [btnState, setBtnState] = useState(false);
  const [btnState1, setBtnState1] = useState(false);
  const [btnTextColor, setBtnTextColor] = useState(false);
  const [btnTextColor1, setBtnTextColor1] = useState(false);
  const [other, setOther] = useState();
  let questions = props.route.params.questions;
  const [rockstarSkills, setRockstarSkills] = useState([]);
  const [show, setShow] = useState(false);

  const changeButtonColor = () => {
    setBtnState(!btnState);
    setBtnTextColor(!btnTextColor);
    let skills = rockstarSkills;
    if(!btnState){
        skills.push("HIKING")
        setRockstarSkills(skills)
    }if(btnState){
        skills = skills.filter((s)=> s!== "HIKING")
        setRockstarSkills(skills)
    }
  };
  const changeButtonColor1 = () => {
    setBtnState1(!btnState1);
  };
  const changeTextColor = () => {
    setBtnTextColor(!btnTextColor);
  };
  const changeTextColor1 = () => {
    setBtnTextColor1(!btnTextColor1);
  };

  const changeColor = () => {
    setBtnState1(!btnState1);
    setBtnTextColor1(!btnTextColor1);
    setShow(!show);
  };

  const changeColor2 = () => {
    setBtnState(!btnState);
    setShow(!show);
    setBtnTextColor(!btnTextColor);
    console.log('others', other);
    let skills = rockstarSkills;
    skills.push(other);
    setRockstarSkills(skills);
  };
  const navigation = useNavigation();

  const forward = () => {
    console.log('Asdsadsadas', rockstarSkills);

    if(rockstarSkills.length > 0){
    console.log('Asdsadsadas', rockstarSkills);
    questions.Hobbies = rockstarSkills;
    console.log('questions', questions);
    navigation.navigate('describeyourjob', {questions});
    }else{
      FlashMessage({
        message: "Must fill all the fields",
        type: 'danger',
      });
    }
  };
  return (
    <View style={styles.mainView}>
      <QuestionHeader />
      <Dashes color={3} />
      <ScrollView contentContainerStyle={{height:'150%'}}>
      {/* <KeyboardAwareScrollView enableOnAndroid={true}> */}


      <View 
      // style={{justifyContent: 'center', height: '75%'}}
      style={{marginTop:verticalScale(100)}}
      >
        <Questions title="When you’re not working, what do you enjoy doing the most?" />
        <RockstarSkills
          firstTitle="PHOTOGRAPHY"
          secondTitle="READING"
          // firstImage={photography}
          // secondImage={reading}
          rockstarSkills={rockstarSkills}
          setRockstarSkills={setRockstarSkills}
          firstEnjoy="AA"
          photographypic='eee'
          />
        <RockstarSkills
          firstTitle="NETWORKING"
          secondTitle="MOVIES"
          // firstImage={network}
          // secondImage={movies}
          rockstarSkills={rockstarSkills}
          setRockstarSkills={setRockstarSkills}
          secondEnjoy="aA"
          networkpic='rrr'
          
          />
        <RockstarSkills
          firstTitle="GAMING"
          secondTitle="CINEMATOGRAPHY"
          // firstImage={gaming}
          // secondImage={videography}
          rockstarSkills={rockstarSkills}
          setRockstarSkills={setRockstarSkills}
          thirdEnjoy="xx"
          gamingpic='www'
          
          />
        {/* <RockstarSkills firstTitle='HIKING' secondTitle='OTHERS' firstImage={hiking} /> */}

        <View style={styles.firstView}>
          <TouchableOpacity
            onPress={changeButtonColor}
            style={[
              styles.communicationView,
              {backgroundColor: btnState ? ButtonColor : 'white'},
            ]}>
            {/* <Image source={hiking} /> */}
            <Hikingg/>
            <Text
              style={[styles.text, {color: btnTextColor ? 'white' : 'black'}]}>
              HIKING
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            // onPress={()=>setShow(true)}
            onPress={changeColor}
            style={[
              styles.managementView,
              {backgroundColor: btnState1 ? ButtonColor : 'white'},
            ]}>
            <Image source={props.secondImage} />
            <Text
              style={[styles.text, {color: btnTextColor1 ? 'white' : 'black'}]}>
              OTHERS
            </Text>
          </TouchableOpacity>
        </View>

        {show ? (
          <View style={styles.input}>
            <TextInput
              placeholderTextColor="#414141"
              value={other}
              onChangeText={setOther}
              style={[styles.input, props.inputStyle]}
              placeholder="Write other option here.."
              multiline={true}
              />
            <TouchableOpacity style={styles.circleView} onPress={changeColor2}>
              <Entypo name="plus" size={20} color="white" />
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
        {/* </KeyboardAwareScrollView> */}
        </ScrollView>
      <View>
        <Footer
          powered={{color: 'black'}}
          ensemble={{color: 'black'}}
          iconName={'chevron-right'}
          onPress={() => forward()}
        />
      </View>
    </View>
  );
};

export default Skills;

const styles = StyleSheet.create({
  firstView: {
    flexDirection: 'row',
    // justifyContent:'space-between',
    marginHorizontal: scale(20),
    marginTop: verticalScale(10),
    marginBottom: verticalScale(15),
  },
  mainView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  communicationView: {
    flexDirection: 'row',
    // backgroundColor:'white',
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(7),
    borderRadius: moderateScale(40),
    marginRight: scale(10),
  },
  managementView: {
    flexDirection: 'row',
    // backgroundColor:'white',
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(7),
    borderRadius: moderateScale(40),
    marginRight: scale(10),
  },
  text: {
    // color:'yellow',
    // fontWeight:'900',
    fontFamily: PoppinsSemiBold,
    fontSize: moderateScale(12.5),
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'black',
    textAlignVertical: 'center',
    backgroundColor: 'white',
    marginHorizontal: scale(20),
    borderRadius: moderateScale(25),
  },
  circleView: {
    backgroundColor: '#2AB679',
    borderRadius: moderateScale(20),
    marginRight: scale(10),
    height: verticalScale(30),
    width: scale(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
