import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, {useState } from 'react'
import Header from '../../components/Header/header'
import { ProgressBar, MD3Colors } from 'react-native-paper';



import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'
import { awardLogo, loading, notiLogo, timeLogo } from '../../../assets/images/images'
const PersonalGoals = () => {
  const navigation = useNavigation()
  const [show, setShow] = useState(true)
  // const height = Dimensions.get('screen').height;

  



  const data = [

    {
      id: 1,
      title: 'Complete UX Design Course',
      date: '8 Dec, 2022',
    },
    {
      id: 2,
      title: 'Complete Figma Introduction',
      date: '10 Jan, 2023',
    },

    {
      id: 3,
      title: 'What A Design Movie',
      date: '20 Jan, 2023',
    },
    {
      id: 4,
      title: 'Read Design Article',
      date: '25 Jan, 2023',
    },
    {
      id: 5,
      title: 'Frontend Developer',
      date: '10 July, 2023',
    },
    {
      id: 6,
      title: 'Backend Developer',
      date: '10 July, 2023',
    },
  ]


  return (
    <View style={styles.mainView}>
      <View>

      <Header  source={notiLogo}/>
      </View>
      <Text style={styles.personalText}>Discover Goals</Text>
      

      <FlatList
        style={styles.flatList}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.box}>

              <View style={styles.imageView}>
                <Image source={awardLogo} />
              </View>
              <View>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.dateView}>

                  <Image source={timeLogo} />
                  <Text style={styles.date}>{item.date}</Text>
                </View>
                {/* <Image style={styles.loadingline} source={loading} /> */}
                <ProgressBar style={styles.progressBar} progress={0.3} color={'black'} />

              </View>
            </View>
          );
        }}
      />
    </View>
  )
}

export default PersonalGoals

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    // backgroundColor:'white'
  },
  personalText: {
    color: 'black',
    marginHorizontal: scale(20),
    marginTop: verticalScale(20),
    marginBottom: verticalScale(10),
    fontSize: moderateScale(30),
    fontWeight: 'bold'
  },

  box: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginVertical: verticalScale(7),
    borderRadius: moderateScale(20),
    marginHorizontal: scale(20),
    
  },
  title: {
    color: 'black',
    fontSize: moderateScale(17),
    fontWeight: 'bold',
    paddingTop: verticalScale(5)
  },
  date: {
    color: 'black',
    paddingLeft: scale(8),
    

  },
  dateView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(15),

  },
  imageView: {
    paddingTop: verticalScale(10),
  },
  flatList: {
    // marginBottom: verticalScale(20)
  },
  loadingline: {
    marginTop: verticalScale(5)
  },
  progressBar: {
    borderRadius: 20,
    height: verticalScale(7),
    backgroundColor: '#EBEBEB',
    width: '80%',
    marginTop:verticalScale(5)
},
 
 
})