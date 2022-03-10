import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
// import SignInScreen from './screens/SignInScreen/SignInScreen'
// import SignUpScreen from './screens/SignUpScreen/SignUpScreen'
import TestScreen from './src/screens/TestScreen/TestScreen'


export default function App() {
  return (
    
    <SafeAreaView style={styles.root}>

    <TestScreen />
    
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
