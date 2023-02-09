import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { ButtonColor } from '../../../assets/colors/colors'
import { PoppinsSemiBold } from '../../../assets/fonts/Fonts'
import Communicationn from '../../../assets/images/communicationn'
import Problemss from '../../../assets/images/problemss'
import Critical from '../../../assets/images/criticall'
import Strong from '../../../assets/images/strongg'
import Managment from '../../../assets/images/managmentt'
import Profession from '../../../assets/images/professionalss'
import Leader from '../../../assets/images/leaderr'
import Team from '../../../assets/images/teamss'
import Reading from '../../../assets/images/readingg'
import Movies from '../../../assets/images/moviess'
import Cinema from '../../../assets/images/cinemaa'
import Photography from '../../../assets/images/Photo'
import Network from '../../../assets/images/networkk'
import Gaming from '../../../assets/images/gamingg'

const RockstarSkills = (props) => {
    const [btnState, setBtnState] = useState(false)
    const [btnState1, setBtnState1] = useState(false)
    const [btnTextColor, setBtnTextColor] = useState(false)
    const [btnTextColor1, setBtnTextColor1] = useState(false)
    const changeButtonColor = () => {
        setBtnState(!btnState)
        setBtnTextColor(!btnTextColor)
        setSkill();

    }

const setSkill = () =>{
    let skills = props.rockstarSkills;
        if(!btnState){
            console.log('1',skills);
            skills.push(props.firstTitle)
            console.log('2',skills);

            props.setRockstarSkills(skills)

        }if(btnState){
            console.log('3',skills);

           skills = skills.filter((s)=> s!==props.firstTitle)
            console.log('4',skills);

            props.setRockstarSkills(skills)
        }
}

    const changeButtonColor1 = () => {
        setBtnState1(!btnState1)
        setBtnTextColor1(!btnTextColor1)
        let skills = props.rockstarSkills;
        if(!btnState1){
            skills.push(props.secondTitle)
            props.setRockstarSkills(skills)
        }if(btnState1){
            skills = skills.filter((s)=> s!==props.secondTitle)
            props.setRockstarSkills(skills)
        }

    }

    const changeTextColor = () => {
        setBtnTextColor(!btnTextColor)
    }
    const changeTextColor1 = () => {
        setBtnTextColor1(!btnTextColor1)
    }

    return (
        <View style={styles.mainView}>

            <View style={styles.firstView}>
                

                    <TouchableOpacity onPress={changeButtonColor} style={[styles.communicationView, { backgroundColor: btnState ? ButtonColor : 'white' }]}>
                    {/* <Image source={props.firstImage} /> */}
                    {props.photographypic?<Photography/>:null}
                    {props.networkpic?<Network/>:null}
                    {props.gamingpic?<Gaming/>:null}
                    {props.firstPic?<Communicationn/>:null}
                    {props.secondPic?<Problemss/>:null}
                    {props.thirdPic?<Critical/>:null}
                    {props.fourthPic?<Strong/>:null}
                    <Text style={[styles.text, { color: btnTextColor ? 'white' : 'black' }]}>{props.firstTitle}</Text>
                </TouchableOpacity>
                

                <TouchableOpacity onPress={changeButtonColor1} style={[styles.managementView, { backgroundColor: btnState1 ? ButtonColor : 'white' }]}>

                    {/* <Image source={props.secondImage} /> */}
                    {props.firstEnjoy?<Reading/>:null}
                    {props.secondEnjoy?<Movies/>:null}
                    {props.thirdEnjoy?<Cinema/>:null}
                    {props.firstImage?<Managment/>:null}
                    {props.secondImage?<Profession/>:null}
                    {props.thirdImage?<Leader/>:null}
                    {props.fourthImage?<Team/>:null}
                    <Text style={[styles.text, { color: btnTextColor1 ? 'white' : 'black' }]}>{props.secondTitle}</Text>


                </TouchableOpacity>
            </View>

        </View>
    )
}

export default RockstarSkills

const styles = StyleSheet.create({
    mainView: {
        marginHorizontal: scale(20),
        marginBottom: verticalScale(5),
        marginTop: verticalScale(8)

    },
    firstView: {
        flexDirection: 'row',
        // justifyContent:'space-between',
    },
    communicationView: {
        flexDirection: 'row',
        // backgroundColor:'white',
        paddingHorizontal: scale(10),
        paddingVertical: verticalScale(7),
        borderRadius: moderateScale(40),
        marginRight: scale(10)
    },

    managementView: {
        flexDirection: 'row',
        // backgroundColor:'white',
        paddingHorizontal: scale(10),
        paddingVertical: verticalScale(7),
        borderRadius: moderateScale(40),
        marginRight: scale(10),


    },
    text: {
        // color:'yellow',
        // fontWeight:'900',
        fontFamily: PoppinsSemiBold,
        fontSize: moderateScale(12.5)


    }
})