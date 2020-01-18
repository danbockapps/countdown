import DateTimePicker from '@react-native-community/datetimepicker'
import React from 'react'
import { Modal, Text, View, Button } from 'react-native'

interface Props {
  visible: boolean
  close: ()=>void
}

export default function DatePickerModal(props: Props) {
  return (
    <Modal animationType='slide' visible={props.visible}>
      <View style={{ marginTop: 22 }}>
        <View>
          <Text>Enter your retirement date.</Text>

          <DateTimePicker
            style={{ width: '100%' }}
            mode='date'
            value={new Date()}
            // onChange={(event, date) => setRetirementDate(moment(date))}
            minimumDate={new Date()}
          />

          <Button title='Close' onPress={props.close} />
        </View>
      </View>
    </Modal>
  )
}
