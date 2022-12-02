import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { add, edit, editPicture, notiLogo } from '../../../assets/images/images'
import Header from '../../components/Header/header'
import EditDetails from '../../components/EditDetails/EditDetails'
import EditButtons from '../../components/EditDetails/EditButtons'
import { useSelector } from 'react-redux'
import { COMPANY, USER } from '../../redux/Reducers/AuthReducer'

const EditProfile = (props) => {

    const userData = props.route.params.userData;
    const company = useSelector(COMPANY)
    console.log('userData',userData);


    return (
        <View style={styles.mainView}>

                <Header source={notiLogo} />
            <ScrollView >
                <Image source={{uri:`https://onboard-backendd.herokuapp.com/${userData.profilePic}`}} style={styles.editImage} />
                <View>

                    <EditDetails  detail1={userData.questions.jobTitle} detail2={company.companyName} title={userData.name} source={edit} />
                    <EditDetails detail1={userData.profileData.number}  title='Phone Number' source={edit} />
                    <EditDetails detail1={userData.profileData.dOB} title='Date Of Birth' source={edit} />
                    <EditDetails detail1={userData.profileData.location}  title='Location' source={edit} />
                    <EditDetails detail1={userData.questions.threeDesc} title='Describe Yourself in 3 Words' source={edit} />
                    {/* <EditDetails detail1='Lorem ipsum dolor sit amet. In impedit aliquid nam minima iure At quas obcaecati aut iste eveniet ut voluptates expedita. Quo asperiores.' title='Describe Yourself in 3 Words' source={edit} /> */}
                    <EditButtons title='Tools' addImage={add} properties={['Adobe XD','Miro','Illustrator','Figma','Photoshop']} />
                    <EditButtons title='Rockstar Skills' addImage={add} properties={userData.questions.rockstarSkills}/>
                    <EditButtons title='What you enjoy doing the most?'  addImage={add} properties={userData.questions.Hobbies} />
                    <EditDetails detail1={userData.questions.descKid} title='How Would you describe job?' source={edit} />
                    <EditDetails detail1={userData.questions.achievment} title='What is ONE of the coolest things?' source={edit} />
                   

                </View>
            <View style={styles.footerView}>
                <Text style={styles.powered}>Powered by</Text>
                <Text style={styles.ensemble}>ENSEMBLE</Text>
            </View>
            </ScrollView>
        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'space-between',
        // marginBottom:20
        // marginHorizontal:scale(20)
    },
    footerView: {
        marginHorizontal: scale(20),
        marginBottom: verticalScale(40),

        marginTop:verticalScale(50)
    },
    powered: {
        color: '#8C8C8C',
    },
    ensemble: {
        color: '#8C8C8C',
        fontWeight: 'bold',
        fontSize: moderateScale(20)


    },
    editImage: {
        marginTop: verticalScale(20),
        marginHorizontal:scale(20),
        width: scale(130),
        height: verticalScale(130),
        overflow:'hidden',
        borderRadius: moderateScale(65),
        

    }
})