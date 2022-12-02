import { StyleSheet, Text, View, Image, CheckBox } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header/header'
import { halfloading, sketch } from '../../../assets/images/images'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { InterBold, InterRegular } from '../../../assets/fonts/Fonts'
import Footer from '../../components/footer/Footer'

import { useNavigation } from '@react-navigation/native'
import { Checkbox } from 'react-native-paper';
import { ButtonColor } from '../../../assets/colors/colors'


const Review = () => {
    const [checked, setChecked] = React.useState(false);
    const [checked1, setChecked1] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);
    const [checked3, setChecked3] = React.useState(false);
    const [checked4, setChecked4] = React.useState(false);

    const navigation = useNavigation();
    return (
        <View style={styles.mainView}>
            <View>

                <Header />
                <View style={styles.sketch}>

                    <Image source={sketch} />
                </View>
                <Text style={styles.text}>My organization takes measures to attract diverse talent.</Text>

                <View style={styles.checkboxView}>

                    <View>

                        <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                            color={ButtonColor}

                            onPress={() => {
                                setChecked(!checked);
                            }}
                        />
                        <Text style={styles.text1}>Strongly </Text>
                        <Text style={styles.text1}>Disagree </Text>

                    </View>
                    <View>

                        <Checkbox
                            status={checked1 ? 'checked' : 'unchecked'}
                            color={ButtonColor}

                            onPress={() => {
                                setChecked1(!checked1);
                            }}
                        />
                        <Text style={styles.text1}>Disagree </Text>

                    </View>
                    <View>

                        <Checkbox
                            status={checked2 ? 'checked' : 'unchecked'}
                            color={ButtonColor}

                            onPress={() => {
                                setChecked2(!checked2);
                            }}
                        />
                        <Text style={styles.text1}>Neutral </Text>

                    </View>

                    <View>

                        <Checkbox
                            status={checked3 ? 'checked' : 'unchecked'}
                            color={ButtonColor}
                            onPress={() => {
                                setChecked3(!checked3);
                            }}
                        />
                        <Text style={styles.text1}>Agree </Text>

                    </View>

                    <View>

                        <Checkbox
                            status={checked4 ? 'checked' : 'unchecked'}
                            color={ButtonColor}

                            onPress={() => {
                                setChecked4(!checked4);
                            }}
                        />
                        <Text style={styles.text1}>Strongly </Text>
                        <Text style={styles.text1}>Agree </Text>

                    </View>


                </View>




                {/* <Image style={{ alignSelf: 'center' }} source={halfloading} />
                <View style={styles.loadingView}>
                    <Text style={styles.loadingText}>Not at all</Text>
                    <Text style={styles.loadingText}>Absolutely</Text>
                </View> */}



            </View>
            <View>
                <Footer iconName={'chevron-right'} powered={{ color: '#8C8C8C' }} ensemble={{ color: '#8C8C8C' }} onPress={() => navigation.navigate('surveysuceed')} />
            </View>
        </View>
    )
}

export default Review

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'space-between'
    },
    sketch: {
        alignSelf: 'center',
        marginVertical: verticalScale(60)
    },
    text: {
        fontFamily: InterBold,
        color: 'black',
        marginHorizontal: scale(20),
        fontSize: moderateScale(24)
    },
    loadingView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: scale(20)
    },
    loadingText: {
        color: '#616161',
        fontFamily: InterRegular,
        fontSize: moderateScale(16)
    },
    checkboxView: {
        flexDirection: 'row',
        marginHorizontal: scale(20),
        justifyContent:'space-between',
        marginVertical:verticalScale(25)
    },
    text1:{
        fontFamily:InterRegular,
        color:'#616161'
    }
})