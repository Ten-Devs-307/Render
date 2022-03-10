import { View, Text, StyleSheet, TouchableOpacity, Image, useWindowDimensions } from 'react-native'
import React from 'react'
import Logo from '../../../assets/images/Render.png';
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'

// const {height} = useWindowDimensions();

const TestScreen = () => {
  return (
    <View style={styles.root}>
      
      <Image source={Logo} style={[styles.logo]}
          resizeMode="contain" />

        {/* {height: height * 0.3} */}

        <Text style={styles.header} >Create an account.</Text>
      <Text style={styles.label} >Email</Text>
      <CustomInput placeholder='Email' />

      <Text style={styles.label} >Password</Text>
      <CustomInput placeholder='Password' secureTextEntry={true} />
      <CustomButton text='Sign In' />
       
       <TouchableOpacity>
         <Text style={styles.text} >Don't have an account? <Text style={styles.signin}>Sign Up</Text></Text>
       </TouchableOpacity>


    </View>
  );
};

const styles = StyleSheet.create({
    root: {
      // alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      padding: 20,
    },
    label: {
      // alignItems: '',
      fontSize: 18,
    },
    text: {
      fontSize: 16,
      paddingTop: 20,
      alignSelf: 'center',
      color: '#000'
    },
    signin: {
      fontWeight: 'bold',
    },
    logo: {
      width: '80%',
      maxWidth: 300,
      maxHeight: 200,
      alignSelf: 'center',
      marginBottom: 30,
    },
    header: {
      fontSize: 26,
      marginBottom: 30,
      fontWeight: '700',
      // alignSelf: 'center'
    }
});


export default TestScreen