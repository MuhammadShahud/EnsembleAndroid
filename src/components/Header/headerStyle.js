import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {PoppinsBold, PoppinsRegular} from '../../../assets/fonts/Fonts';

export const style = StyleSheet.create({
  BackHeaderBG: {
    width: wp('100%'),
    alignSelf: 'center',
    justifyContent: 'space-between',
    height: hp('10%'),
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#C6C6C6',
    borderBottomWidth: 1,
    paddingRight: wp('3%'),
    paddingLeft: wp('3%'),
    // flex:1
  },
  companyName: {
    color: 'black',
    fontSize: wp('4%'),
    fontFamily: PoppinsBold,
    textAlign: 'left',
  },
  halfHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  drawerTabs: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingLeft: wp('4%'),
    marginTop: hp('3%'),
  },
  tabImage: {
    marginRight: wp('4%'),
    height: verticalScale(19),
    width: scale(20),
  },
  PDView: {
    flex: 1,
  },
  tabText: {
    fontSize: wp('4.4%'),
    fontFamily: PoppinsRegular,
    color: '#1B1B1B',
    flex: 1,
  },
  greyOut: {
    color: '#B8B8B8',
  },
});
