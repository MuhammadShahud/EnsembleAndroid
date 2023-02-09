import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import QuestionHeader from '../../components/Header/QuestionHeader';
import Footer from '../../components/footer/Footer';
import {useNavigation} from '@react-navigation/native';
import Questions from '../../components/Question Text/Questions';
import RockstarSkills from '../../components/Skills/RockstarSkills';
import {
  communication,
  communicationn,
  idea,
  leadership,
  management,
  profession,
  team,
  thinking,
} from '../../../assets/images/images';
import Dashes from '../../components/Question Text/dashes';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {PoppinsSemiBold} from '../../../assets/fonts/Fonts';
import {ButtonColor} from '../../../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import { FlashMessage } from '../../redux/Actions/AuthAction';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Skills = props => {
  const [btnState, setBtnState] = useState(false);
  const [btnTextColor, setBtnTextColor] = useState(false);
  const [other, setOther] = useState();
  let questions = props.route.params.questions;
  const [show, setShow] = useState(false);
const [rockstarSkills, setRockstarSkills] = useState([])
  const changeButtonColor = () => {
    setBtnState(!btnState);
  };
  const changeColor = () => {
    setBtnState(!btnState);
    setShow(!show);
    setBtnTextColor(!btnTextColor);
  };
  const changeColor2 = () => {
    setBtnState(!btnState);
    setShow(!show);
    setBtnTextColor(!btnTextColor);
    console.log("others",other);
    let skills = rockstarSkills;
    skills.push(other);
    setRockstarSkills(skills);
    
    
  };
  const navigation = useNavigation();

  const forward = () => {

    if(rockstarSkills.length >0){
      console.log('Asdsadsadas', rockstarSkills);
      questions.rockstarSkills = rockstarSkills;
      console.log('questions', questions);
      navigation.navigate('enjoy',{questions});
    }else{
      FlashMessage({
        message: "Atleast select one option",
        type: 'danger',
      });
    }
   
  };
  return (
    <View style={styles.mainView}>
      <QuestionHeader />
      <Dashes color={2} />
      <ScrollView contentContainerStyle={{height:'150%'}}>
      {/* <KeyboardAwareScrollView enableOnAndroid={true}> */}


      <View
      style={{marginTop:verticalScale(100)}} 
      // style={{justifyContent: 'center', height: '75%'}}
      >
        <Questions title="What are your rockstar skills?" />
        <RockstarSkills
          firstTitle="COMMUNICATION"
          secondTitle="MANAGEMENT"
          firstImage='eee'
          rockstarSkills={rockstarSkills}
          setRockstarSkills={setRockstarSkills}
          firstPic='ABC'
          />
        <RockstarSkills
          firstTitle="PROBLEM SOLVING"
          secondTitle="PROFESSIONALISM"
          firstImage='qqq'
          rockstarSkills={rockstarSkills}
          setRockstarSkills={setRockstarSkills}
          secondPic='BBB'
          
          
          />
        <RockstarSkills
          firstTitle="CRITICAL THINKING"
          secondTitle="LEADERSHIP"
          firstImage={'aass'}
          rockstarSkills={rockstarSkills}
          setRockstarSkills={setRockstarSkills}
          thirdPic='ZZZ'

          
          />
        <RockstarSkills
          firstTitle="STRONG WORK ETHIC"
          secondTitle="TEAM WORK"
          firstImage={'qwqw'}
          rockstarSkills={rockstarSkills}
          setRockstarSkills={setRockstarSkills}
          fourthPic='SSS'
          
          
          />

        <TouchableOpacity
          // onPress={()=>setShow(true)}
          onPress={changeColor}
          style={[
            styles.communicationView,
            {backgroundColor: btnState ? ButtonColor : 'white'},
          ]}>
          <Image />
          <Text
            style={[styles.text, {color: btnTextColor ? 'white' : 'black'}]}>
            OTHERS
          </Text>
        </TouchableOpacity>

        {show ? (
          <View style={styles.input}>
            <TextInput
              placeholderTextColor="#414141"
              value={other}
              onChangeText={
                setOther
              }
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
      </ScrollView>
        {/* </KeyboardAwareScrollView> */}
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
  mainView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  communicationView: {
    flexDirection: 'row',
    paddingHorizontal: scale(19),
    paddingVertical: verticalScale(7),
    borderRadius: moderateScale(40),
    marginHorizontal: scale(20),
    width: '25%',
    marginTop: verticalScale(10),
    marginBottom: verticalScale(15),
  },
  text: {
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
    // width:'75%'
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
