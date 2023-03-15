import {StyleSheet, Text, View, ScrollView, KeyboardAvoidingView} from 'react-native';
import React, {useState, useEffect} from 'react';
import QuestionHeader from '../../components/Header/QuestionHeader';
import Footer from '../../components/footer/Footer';
import {useNavigation} from '@react-navigation/native';
import Questions from '../../components/Question Text/Questions';
import InputField from '../../components/Input Fields/InputField';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import {PoppinsRegular} from '../../../assets/fonts/Fonts';
import SelectList from 'react-native-dropdown-select-list';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {USER} from '../../redux/Reducers/AuthReducer';
import {FlashMessage, PatchUser} from '../../redux/Actions/AuthAction';

const About = props => {
  const [selected, setSelected] = React.useState('');
  let questions = props.route.params.questions;
  const [number, setNumber] = useState();
  const [bio, setBio] = useState();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userData = useSelector(USER);
  let profileData = {};

  const data = [
    //   {key:'1',value:'Select One'},
    {value: 'Afghanistan'},
    {value: 'Albania'},
    {value: 'Algeria'},
    {value: 'Angola'},
    {value: 'Antigua and Barbuda'},
    {value: 'Argentina'},
    {value: 'Armenia'},
    {value: 'Australia'},
    {value: 'Austria'},
    {value: 'Azerbaijan	'},
    {value: 'Bahamas'},
    {value: 'Bahrain'},
    {value: 'Bangladesh'},
    {value: 'Barbados'},
    {value: 'Belarus'},
    {value: 'Belgium'},
    {value: 'Belize'},
    {value: 'Benin'},
    {value: 'Bhutan'},
    {value: 'Bolivia'},
    {value: 'Bosnia and Herzegovina	'},
    {value: 'Botswana'},
    {value: 'Brazil'},
    {value: 'Brunei'},
    {value: 'Bulgaria'},
    {value: 'Burkina Faso	'},
    {value: 'Burundi'},
    {value: 'Côte dIvoire'},
    {value: 'Cabo Verde'},
    {value: 'Cambodia'},
    {value: 'Cameroon'},
    {value: 'Canada'},
    {value: 'Central African Republic	'},
    {value: 'Chad'},
    {value: 'Chile'},
    {value: 'China'},
    {value: 'Colombia'},
    {value: 'Comoros'},
    {value: 'Congo (Congo-Brazzaville)	'},
    {value: 'Costa Rica	'},
    {value: 'Croatia'},
    {value: 'Cuba'},
    {value: 'Cyprus'},
    {value: 'Czechia (Czech Republic)	'},
    {value: 'Democratic Republic of the Congo'},
    {value: 'Denmark'},
    {value: 'Djibouti'},
    {value: 'Dominica'},
    {value: 'Dominican Republic	'},
    {value: 'Ecuador'},
    {value: 'Egypt'},
    {value: 'El Salvador	'},
    {value: 'Equatorial Guinea	'},
    {value: 'Eritrea'},
    {value: 'Estonia'},
    {value: 'Eswatini (fmr. "Swaziland")	'},
    {value: 'Ethiopia'},
    {value: 'Fiji'},
    {value: 'Finland'},
    {value: 'France'},
    {value: 'Gabon'},
    {value: 'Gambia'},
    {value: 'Georgia'},
    {value: 'Germany'},
    {value: 'Ghana'},
    {value: 'Greece'},
    {value: 'Grenada'},
    {value: 'Guatemala'},
    {value: 'Guinea'},
    {value: 'Guinea-Bissau	'},
    {value: 'Guyana'},
    {value: 'Haiti'},
    {value: 'Holy See	'},
    {value: 'Honduras'},
    {value: 'Hungary'},
    {value: 'Iceland'},
    {value: 'India'},
    {value: 'Indonesia'},
    {value: 'Iran'},
    {value: 'Iraq'},
    {value: 'Ireland'},
    {value: 'Israel'},
    {value: 'Italy'},
    {value: 'Jamaica'},
    {value: 'Japan'},
    {value: 'Jordan'},
    {value: 'Kazakhstan'},
    {value: 'Kenya'},
    {value: 'Kiribati'},
    {value: 'Kuwait'},
    {value: 'Kyrgyzstan'},
    {value: 'Laos'},
    {value: 'Latvia'},
    {value: 'Lebanon'},
    {value: 'Lesotho'},
    {value: 'Liberia'},
    {value: 'Libya'},
    {value: 'Liechtenstein'},
    {value: 'Lithuania'},
    {value: 'Luxembourg'},
    {value: 'Madagascar'},
    {value: 'Malawi'},
    {value: 'Malaysia'},
    {value: 'Maldives'},
    {value: 'Mali'},
    {value: 'Malta	'},
    {value: 'Marshall Islands	'},
    {value: 'Mauritania'},
    {value: 'Mauritius'},
    {value: 'Mexico'},
    {value: 'Micronesia'},
    {value: 'Moldova'},
    {value: 'Monaco'},
    {value: 'Mongolia'},
    {value: 'Montenegro'},
    {value: 'Morocco'},
    {value: 'Mozambique'},
    {value: 'Myanmar (formerly Burma)	'},
    {value: 'Namibia'},
    {value: 'Nauru'},
    {value: 'Nepal'},
    {value: 'Netherlands'},
    {value: 'New Zealand	'},
    {value: 'Nicaragua'},
    {value: 'Niger'},
    {value: 'Nigeria'},
    {value: 'North Korea	'},
    {value: 'North Macedonia	'},
    {value: 'Norway'},
    {value: 'Oman'},
    {value: 'Pakistan'},
    {value: 'Palau'},
    {value: 'Palestine State	'},
    {value: 'Panama'},
    {value: 'Papua New Guinea	'},
    {value: 'Paraguay'},
    {value: 'Peru'},
    {value: 'Philippines'},
    {value: 'Poland'},
    {value: 'Portugal'},
    {value: 'Qatar'},
    {value: 'Romania'},
    {value: 'Russia'},
    {value: 'Rwanda'},
    {value: 'Saint Kitts and Nevis	'},
    {value: 'Saint Lucia	'},
    {value: 'Saint Vincent and the Grenadines	'},
    {value: 'Samoa'},
    {value: 'San Marino	'},
    {value: 'Sao Tome and Principe	'},
    {value: 'Saudi Arabia	'},
    {value: 'Senegal'},
    {value: 'Serbia'},
    {value: 'Seychelles'},
    {value: 'Sierra Leone'},
    {value: 'Singapore'},
    {value: 'Slovakia'},
    {value: 'Slovenia'},
    {value: 'Solomon Islands'},
    {value: 'Somalia'},
    {value: 'South Africa'},
    {value: 'South Korea'},
    {value: 'South Sudan'},
    {value: 'Spain'},
    {value: 'Sri Lanka	'},
    {value: 'Sudan'},
    {value: 'Suriname'},
    {value: 'Sweden'},
    {value: 'Switzerland'},
    {value: 'Syria'},
    {value: 'Tajikistan'},
    {value: 'Tanzania'},
    {value: 'Thailand'},
    {value: 'Timor-Leste	'},
    {value: 'Togo'},
    {value: 'Tonga'},
    {value: 'Trinidad and Tobago'},
    {value: 'Tunisia	'},
    {value: 'Turkey'},
    {value: 'Turkmenistan	'},
    {value: 'Tuvalu'},
    {value: 'Uganda'},
    {value: 'Ukraine'},
    {value: 'United Arab Emirates	'},
    {value: 'United Kingdom	'},
    {value: 'United States of America	'},
    {value: 'Uruguay'},
    {value: 'Uzbekistan'},
    {value: 'Vanuatu'},
    {value: 'Venezuela'},
    {value: 'Vietnam'},
    {value: 'Yemen'},
    {value: 'Zambia'},
    {value: 'Zimbabwe'},
  ];

  const forward = () => {

    if(number && selected && bio){
    console.log('Asdsadsadas', number, selected, bio);
    profileData.number = number;
    profileData.location = selected;
    profileData.publicBio = bio;

    const obj = {
      questions,
      profileData,
      firstTimeQuestion:false
    };

    dispatch(PatchUser(obj, navigation, 'camera', userData?.id));
  }else{
    FlashMessage({
      message: "Must fill all the fields",
      type: 'danger',
    });
  }
  };
  const title = `Hi ${userData?.name}!`;

  return (
    <View style={styles.mainView}>
      <QuestionHeader />
        {/* <KeyboardAvoidingView behavior='padding'> */}
      <ScrollView contentContainerStyle={styles.firstView}>
    {/* <KeyboardAwareScrollView extraHeight={120} enableOnAndroid={true}> */}

        <Questions
          title={title}
          questionText={{
            fontSize: moderateScale(30),
            marginBottom: verticalScale(5),
            marginTop: verticalScale(30),
          }}
        />
        <Text style={styles.Text}>We want to know more about you</Text>
        <View style={styles.phoneView}>
          <Text style={styles.phoneText}>Enter your work phone number</Text>
          <InputField
            onChangeText={setNumber}
            inputStyle={styles.input}
            placeholder="0213 456 789"
            />
        </View>

        <View style={styles.phoneView}>
          <Text style={styles.phoneText}>Your Location</Text>

          <SelectList
            style={styles.inside}
            //   onSelect={() => alert(selected)}
            setSelected={setSelected}
            data={data}
            arrowicon={
              <Feather name="chevron-down" size={15} color={'black'} />
            }
            searchicon={<FontAwesome name="search" size={12} color={'black'} />}
            search={true}
            maxHeight="100"
            boxStyles={styles.boxStyle} //override default styles
            defaultOption={{value: 'Select '}} //default selected option
            dropdownStyles={styles.dropdownStyles}
            dropdownTextStyles={styles.dropdownTextStyles}
            dropdownItemStyles={styles.dropdownItemStyles}
            />
        </View>

        <View style={styles.phoneView}>
          <Text style={styles.publicText}>
            Anything else you want to publicly share about yourself?
          </Text>
          <InputField
            onChangeText={setBio}
            inputStyle={styles.orangeInput}
            placeholder="I like oranges"
            />
        </View>
      </ScrollView>
            {/* </KeyboardAvoidingView> */}
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

export default About;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  input: {
    paddingBottom: verticalScale(10),
    textAlignVertical: 'center',

    // paddingHorizontal:scale(20)
  },
  orangeInput: {
    paddingBottom: verticalScale(30),
    borderRadius: moderateScale(15),
    marginBottom: verticalScale(20),
  },
  Text: {
    marginHorizontal: scale(20),
    color: '#5C5C5C',
    fontFamily: PoppinsRegular,
  },
  phoneText: {
    marginHorizontal: scale(20),
    color: 'black',
    fontFamily: PoppinsRegular,
  },
  phoneView: {
    marginTop: verticalScale(20),
  },
  publicText: {
    marginHorizontal: scale(20),
    color: 'black',
    lineHeight: verticalScale(20),
    fontFamily: PoppinsRegular,
  },
  firstView: {
    height:'150%'
  },
  dateInput: {
    marginHorizontal: scale(20),
    borderRadius: moderateScale(25),
  },
  dateView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginHorizontal: scale(20),
    borderRadius: moderateScale(20),
    marginTop: verticalScale(10),
  },
  dateIcon: {
    marginRight: scale(20),
  },
  boxStyle: {
    backgroundColor: 'white',
    marginVertical: verticalScale(10),
    placeholderTextColor: 'black',
    borderColor: 'white',
    borderRadius: moderateScale(50),
    marginHorizontal: scale(20),
  },

  dropdownStyles: {
    backgroundColor: 'white',
    color: 'black',
    borderColor: 'white',
    marginTop: 0,
    marginHorizontal: scale(20),
  },
  dropdownTextStyles: {
    color: 'black',
  },
});
