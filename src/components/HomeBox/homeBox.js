import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { style } from './homeBoxStyle'
import { useDispatch, useSelector } from 'react-redux'
import Search from '../../../assets/images/Search'
import Pulse from '../../../assets/images/Pulse'
import Medal from '../../../assets/images/medall'


const HomeBox = props => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
console.log(props.color);
  return (
    <TouchableOpacity 
    onPress={()=>navigation.navigate(props.navigate)}
    style={[style.BackHeaderBG,props.color?{backgroundColor:props.color}:null]}>
      <View style={style.box}>
            <View style={style.imageView}>
            {/* <Image source={props.image} /> */}
            {props.firstImage?<Search/>:null}
            {props.secondImage?<Medal/>:null}
            {props.thirdImage?<Pulse/>:null}

            </View>
            <View >
                  <Text style={[style.text1,props.color?{color:'#ffff'}:null]}>{props.text1}</Text>
                  <Text style={[style.text2,props.color?{color:'#ffff'}:null]}>{props.text2}</Text>

            </View>
      </View>
    </TouchableOpacity>
  )
}

export default HomeBox
