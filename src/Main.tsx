import moment from 'moment'
import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import DatePickerModal from './DatePickerModal'

export default function Main() {
  const [pickerVisible, setPickerVisible] = useState(false)
  const [retirementDate, setRetirementDate] = useState(moment())

  return (
    <View style={styles.container}>
      <Button title='Change date...' onPress={() => setPickerVisible(true)} />
      <DatePickerModal
        visible={pickerVisible}
        close={() => setPickerVisible(false)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    marginTop: 30,
  },
  linkText: {
    color: 'blue',
  },
})
