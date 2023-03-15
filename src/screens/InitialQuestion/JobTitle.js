import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import QuestionHeader from '../../components/Header/QuestionHeader'
import Footer from '../../components/footer/Footer'
import Questions from '../../components/Question Text/Questions'
import InputField from '../../components/Input Fields/InputField'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { second } from '../../../assets/images/images'
import { useNavigation } from '@react-navigation/native'
import Dashes from '../../components/Question Text/dashes'

const JobTitle = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.mainView}>
        <QuestionHeader title={'The Plum Tree Group'}/>
        <Dashes color={2}/>
        <View style={{justifyContent:'center',height:'75%'}}>

        {/* <Image source={second} style={{alignSelf:'center'}}/> */}
        <Questions  title='What is your job title?'/>
        <InputField placeholder='UI/UX Designer' placeholderTextColor='#414141' inputStyle={styles.input}/>
        </View>
        <Footer powered={{color:'black'}} ensemble={{color:'black'}} iconName={'chevron-right'} onPress={()=>navigation.navigate('describeyourself')}/>
    </View>
  )
}

export default JobTitle

const styles = StyleSheet.create({
    mainView:{
        flex:1,
    },
    input:{
        borderRadius: moderateScale(15),
        paddingBottom:verticalScale(60),
        paddingTop:verticalScale(10)

    }
})