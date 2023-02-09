import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import QuestionHeader from '../../components/Header/QuestionHeader'
import Footer from '../../components/footer/Footer'
import { useNavigation } from '@react-navigation/native'
import Questions from '../../components/Question Text/Questions'
import InputField from '../../components/Input Fields/InputField'
import { scale, verticalScale } from 'react-native-size-matters'
import Dashes from '../../components/Question Text/dashes'
import { FlashMessage } from '../../redux/Actions/AuthAction'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Achievements = (props) => {
    const [desc, setDesc] = useState()
    let questions = props.route.params.questions;

    const navigation = useNavigation();

    const forward = () => {
        if(desc){
        console.log('Asdsadsadas', desc);
        questions.achievment = desc;
        console.log('questions', questions);
        navigation.navigate('about', { questions });
        }else{
            FlashMessage({
              message: "Must fill all the fields",
              type: 'danger',
            });
          }
    };
    return (

        <View style={styles.mainView}>

            <QuestionHeader />
            <Dashes color={5} />
        <ScrollView contentContainerStyle={{height:'150%'}}>
        {/* <KeyboardAwareScrollView enableOnAndroid={true}> */}


            <View
            style={{marginTop:verticalScale(100)}}
            //  style={{ justifyContent: 'center', height: '100%' }}
            >
                <Questions title='Whats’s an achievement you are proud of?' />
                <InputField onChangeText={setDesc} inputStyle={styles.input} placeholder='Don’t be shy. You can tell us' />
            </View>
                {/* </KeyboardAwareScrollView> */}
                 </ScrollView>
            <View>
                <Footer powered={{ color: 'black' }} ensemble={{ color: 'black' }} iconName={'chevron-right'} onPress={() => forward()} />
            </View>
        </View>
    )
}

export default Achievements

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'space-between'
    },
    input: {
        paddingBottom: verticalScale(50),
        // paddingHorizontal:scale(20)
    }
})