import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Navigation from './src/navigation'

import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <AuthProvider>
        <Navigation/>
      </AuthProvider>
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
		backgroundColor: "#F8EDED",
	},
});
