import DateTimePicker from '@react-native-community/datetimepicker'
import React, { useContext } from 'react'
import { AsyncStorage, Button, Modal, Text, View } from 'react-native'
import { DateContext } from './dateContext'

interface Props {
  visible: boolean
  close: () => void
}

export default function DatePickerModal(props: Props) {
  const { date, setDate } = useContext(DateContext)

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
