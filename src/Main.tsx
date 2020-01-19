import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { AsyncStorage, Button, StyleSheet, Text, View } from 'react-native'
import { DateContext } from './dateContext'
import DatePickerModal from './DatePickerModal'

export default function Main() {
  const [pickerVisible, setPickerVisible] = useState(false)
  const [date, setDate] = useState<Date>()

  useEffect(() => {
    AsyncStorage.getItem('date').then(data => {
      if (data) setDate(new Date(data))
      else setDate(new Date())
    })
  }, [])

  return (
    <DateContext.Provider value={{ date, setDate }}>
      <View style={styles.container}>
        <Text>
          Days until retirement:{' '}
          {Number(moment(date).diff(moment(), 'days')).toLocaleString()}
        </Text>
        <Text>Retirement date: {moment(date).format('LL')}</Text>
        <Button title='Change date...' onPress={() => setPickerVisible(true)} />
        <DatePickerModal
          visible={pickerVisible}
          close={() => setPickerVisible(false)}
        />
      </View>
    </DateContext.Provider>
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
