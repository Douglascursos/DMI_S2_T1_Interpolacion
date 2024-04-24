import { View, Text } from 'react-native'
import React from 'react'

interface Datos {//Se esperan datos de tipo numero
  a:number
  b:number
  operation:number
}

export default function CalculatorComponent(props: Datos) {

  var resultado = 0;//Variable que guarda el resultado de las operaciones.
  
  if (props.operation == 1){//Si operacion es 1, se suma.
     resultado = props.a + props.b;
  } else if (props.operation == 2){//si es 2, se resta.
    resultado = props.a - props.b;
  } else if (props.operation == 3){//Si es 3, se multiplica.
    resultado = props.a * props.b;
  } else if (props.operation == 4){//Si es 4, se valida que el operando 'b' sea mayor que 0 de serlo se divide.
    if (props.b > 0){
      resultado = props.a / props.b;
    }
  }

  return (
    //Mostramos los distintos resultados de las operaciones en pantalla.
    <View>
      <Text>{resultado}</Text>
    </View>
  )

}