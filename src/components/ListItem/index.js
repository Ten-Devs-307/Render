import { StyleSheet, Text, View,TouchableOpacity,Image,Dimensions } from 'react-native'
import React from 'react'
const { width } = Dimensions.get('screen');

const ListItem = ({type,onPress,image,name,city}) => {
   return (
     <View style={{paddingLeft: 20,marginVertical: 10,}}>
     <TouchableOpacity onPress={onPress}
        style={{
           height: 200,
           width: width / 2 - 30,
           backgroundColor:'white',
           borderRadius: 15,
           paddingTop: 10,
           paddingHorizontal: 10,
           alignItems: 'center',
           shadowColor: "#000",
            shadowOffset: {
               width: 0,
               height: 5,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.68,
            elevation: 11,
        }}>
        <Image source={image} style={{
            height: 140,
		      borderRadius: 10,
		      width: '100%',

        }} />
        <View style={{
        }}>
           <Text style={{marginTop:10, fontSize:14, fontWeight:'bold'}}>
            {name}
           </Text>
        </View>
         </TouchableOpacity>
       </View>
  )
}

export default ListItem

const styles = StyleSheet.create({})