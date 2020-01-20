import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { AsyncStorage, StyleSheet, Text, View } from 'react-native'
import { Button } from './Button'
import { DateContext } from './dateContext'
import DatePickerModal from './DatePickerModal'
import { font } from './styles'

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
        <View style={styles.topHalf}>
          <Text style={styles.daysUntil}>Days until retirement:</Text>
          <Text style={styles.bigNumber}>
            {Number(moment(date).diff(moment(), 'days')).toLocaleString()}
          </Text>
        </View>
        <View style={styles.thirdQuarter}>
          <Text
            numberOfLines={1}
            adjustsFontSizeToFit
            style={styles.retirementDate}
          >
            Retirement date: {moment(date).format('LL')}
          </Text>
        </View>

        <View style={styles.fourthQuarter}>
          <Button label='Change Date' onPress={() => setPickerVisible(true)} />
        </View>
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
  topHalf: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  daysUntil: {
    fontFamily: font,
    fontSize: 25,
  },
  bigNumber: {
    marginTop: 20,
    fontFamily: font,
    fontSize: 60,
  },
  thirdQuarter: {
    flex: 1,
    justifyContent: 'center',
  },
  retirementDate: {
    textAlign: 'center',
    fontFamily: font,
    fontSize: 20,
  },
  fourthQuarter: {
    flex: 1,
    justifyContent: 'center',
  },
  changeDate: {
    fontFamily: font,
    fontSize: 20,
    color: 'blue',
  },
  link: {
    marginTop: 30,
  },
  linkText: {
    color: 'blue',
  },
})
