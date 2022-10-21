import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ButtonColor } from '../../../assets/colors/colors'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import Feather from 'react-native-vector-icons/Feather'


const Footer = (props) => {
  return (
    <View style={styles.mainView}>
        <View>
      <Text>Powered by</Text>
      <Text style={styles.ensemble}>ENSEMBLE</Text>
        </View>
        <TouchableOpacity style={styles.arrow} onPress={props.onPress}>
            <Feather style={styles.iconarrow} name={props.iconName} size={25} color={'white'}/>
        </TouchableOpacity>

    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    mainView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:scale(20),
        marginBottom:verticalScale(15)

    },
    arrow:{
        backgroundColor:ButtonColor,
        borderRadius:moderateScale(100),
        alignItems:'center',
        
    },
    ensemble:{
      fontWeight:'bold',
      color:'#8C8C8C',
      fontSize:moderateScale(20)
    },
    iconarrow:{
      alignItems:'center',
      paddingVertical:verticalScale(10),
      paddingHorizontal:scale(10)
      
    }
})