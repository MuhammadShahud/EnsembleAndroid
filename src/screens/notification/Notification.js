import { StyleSheet, Text, View, FlatList, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../components/Header/header'
import { FiraSansRegular, InterRegular, OutfitBold, OutfitMedium, OutfitRegular, PoppinsMedium, PoppinsRegular, PoppinsSemiBold } from '../../../assets/fonts/Fonts'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { ButtonColor } from '../../../assets/colors/colors'
import { rightArrow } from '../../../assets/images/images'
import { useNavigation } from '@react-navigation/native'
import Home from '../home/home'

const Notification = () => {
    const navigation=useNavigation
    const today = [{
        id: 1,
        imageURL: require('../../../assets/images/bag.png'),
        title: 'Hi Bruce , This month survey is',
        title1: 'here!',
        date: '09:20AM',
        survey: 'Complete Your Pulse Survey'


    },
    {
        id: 2,
        imageURL: require('../../../assets/images/awardlogo.png'),
        title: 'You Have Not Set Any Goal Yet',
        title1: 'Set Your Goal Now',
        date: '08:03AM',
        survey: 'Set Your First Goal'

    }


    ]


    const yesterday = [{
        id: 1,
        imageURL: require('../../../assets/images/HR.png'),
        title: 'HR Announcement X Day Will Be',
        title1: 'Work From Home.',
        date: '24 hours ago',


    },
    {
        id: 2,
        imageURL: require('../../../assets/images/HR.png'),
        title: 'Welcome On Board!',
        title1: 'You are Champ!',
        date: '24 hours ago',

    }


    ]

    return (
        <View>
            <View>
                <Header />
                <Text style={styles.notiText}>Notifications</Text>
                <FlatList
                    style={styles.flatListCompleted}
                    data={today}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (

                            <View style={styles.todayView}>
                                <View>

                                    <Image source={item.imageURL} />
                                </View>
                                <View>

                                    <Text style={styles.flatText}>{item.title}</Text>
                                    <Text style={styles.flatText}>{item.title1}</Text>
                                    <View style={styles.setup}>
                                        <View>

                                            <Text style={styles.date}>{item.date}</Text>
                                        </View>
                                        <TouchableOpacity style={styles.arrowView}>

                                            <Text style={styles.survey}>{item.survey}</Text>
                                            <Image style={{ marginTop: 5, marginLeft: 5 }} source={rightArrow} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                        );
                    }}
                />
                <Text style={styles.yesterdayText}>Yesterday</Text>

                <FlatList
                    style={styles.flatListCompleted}
                    data={yesterday}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (

                            <View style={styles.todayView}>
                                <View>

                                    <Image source={item.imageURL} />
                                </View>
                                <View>

                                    <Text style={styles.flatText}>{item.title}</Text>
                                    <Text style={styles.flatText}>{item.title1}</Text>
                                    <View style={styles.setup}>
                                        <View>

                                            <Text style={styles.date}>{item.date}</Text>
                                        </View>
                                      
                                    </View>
                                </View>
                            </View>

                        );
                    }}
                />

            </View>
        </View>
    )
}

export default Notification

const styles = StyleSheet.create({
    notiText: {
        color: 'black',
        fontFamily: PoppinsSemiBold,
        fontSize: moderateScale(24),
        marginHorizontal: scale(20),
        marginVertical: verticalScale(30)
    },
    todayView: {
        flexDirection: 'row',
        backgroundColor: 'white',
        marginHorizontal: scale(20),
        marginVertical: verticalScale(8),
        paddingTop: verticalScale(15),
        borderRadius: moderateScale(25),
        paddingHorizontal: scale(10)
        // alignItems:'center'
    },
    flatText: {
        color: 'black',
        fontFamily: PoppinsRegular
    },
    date: {
        color: '#6C6C6C',
        paddingTop: verticalScale(5),
        fontFamily: PoppinsMedium
    },
    setup: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        // backgroundColor:'red',
        // width:'75%'
    },
    survey: {
        fontSize: moderateScale(10),
        color: ButtonColor,
        fontFamily: PoppinsMedium,
        paddingLeft: scale(15),
        paddingTop: verticalScale(5),
    },
    arrowView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    yesterdayText:{
        color:'#505050',
        fontFamily:OutfitMedium,
        marginHorizontal:scale(20),
        marginTop:verticalScale(10),
        marginBottom:verticalScale(5)
    }
})