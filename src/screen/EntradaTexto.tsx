import { View, Text, TextInput, Button} from 'react-native'
import React, { useEffect, useState } from 'react'

export default function EntradaTexto() {

  //Aqui guardaremos el nombre
  const [nombre, setNombre] = useState("");

  //Mostramos el saludo
  const mostrarMensaje = ()=> {
    useEffect(()=>{
      console.log("Hola" + nombre);
      }, [nombre]);
   return "Hola" + " " + nombre;
  }
  
  //Limpiamos el formulario 
  const limpiarCampo = ()=>{
    mostrarMensaje;
    setNombre("");
  }

  return (
    <View>
     <TextInput placeholder='Ingresa tu nombre:' onChangeText={setNombre} value={nombre}></TextInput>
     <Text>{mostrarMensaje()}</Text>
     <Button title='Limpiar' onPress={limpiarCampo}>Limpiar formulario</Button>
    </View>
  )
}