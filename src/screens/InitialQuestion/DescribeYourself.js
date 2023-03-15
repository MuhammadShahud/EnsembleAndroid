import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import QuestionHeader from '../../components/Header/QuestionHeader'
import Footer from '../../components/footer/Footer'
import Questions from '../../components/Question Text/Questions'
import { moderateScale, moderateVerticalScale, verticalScale } from 'react-native-size-matters'
import InputField from '../../components/Input Fields/InputField'
import { useNavigation } from '@react-navigation/native'
import Dashes from '../../components/Question Text/dashes'

export default function DescribeYourself() {
    const navigation=useNavigation();
    
  return (
    <View style={styles.mainView}>
        <QuestionHeader/>
        <Dashes color={3}/>
        <View style={{justifyContent:'center',height:'75%'}}>

        <Questions title={'Describe yourself in 3 words or less.'} questionText={styles.questionText}/>
        <InputField placeholder='Googler, Loyal, Smart, Sensitive...' inputStyle={styles.input} placeholderTextColor={'#414141'}/>
        </View>
        <View>
            <Footer powered={{color:'black'}} ensemble={{color:'black'}} iconName={'chevron-right'} onPress={()=>navigation.navigate('skills')}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainView:{
        flex:1,
        justifyContent:'space-between'
    },
    questionText:{
        fontSize:moderateScale(35)
    },
    input:{
        borderRadius: moderateVerticalScale(15),
        paddingBottom:verticalScale(60),
        paddingTop:verticalScale(10)
    }
})