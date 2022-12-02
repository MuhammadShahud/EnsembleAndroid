import { StyleSheet, Text, TextInput, View ,Alert, StatusBar,} from 'react-native'
import React,{useState,useEffect} from 'react'
import QuestionHeader from '../../components/Header/QuestionHeader'
import Footer from '../../components/footer/Footer'
import { useNavigation } from '@react-navigation/native'
import Questions from '../../components/Question Text/Questions'
import InputField from '../../components/Input Fields/InputField'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { color } from 'react-native-reanimated'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Feather from 'react-native-vector-icons/Feather'
import { PoppinsRegular } from '../../../assets/fonts/Fonts'
// import {Dropdown} from 'react-native-element-dropdown';
// import axios from 'axios';



const About = () => {
    // const [countryData, setCountryData] = useState([]);
    // const [country, setCountry] = useState(null);
    // const [countryName, setCountryName] = useState(null);
    // const [stateName, setStateName] = useState(null);
    // const [cityName, setCityName] = useState(null);
    // const [isFocus, setIsFocus] = useState(false);

    // useEffect(() => {
    //     var config = {
    //       method: 'get',
    //       url:'https://api.countrystatecity.in/v1/countries',
    //       headers: {
    //         'X-CSCAPI-KEY': 'RDBzdTRGMHU2Nkg5WGR6VXBjMlhLSEZuek51RFJGSllSUlVaZ1JNRw=='
    //       },
    //     };


    //     axios(config)
    //     .then(response => {
    //       console.log(JSON.stringify(response.data));
    //       var count = Object.keys(response.data).length;
    //       let countryArray = [];
    //       for (var i = 0; i < count; i++) {
    //         countryArray.push({
    //           value: response.data[i].iso2,
    //           label: response.data[i].name,
    //         });
    //       }
    //       setCountryData(countryArray);
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // }, []);



    const navigation = useNavigation();
    return (
        <View style={styles.mainView}>
            <View style={styles.firstView}>
                <QuestionHeader />
                <Questions title='Hi John!' questionText={{ fontSize: moderateScale(30), marginBottom: verticalScale(5), marginTop: verticalScale(30) }} />
                <Text style={styles.Text}>We want to know more about you</Text>
                <View style={styles.phoneView}>
                    <Text style={styles.phoneText}>Enter your work phone number</Text>
                    <InputField inputStyle={styles.input} placeholder='0213 456 789' />

                </View>


                {/* <View style={styles.phoneView}>
                    <Text style={styles.phoneText}>Your date of birth</Text>
                    <View style={styles.dateView}>

                        <TextInput placeholder='2nd july 2022' style={styles.dateInput} />
                        <Fontisto name='date' size={15} style={styles.dateIcon} color='black' />

                    </View>

                </View> */}

                {/* <View style={styles.phoneView}>
                    <Text style={styles.phoneText}>Your Location</Text>
                    <View style={styles.dateView}>

                        <TextInput placeholder='Scranton' style={styles.dateInput} />
                        <Feather name='chevron-down' size={20} style={styles.dateIcon} color='black' />

                    </View>
                </View> */}




                {/* for dropdown country */}

                {/* <Dropdown
          style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={countryData}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select country' : '...'}
          searchPlaceholder="Search..."
          value={country}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setCountry(item.value);
            handleState(item.value);
            setCountryName(item.label);
            setIsFocus(false);
          }}
        /> */}




















                <View style={styles.phoneView}>
                    <Text style={styles.publicText}>Anything else you want to publicly share about yourself?</Text>
                    <InputField inputStyle={styles.orangeInput} placeholder='I like oranges' />
                </View>

            </View>
            <View>
                <Footer powered={{color:'black'}} ensemble={{color:'black'}} iconName={'chevron-right'} onPress={() => navigation.navigate('camera')} />
            </View>
        </View>
    )
}

export default About

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
        borderRadius: moderateScale(15)
        // textAlignVertical: 'center',
    },
    Text: {
        marginHorizontal: scale(20),
        color: '#5C5C5C',
        fontFamily:PoppinsRegular
    },
    phoneText: {
        marginHorizontal: scale(20),
        color: 'black',
        fontFamily:PoppinsRegular

    },
    phoneView: {
        marginTop: verticalScale(20)
    },
    publicText: {
        marginHorizontal: scale(20),
        // marginLeft:scale(17),
        // marginRight:scale(100),
        color: 'black',
        lineHeight: verticalScale(20),
        fontFamily:PoppinsRegular

    },
    firstView: {
    },
    dateInput: {
        // borderWidth: 1,
        // backgroundColor: 'white',
        marginHorizontal: scale(20),
        // borderColor: 'white',
        borderRadius: moderateScale(25),
        //    paddingHorizontal:scale(20),
        // marginTop: verticalScale(10),
    },
    dateView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        marginHorizontal: scale(20),
        borderRadius: moderateScale(20),
        marginTop: verticalScale(10)
    },
    dateIcon: {
        marginRight: scale(20)
    }
})