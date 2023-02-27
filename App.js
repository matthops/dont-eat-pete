import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Lottie from './src/components/LottieView'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Lottie />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  }
})
