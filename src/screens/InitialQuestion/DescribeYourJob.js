import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import QuestionHeader from '../../components/Header/QuestionHeader'
import Footer from '../../components/footer/Footer'
import { useNavigation } from '@react-navigation/native'
import Questions from '../../components/Question Text/Questions'
import InputField from '../../components/Input Fields/InputField'
import { scale, verticalScale } from 'react-native-size-matters'
import Dashes from '../../components/Question Text/dashes'

const DescribeYourJob = () => {
    const navigation=useNavigation();
  return (
    <View style={styles.mainView}>
            <QuestionHeader/>
            <Dashes color={6}/>
            <View style={{justifyContent:'center',height:'75%'}}>
            <Questions title='How would you describe your job/role to a group of 5 years olds?'/>
            <InputField inputStyle={styles.input} placeholder='“I give machines a brain to help them learn and be smarter.”'/>
        </View>
        <View>
            <Footer powered={{color:'black'}} ensemble={{color:'black'}} iconName={'chevron-right'} onPress={()=>navigation.navigate('achievements')}/>
        </View>
    </View>
  )
}

export default DescribeYourJob

const styles = StyleSheet.create({
    mainView:{
        flex:1,
        justifyContent:'space-between'
    },
    input:{
        paddingBottom:verticalScale(50),
        // paddingHorizontal:scale(20)
    }
})