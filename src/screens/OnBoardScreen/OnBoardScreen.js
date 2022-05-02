import { View, Text,SafeAreaView,Image,TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';

export default function OnBoardScreen() {
   const navigation = useNavigation();
   return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
         <StatusBar translucent backgroundColor='rgba(0,0,0,0)'/>
         <Image source={require('../../../assets/images/get-things-done.png')} style={StyleSheet.image}/>
         <View style={styles.indicatorContainer}>
            <View style={styles.indicator}></View>
            <View style={styles.indicator}></View>
            <View style={[styles.indicator,styles.indicatorActive]}></View>
         </View>
         <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
            <View>
               <Text style={styles.title}>Welcome to</Text>
               <Text style={styles.title}>Render</Text>
            </View>
         </View>
         <View style={{marginTop:10, paddingHorizontal:20}}>
            <Text style={styles.subTitle}>
               Get things done with Render!
            </Text>
            <Text style={styles.subTitle1}>
               With just a few clicks you can find the best service for you
            </Text>
         </View>
         <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 40 }}>
            <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
            <View style={styles.btn}>
               <Text style={{color:'white'}}>Get Started</Text>
               </View>
            </TouchableOpacity> 
         </View>
      </SafeAreaView>
   );
};


const styles = StyleSheet.create({
   image: {
      height: 420,
      width: '100%',
      borderBottomRightRadius: 100,
   },
   indicatorContainer: {
      height: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
   },
   indicator: {
      height: 3,
      width: 30,
      backgroundColor: 'grey',
      marginHorizontal: 5,
      borderRadius: 5,
   },
   indicatorActive: {
      backgroundColor: 'black',
   },
   title: {
      fontSize: 30,
      fontWeight: 'bold',
   },
   subTitle: {
      fontSize: 20,
      color: 'grey',
      marginBottom:5,
   },
   subTitle1: {
      fontSize: 15,
      color: 'grey',
   },
   btn: {
      backgroundColor: 'black',
      marginHorizontal: 20,
      borderRadius: 15,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
   }
})