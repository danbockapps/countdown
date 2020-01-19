// Inspired by: https://codesandbox.io/s/x7xrmnr954
import React from 'react'

// The values here never get used, but they help TypeScript know what's up
export const DateContext = React.createContext({
  date: new Date('2021-10-31'),
  // underscore here makes VS Code not complain about unused param
  setDate: (_date: Date) => {},
})
