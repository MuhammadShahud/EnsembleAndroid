import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { backArrow, ptLogo } from '../../../assets/images/images'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {useDispatch, useSelector} from 'react-redux';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { PoppinsBold } from '../../../assets/fonts/Fonts';
import { COMPANY } from '../../redux/Reducers/AuthReducer';

const QuestionHeader = (props) => {
  const company = useSelector(COMPANY);
  console.log(company);
  const navigation=useNavigation();
  return (
    <View style={styles.mainView}>
      {props.arrow? <View></View>
      :

        <MaterialCommunityIcons
        name='keyboard-backspace' size={25} color={'black'} onPress={()=>navigation.goBack()}/>
      }

      <View style={styles.header}>
        <Image  source={{
                uri: `https://ensemble-backendd.herokuapp.com/${company?.profilePic}`,
              }}               style={{height:40, width:46}}
              resizeMode="contain" />
        <Text style={styles.text}>{company?.companyName} </Text>
      </View>
    </View>
  )
}

export default QuestionHeader

const styles = StyleSheet.create({
    mainView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:scale(20),
        marginVertical:verticalScale(20)
    },
    header:{
        flexDirection:'row',
        alignItems:'center',

    },
    text:{
        fontSize:moderateScale(14),
        color:'black',
        fontFamily: PoppinsBold,
        textAlign: 'center',
        paddingLeft:scale(10)
    }
})