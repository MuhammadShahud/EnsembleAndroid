import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from '../styles/GeneralStyle'

const PrimaryButton = props => {
  console.log('props',props)
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.btnBg,
        props.backgroundColor
          ? { backgroundColor: props.backgroundColor }
          : null
      ]}>
      <Text style={[styles.medium,props.color?{color : props.color}:null]}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default PrimaryButton
