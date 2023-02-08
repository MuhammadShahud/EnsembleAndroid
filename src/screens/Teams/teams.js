import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import Header from '../../components/Header/header';
import {
  newImage,
  notiLogo,
  online,
  search,
  thunder,
} from '../../../assets/images/images';
import SearchInput from '../../components/Input Fields/SearchInput';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import ProfileButton from '../../components/ProfileButton';
import {useSelector} from 'react-redux';
import {COMPANY, TEAM, USER} from '../../redux/Reducers/AuthReducer';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import { InterLight, InterMedium, InterRegular, InterSemiBold, PoppinsMedium, PoppinsRegular, PoppinsSemiBold } from '../../../assets/fonts/Fonts';

const Teams = () => {
  const navigation = useNavigation();
  const teamData = useSelector(TEAM);
  const company = useSelector(COMPANY);
  const userData = useSelector(USER);
  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);
  console.log('Dataaaaa', teamData?.employeeId, company?.employeeId);

  const checking = teamData?.employeeId?.filter(e => {
    e.id === userData?.id;
  });

  console.log('checking', userData);

  const team = teamData?.employeeId?.filter(e => e.id !== userData?.id);

  const colleague = company?.employeeId?.filter(e => e.id !== userData?.id);

  console.log('Dataaaaa', team, colleague);
  return (
    <View
      style={styles.mainView}
      onStartShouldSetResponder={() => {
        setClicked(false);
      }}>
      <Header source={notiLogo} />
      <ScrollView>
        <View style={styles.search}>
          {/* <Image source={seerch} style={styles.seerch}/> */}
          <SearchInput
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            clicked={clicked}
            setClicked={setClicked}
            placeholder="Search by name"
            source={search}
            
            
          />
        </View>

        <View>
          <Text style={styles.team}> My Team</Text>

          <FlatList
            style={styles.flatList}
            data={team}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              if (searchPhrase === '') {
                return (
                  <TouchableOpacity
                    style={styles.teamView}
                    onPress={() =>
                      navigation.navigate('Profile', {userData: item,outside:'outside'})
                    }>
                    <Image
                      source={{
                        uri: `https://ensemble-backendd.herokuapp.com/${item.profilePic}`,
                      }}
                      style={styles.teamImage}
                    />
                    <Text style={styles.Name}>{item.name}</Text>
                    <Text style={styles.position}>
                      {item.questions.jobTitle}
                    </Text>
                    <Text style={styles.description}>
                      {item.questions.threeDesc}
                    </Text>
                  </TouchableOpacity>
                );
              }
              if (
                item.name
                  .toUpperCase()
                  .includes(
                    searchPhrase.toUpperCase().trim().replace(/\s/g, ''),
                  )
              ) {
                return (
                  <TouchableOpacity
                    style={styles.teamView}
                    onPress={() =>
                      navigation.navigate('Profile', {userData: item,outside:'outside'})
                    }>
                    <Image
                      source={{
                        uri: `https://ensemble-backendd.herokuapp.com/${item.profilePic}`,
                      }}
                      style={styles.teamImage}
                    />
                    <Text style={styles.Name}>{item.name}</Text>
                    <Text style={styles.position}>
                      {item.questions.jobTitle}
                    </Text>
                    <Text style={styles.description}>
                      {item.questions.threeDesc}
                    </Text>
                  </TouchableOpacity>
                );
              }
            }}
          />
        </View>

        <View>
          <Text style={styles.colleague}> Colleague </Text>

          <FlatList
            style={styles.flatList}
            data={colleague}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => {
              if (searchPhrase === '') {
                return (
                  <View style={styles.teamView1}>
                    <View>
                      <Image
                        source={{
                          uri: `https://ensemble-backendd.herokuapp.com/${item.profilePic}`,
                        }}
                        style={styles.colleagueImage}
                      />
                    </View>
                    <View style={styles.introView}>
                      <Image source={newImage} style={styles.newImage} />
                      <Text style={styles.Name1}>{item.name}</Text>
                      {/* <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={thunder} />
                        <Text style={styles.intrest}>
                          You both have similar intrest
                        </Text>
                      </View>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={online} style={{marginLeft: 1}} />
                        <Text style={styles.status}>Online</Text>
                      </View> */}
                    </View>
                    <ProfileButton user={item} />
                  </View>
                );
              }
              if (
                item.name
                  .toUpperCase()
                  .includes(
                    searchPhrase.toUpperCase().trim().replace(/\s/g, ''),
                  )
              ) {
                return (
                  <View style={styles.teamView1}>
                    <View>
                      <Image
                        source={{
                          uri: `https://ensemble-backendd.herokuapp.com/${item.profilePic}`,
                        }}
                        style={styles.colleagueImage}
                      />
                    </View>
                    <View style={styles.introView}>
                      <Image source={newImage} style={styles.newImage} />
                      <Text style={styles.Name1}>{item.name}</Text>
                      {/* <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={thunder} />
                        <Text style={styles.intrest}>
                          You both have similar intrest
                        </Text>
                      </View> */}
                      {/* <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={online} style={{marginLeft: 1}} />
                        <Text style={styles.status}>Online</Text>
                      </View> */}
                    </View>
                    <ProfileButton user={item} />
                  </View>
                );
              }
            }}
          />
        </View>

        <View style={styles.footerView}>
          <Text style={styles.powered}>Powered by</Text>
          <Text style={styles.ensemble}>ENSEMBLE</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Teams;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  footerView: {
    marginHorizontal: scale(20),
    marginBottom: verticalScale(20),
  },
  teamImage: {
    width: scale(74),
    height: verticalScale(74),
    overflow: 'hidden',
    borderRadius: moderateScale(37),
  },
  colleagueImage: {
    width: scale(56),
    height: verticalScale(56),
    overflow: 'hidden',
    borderRadius: moderateScale(28),
  },
  powered: {
    color: 'black',
  },
  ensemble: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: moderateScale(18),
  },
  search: {
    marginTop: verticalScale(25),
    // flexDirection:'row'
  },
  team: {
    color: 'black',
    fontSize: moderateScale(20),
    fontFamily:PoppinsSemiBold,
    marginHorizontal: scale(20),
    marginTop: verticalScale(30),
  },
  flatList: {
    // backgroundColor:'yellow',
  },
  teamView: {
    paddingVertical: verticalScale(20),
    backgroundColor: 'white',
    alignItems: 'center',
    marginVertical: verticalScale(10),
    marginHorizontal: scale(20),
    borderRadius: moderateScale(25),
    paddingHorizontal: scale(20),
    minWidth: scale(190),
    minHeight: verticalScale(200),
  },
  Name: {
    color: 'black',
    // fontWeight: '700',
    fontFamily:PoppinsSemiBold,
    fontSize: moderateScale(18),
    paddingTop: verticalScale(10),
    paddingBottom: verticalScale(5),
  },
  position: {
    paddingBottom: verticalScale(10),
    color: 'black',
    fontFamily:PoppinsRegular,
    marginTop:verticalScale(-5)
  },
  description: {
    color: '#4E4E4E',
    fontFamily:PoppinsRegular
  },
  colleague: {
    color: 'black',
    fontFamily:PoppinsSemiBold,
    fontSize: moderateScale(20),
    marginHorizontal: scale(20),
    marginTop: verticalScale(10),
  },
  teamView1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: scale(20),
    alignItems: 'center',
    marginVertical: verticalScale(20),
  },
  button: {
    borderWidth: 1,
  },
  Name1: {
    color: 'black',
    // fontWeight: '700',
    fontFamily:InterSemiBold,
    fontSize: moderateScale(14),
    marginHorizontal: scale(5),
  },
  intrest: {
    fontSize: moderateScale(8),
    marginHorizontal: scale(3),
    fontFamily:InterLight
  },
  status: {
    fontSize: moderateScale(8),
    marginHorizontal: scale(5),
    // fontWeight: '500',
    fontFamily:InterRegular,
    color: 'black',
  },
  newImage: {
    marginHorizontal: scale(5),
  },
  introView: {
    marginLeft: scale(10),
    marginRight: scale(20),
    // backgroundColor:'red',
    width:'40%'
  },
  seerch:{
    // position:'absolute',
    // top:verticalScale(20),
    // left:scale(20)
  }
});
