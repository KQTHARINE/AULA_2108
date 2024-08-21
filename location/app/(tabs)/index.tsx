import { View, Image, StyleSheet, Platform } from 'react-native';
import Home from './telas/home'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  )
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
  });