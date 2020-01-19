import DateTimePicker from '@react-native-community/datetimepicker'
import React, { useEffect, useState } from 'react'
import { AsyncStorage, Button, Modal, Text, View } from 'react-native'

interface Props {
  visible: boolean
  close: () => void
}

export default function DatePickerModal(props: Props) {

  // Date is stored in two places: (1) here, in state, and (2) in persistent
  // storage. This way the user will be fiddle with the date picker and click
  // cancel without saving.
  const [date, setDate] = useState<Date>()

  useEffect(() => {
    AsyncStorage.getItem('date').then(data => {
      if (data) setDate(new Date(data))
    })
  }, [])

  // Uncomment this to test as a new user who hasn't saved a date.
  // (someday Expo may have a different way to clear persistent data:
  // https://github.com/expo/expo/issues/1015)
  // AsyncStorage.clear()

  // For the first time the user opens the app
  if (!date) setDate(new Date())

  return (
    <Modal animationType='slide' visible={props.visible}>
      <View style={{ marginTop: 22 }}>
        <View>
          <Text>Enter your retirement date.</Text>

          {date && (
            <DateTimePicker
              style={{ width: '100%' }}
              mode='date'
              value={date}
              // underscore here makes VS Code not complain about unused param
              onChange={(_event, date) => setDate(date)}
              minimumDate={new Date()}
            />
          )}

          <Button
            title='Save'
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
