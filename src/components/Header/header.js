import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native';
import Notii from '../../../assets/images/Notii'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {styles} from '../../styles/GeneralStyle';
import {style} from './headerStyle';
import {useDispatch, useSelector} from 'react-redux';
import {menuLogo, notiLogo, ptLogo} from '../../../assets/images/images';
import {COMPANY} from '../../redux/Reducers/AuthReducer';
import { scale } from 'react-native-size-matters';

const Header = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const company = useSelector(COMPANY);

  return (
    <View style={[style.BackHeaderBG, props.BackHeaderBG]}>
      <View style={style.halfHeader}>
        {/* <Image
          style={{ marginRight: wp('3%'), marginLeft: wp('3%') }}
          resizeMode="contain"
          source={ptLogo}
        /> */}
        <Image
          source={{
            uri: `https://ensemble-backendd.herokuapp.com/${company?.profilePic}`,
          }}
          style={{
            height: 40,
            width: 46,
            marginRight: wp('3%'),
            marginLeft: wp('3%'),
          }}
          resizeMode="contain"
        />
        <Text style={[styles.large, style.companyName]}>{props.title}</Text>
      </View>
      <View style={style.halfHeader}>
        <TouchableOpacity 
        style={{marginRight:scale(8)}} 
        onPress={()=>navigation.navigate('notification')}
>

        {/* <Image
          style={{ marginRight: wp('3%') }}
          resizeMode="contain"
          source={props.source}
          /> */}
          <Notii/>
          </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.openDrawer()}>
        <Image resizeMode="contain" source={menuLogo} 
        style={{marginRight: wp('3%')}}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
