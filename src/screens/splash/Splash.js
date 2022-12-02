import { Image, Text, View, FlatList } from 'react-native'
import { ensembleLogo, goalLogo, onBoardLogo, ship } from '../../../assets/images/images'
import { boat } from '../../../assets/images/images'
import PrimaryButton from '../../components/PrimaryButton'
import { styles } from './splashStyle'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
  const splash = [{
    imageURL: require('../../../assets/images/goalLogo.png'),
    title: 'Set Your Goals',
    text: 'Set your monthly goal and grow',
    text1: 'with company'
  },
  {
    imageURL: require('../../../assets/images/feedback.png'),
    title: 'Share Feedback',
    text: 'Share your valueable',
    text1: 'feedback to the company'
  },
  {
    imageURL: require('../../../assets/images/colleagues.png'),
    title: 'Connect Colleagues',
    text: 'Connect with your colleagues and',
    text1: 'more angaged at work'
  },
  ];
  const navigation = useNavigation()

  const onStart = () => {
    console.log('working')
    navigation.navigate('drawer')
    // navigation.navigate('survey')
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerView}>
        <Image
          style={styles.imageStyle2}
          resizeMode="contain"
          source={ensembleLogo}
        />
        {/* <Image style={styles.imageStyle} source={boat} /> */}
      </View>

    {/* <View>
              <Image style={styles.imageStyle} source={ship} />

    </View> */}

      <View>

        <FlatList
          style={styles.flatListCompleted}
          data={splash}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.boxView}>
                <Image style={styles.imageView} source={item.imageURL} />

                <View>
                  <Text style={styles.setGoals}>{item.title}</Text>
                  <Text style={styles.monthly}>{item.text}</Text>
                  <Text style={styles.company}>{item.text1}</Text>
                </View>
              </View>
            );
          }}
        />




      </View>







      <View style={styles.btn}>
        <PrimaryButton
          title="Let's Get Started"
          backgroundColor="#2B2F86"
          color="white"
          onPress={onStart}
        />
      </View>

    </View>
  )
}

export default Splash
