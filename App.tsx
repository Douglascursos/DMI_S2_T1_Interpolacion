import { View, Text } from 'react-native'
import React from 'react'
import CalculatorComponent from './src/screen/CalculatorComponent'

export default function App() {
  return (
    /*Aqui se pasan los argumenos que espera la Interfaz Datos
    Segun el numero, se ejecuta la operacion*/
    <View>
      <Text>Calculadora</Text>
      <CalculatorComponent a={1} b={1} operation={1}></CalculatorComponent>
      <CalculatorComponent a={2} b={2} operation={2}></CalculatorComponent>
      <CalculatorComponent a={3} b={3} operation={3}></CalculatorComponent>
      <CalculatorComponent a={4} b={4} operation={4}></CalculatorComponent>
    </View>
  )
}