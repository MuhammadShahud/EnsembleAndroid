import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import QuestionHeader from '../../components/Header/QuestionHeader'
import Footer from '../../components/footer/Footer'
import { useNavigation } from '@react-navigation/native'
import Questions from '../../components/Question Text/Questions'
import RockstarSkills from '../../components/Skills/RockstarSkills'
import { communication, idea, leadership, management, profession, team, thinking } from '../../../assets/images/images'
import Dashes from '../../components/Question Text/dashes'

const Skills = () => {
    const navigation=useNavigation();
  return (
    <View style={styles.mainView}>
            <QuestionHeader/>
            <Dashes color={4}/>
            <View style={{justifyContent:'center',height:'75%'}}>
            <Questions title='What are your rockstar skills?'/>
            <RockstarSkills firstTitle='COMMUNICATION' secondTitle='MANAGEMENT' firstImage={communication} secondImage={management}/>
            <RockstarSkills firstTitle='PROBLEM SOLVING' secondTitle='PROFESSIONALISM' firstImage={idea} secondImage={profession}/>
            <RockstarSkills firstTitle='CRITICAL THINKING' secondTitle='LEADERSHIP' firstImage={thinking} secondImage={leadership}/>
            <RockstarSkills firstTitle='STRONG WORK ETHIC' secondTitle='TEAM WORK' firstImage={idea} secondImage={team}/>
            {/* <RockstarSkills firstTitle='OTHERS'   /> */}
        </View>
        <View>
            <Footer powered={{color:'black'}} ensemble={{color:'black'}} iconName={'chevron-right'} onPress={()=>navigation.navigate('enjoy')}/>
        </View>
    </View>
  )
}

export default Skills

const styles = StyleSheet.create({
    mainView:{
        flex:1,
        justifyContent:'space-between'
    }
})