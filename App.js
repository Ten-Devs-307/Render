import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Navigation from './src/navigation'


export default function App() {
  return (
    
    <SafeAreaView style={styles.root}>

    <Navigation/>
    
    <StatusBar style="auto" />
  </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  root: {
    // backgroundColor: '#fff',
    // backgroundColor: '#F8EDED',
    // alignItems: 'center',
    // justifyContent: 'center',
      flex: 1,
      backgroundColor: '#F8EDED',
  },
});
