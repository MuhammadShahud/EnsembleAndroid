import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {add, edit, editPicture, notiLogo} from '../../../assets/images/images';
import Header from '../../components/Header/header';
import EditDetails from '../../components/EditDetails/EditDetails';
import EditButtons from '../../components/EditDetails/EditButtons';
import {useDispatch, useSelector} from 'react-redux';
import {COMPANY, USER} from '../../redux/Reducers/AuthReducer';
import {PoppinsRegular, PoppinsSemiBold} from '../../../assets/fonts/Fonts';
import EditProfileButton from '../../components/EditProfileButton';
import {useNavigation} from '@react-navigation/native';
import UpdateInput from '../../components/UpdateInput';
import SelectList from 'react-native-dropdown-select-list';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { PatchUser } from '../../redux/Actions/AuthAction';

const EditProfile = props => {


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


  const navigation = useNavigation();
  const dispatch = useDispatch()

  const userData = props.route.params.userData;
  const company = useSelector(COMPANY);
  const [number, setNumber] = useState(userData.profileData.number)
  const [desc, setDesc] = useState(userData.questions.descKid)
  const [achievment, setAchievment] = useState(userData.questions.achievment)
  const [selected, setSelected] = React.useState(userData.profileData.location);
  const [skills, setSkills] = useState(userData.questions.rockstarSkills)
  const [enjoy, setEnjoy] = useState(userData.questions.Hobbies)

  const updateFunction = () =>{
    const obj = {
        profileData: {
            number: number,
            location: selected,
           
          },
          questions: {
            descKid: desc,
            achievment: achievment,
            rockstarSkills: skills,
            Hobbies: enjoy,
          },
    }

    dispatch(PatchUser(obj, navigation, 'Profile', userData?.id));

    console.log("object",obj);
  }


  console.log('userDataaaaaaaa',skills,enjoy, number,desc,achievment,selected);

  return (
    <View style={styles.mainView}>
      <Header source={notiLogo} />
      <ScrollView>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={{
                uri: `https://ensemble-backendd.herokuapp.com/${userData.profilePic}`,
              }}
              style={styles.editImage}
            />

            <EditDetails
              detail1={userData.jobTitle}
              detail2={company?.companyName}
              title={userData.name}
              source={edit}
              name="kuchbhi"
            />
          </View>
          <EditProfileButton
            onPress={updateFunction}
            EditText={'Update'}
            edit={'hehe'}
          />
          <UpdateInput
            placeholder={number}
            title={'Phone Number'}
            line={'aa'}
            onChangeText = {setNumber}
          />
          {/* <UpdateInput placeholder={'Pakistan'} title={'Location'} /> */}

          <View style={styles.phoneView}>
            <Text style={styles.text}>Your Location</Text>

            <SelectList
              style={styles.inside}
              //   onSelect={() => alert(selected)}
              setSelected={setSelected}
              data={data}
              arrowicon={
                <Feather name="chevron-down" size={15} color={'black'} />
              }
              searchicon={
                <FontAwesome name="search" size={12} color={'black'} />
              }
              search={true}
              maxHeight="100"
              boxStyles={styles.boxStyle} //override default styles
              defaultOption={{value: selected}} //default selected option
              dropdownStyles={styles.dropdownStyles}
              dropdownTextStyles={styles.dropdownTextStyles}
              dropdownItemStyles={styles.dropdownItemStyles}
            />
          </View>
          {/* <View style={{ width: '200%', height: '0.2%', backgroundColor: '#E0E0E0', marginTop: verticalScale(20) }}></View> */}
         
          <EditButtons
            cross={'aa'}
            input={'showInput'}
            addIcon={'aa'}
            title="Rockstar Skills"
            addImage={add}
            properties={skills}
            setSkills = {setSkills}
          />
          <EditButtons
            cross={'aa'}
            input={'showInput'}
            addIcon={'aa'}
            title="When you are not working, what do you enjoy doing the most?"
            addImage={add}
            properties={enjoy}
            setEnjoy={setEnjoy}
          />
          <UpdateInput
            placeholder={desc}
            title={'How Would you describe job to the group of 5 years old?'}
            line={'ss'}
            onChangeText = {setDesc}

          />
          <UpdateInput
            placeholder={achievment}
            title={'What is ONE of the coolest things you have ever done?'}
            line={'aa'}
            onChangeText = {setAchievment}

          />
        </View>
        <View style={styles.footerView}>
          <Text style={styles.powered}>Powered by</Text>
          <Text style={styles.ensemble}>ENSEMBLE</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'space-between',
    // marginHorizontal:scale(20)
  },
  footerView: {
    marginHorizontal: scale(20),
    marginBottom: verticalScale(40),

    marginTop: verticalScale(50),
  },
  powered: {
    color: 'black',
    fontFamily: PoppinsRegular,
  },
  ensemble: {
    color: 'black',
    // fontWeight: 'bold',
    fontFamily: PoppinsSemiBold,
    fontSize: moderateScale(20),
    marginTop: verticalScale(-5),
  },
  editImage: {
    marginTop: verticalScale(20),
    marginHorizontal: scale(20),
    width: scale(130),
    height: verticalScale(130),
    overflow: 'hidden',
    borderRadius: moderateScale(65),
  },
  phoneView: {
    marginTop: verticalScale(20),
  },
  text: {
    color: 'black',
    fontSize: moderateScale(18),
    fontFamily: PoppinsSemiBold,
    marginHorizontal: scale(20),
    // marginBottom:-10
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
  boxStyle: {
    backgroundColor: 'white',
    placeholderTextColor: 'black',
    borderColor: 'white',
    borderRadius: moderateScale(50),
    marginHorizontal: scale(20),
  },
});
