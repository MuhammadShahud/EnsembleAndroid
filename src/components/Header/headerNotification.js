import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { Icon } from 'react-native-elements'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { styles } from '../../styles/GeneralStyle'
import { style } from './headerStyle'
import { useDispatch, useSelector } from 'react-redux'
import { menuLogo, notiLogo, ptLogo } from '../../../assets/images/images'

const Header = props => {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  return (
    <View style={style.BackHeaderBG}>
      <View style={style.halfHeader}>
        <Image
          style={{ marginRight: wp('3%') }}
          resizeMode="contain"
          source={ptLogo}
        />
        <Text style={[styles.large, style.companyName]}>
          The Plum Tree Group
        </Text>
      </View>
      <View style={style.halfHeader}>
        <Image
          style={{ marginRight: wp('5%') }}
          resizeMode="contain"
          source={notiLogo}
        />
        <Image resizeMode="contain"    source={menuLogo} />
      </View>
    </View>
  )
}

export default Header
