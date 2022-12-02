import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {colorDash, greyDash} from '../../../assets/images/images';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

export default function Dashes(props) {
  return (
    <View style={styles.container}>
      <Image
        source={props.color === 1 ? colorDash : greyDash}
        style={styles.image}
      />
      <Image
        source={props.color === 2 ? colorDash : greyDash}
        style={styles.image}
      />
      <Image
        source={props.color === 3 ? colorDash : greyDash}
        style={styles.image}
      />
      <Image
        source={props.color === 4 ? colorDash : greyDash}
        style={styles.image}
      />
      <Image
        source={props.color === 5 ? colorDash : greyDash}
        style={styles.image}
      />
      <Image
        source={props.color === 6 ? colorDash : greyDash}
        style={styles.image}
      />
      <Image
        source={props.color === 7 ? colorDash : greyDash}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(15),
  },
  image: {
    marginRight: scale(5),
  },
});
