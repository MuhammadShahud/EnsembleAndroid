import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import QuestionHeader from '../../components/Header/QuestionHeader'
import Footer from '../../components/footer/Footer'
import { useNavigation } from '@react-navigation/native'
import Questions from '../../components/Question Text/Questions'
import RockstarSkills from '../../components/Skills/RockstarSkills'
import { communication, gaming, hiking, idea, leadership, management, movies, network, photography, profession, reading, team, thinking, videography } from '../../../assets/images/images'
import Dashes from '../../components/Question Text/dashes'

const Skills = () => {
    const navigation=useNavigation();
  return (
    <View style={styles.mainView}>
            <QuestionHeader/>
            <Dashes color={5}/>
            <View style={{justifyContent:'center',height:'75%'}}>
            <Questions title='When you’re not working, what do you enjoy doing the most?'/>
            <RockstarSkills firstTitle='PHOTOGRAPHY' secondTitle='READING' firstImage={photography} secondImage={reading}/>
            <RockstarSkills firstTitle='NETWORKING' secondTitle='MOVIES' firstImage={network} secondImage={movies}/>
            <RockstarSkills firstTitle='GAMING' secondTitle='CINEMATOGRAPHY' firstImage={gaming} secondImage={videography}/>
            <RockstarSkills firstTitle='HIKING' secondTitle='OTHERS' firstImage={hiking} />
            {/* <RockstarSkills firstTitle='OTHERS'   /> */}
        </View>
        <View>
            <Footer powered={{color:'black'}} ensemble={{color:'black'}} iconName={'chevron-right'} onPress={()=>navigation.navigate('describeyourjob')}/>
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