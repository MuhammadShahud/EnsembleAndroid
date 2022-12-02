import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import QuestionHeader from '../../components/Header/QuestionHeader'
import Footer from '../../components/footer/Footer'
import { useNavigation } from '@react-navigation/native'
import Questions from '../../components/Question Text/Questions'
import InputField from '../../components/Input Fields/InputField'
import { scale, verticalScale } from 'react-native-size-matters'
import Dashes from '../../components/Question Text/dashes'

const Achievements = () => {
    const navigation=useNavigation();
  return (
    <View style={styles.mainView}>
            <QuestionHeader/>
            <Dashes color={7}/>
            <View style={{justifyContent:'center',height:'75%'}}>
            <Questions title='Whats’s an achievement you are proud of?'/>
            <InputField inputStyle={styles.input} placeholder='Don’t be shy. You can tell us'/>
        </View>
        <View>
            <Footer powered={{color:'black'}} ensemble={{color:'black'}} iconName={'chevron-right'} onPress={()=>navigation.navigate('about')}/>
        </View>
    </View>
  )
}

export default Achievements

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