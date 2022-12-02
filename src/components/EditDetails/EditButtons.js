import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { add, edit } from '../../../assets/images/images'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { ButtonColor } from '../../../assets/colors/colors'


const EditButtons = (props) => {
    const values = props.properties;
    console.log(values);
    return (
        <View style={{flex:1}}>
            <View 
            style={{ marginTop: verticalScale(20), marginHorizontal: scale(20), }}
            >
                <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:verticalScale(10),alignItems:'center', }}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Image source={props.addImage}/>
                </View>

                <View
                    style={{ flexDirection: 'row',flexWrap:'wrap' }}>

                {props.properties.map(v=>(
                    <View style={styles.button}>
                    <Text style={styles.text}>{v}</Text>
                </View>
                )
                )}

                    {/* <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>{props.button1}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>{props.button2}</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>{props.button3}</Text>

                    </TouchableOpacity>


                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>{props.button4}</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>{props.button5}</Text>
                    </TouchableOpacity> */}
                </View>
              

            </View>
                <View style={{ width: '200%', height: '1%', backgroundColor: '#E0E0E0', marginTop: verticalScale(25) }}>
            </View>
        </View>
    )
}

export default EditButtons

const styles = StyleSheet.create({
    button: {
        backgroundColor: ButtonColor,
        marginVertical: verticalScale(5),
        paddingHorizontal: scale(15),
        borderRadius: moderateScale(50),
        paddingVertical: verticalScale(10),
        marginRight:verticalScale(10),
        // width:'15%',
        
    },
    text: {
        color: 'white',
        fontWeight: '500'
    },
    title: {
        color: 'black',
        fontSize: moderateScale(20),
        fontWeight: 'bold',
        // textAlign:'center'

    },


})