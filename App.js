import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'

import Login from './src/components/Login'

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentInsetAdjustmentBehavior='automatic'>
        <Login />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: 'white' },
})

export default App
