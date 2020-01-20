import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { font } from './styles'

interface Props {
  label: string
  onPress: () => void
}

export const Button = (props: Props) => (
  <TouchableOpacity style={styles.view} onPress={props.onPress}>
    <Text style={styles.label}>{props.label}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  view: {
    borderWidth: 1.5,
    borderRadius: 5,
  },
  label: {
    padding: 13,
    fontFamily: font,
    fontSize: 20,
  },
})
