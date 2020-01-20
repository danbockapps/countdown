import DateTimePicker from '@react-native-community/datetimepicker'
import React, { useContext } from 'react'
import { AsyncStorage, Modal, StyleSheet, Text, View } from 'react-native'
import { Button } from './Button'
import { DateContext } from './dateContext'
import { font } from './styles'

interface Props {
  visible: boolean
  close: () => void
}

export default function DatePickerModal(props: Props) {
  const { date, setDate } = useContext(DateContext)

  return (
    <Modal animationType='slide' visible={props.visible}>
      <View style={styles.view}>
        <Text numberOfLines={1} adjustsFontSizeToFit style={styles.enterYour}>
          Enter your retirement date.
        </Text>

        {date && (
          <DateTimePicker
            mode='date'
            value={date}
            // underscore here makes VS Code not complain about unused param
            onChange={(_event, date) => setDate(date)}
            minimumDate={new Date()}
          />
        )}

        <View style={{ flex: 1, alignItems: 'center' }}>
          <Button
            label='Save'
            onPress={() => onSaveButtonPress(date, props.close)}
          />
        </View>
      </View>
    </Modal>
  )
}

const onSaveButtonPress = (date: Date, closeProp: () => void) => {
  AsyncStorage.setItem('date', date.toString())
  closeProp()
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'stretch',
    marginTop: 44,
  },
  enterYour: {
    fontFamily: font,
    fontSize: 20,
    textAlign: 'center',
  },
})
