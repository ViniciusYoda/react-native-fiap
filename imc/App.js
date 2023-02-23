import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import React from 'react'

export default function App() {

  const [peso, setPeso] = React.useState('');
  const [altura, setAltura] = React.useState('')
  const [mensagem, setMensagem] = React.useState('')

  const calcular = () => {
    const calculo =  peso / (altura * altura)
    console.log(calculo)
     if (calculo <= 18.5) {
      setMensagem('Abaixo do peso')
    } else if (calculo > 18.5 && calculo <= 25) {
      setMensagem('Peso normal')
    } else if (calculo > 25 && calculo <= 30) {
      setMensagem('Acima do peso')
    } else {
      setMensagem('Obesidade')
    }
  }


  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Peso" id="peso" value={peso} onChangeText={setPeso} />
      <TextInput style={styles.input} placeholder="Altura" id="altura" value={altura} onChangeText={setAltura} />
      <TouchableOpacity style={styles.button} onPress={calcular}>
        <Text style={styles.texto}>Press Here</Text>
      </TouchableOpacity>
      <Text style={styles.resultado}>{mensagem}</Text>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  resultado: {
    padding: 10,
    marginTop: 20,
    textAlign: 'center',
    width: 170,
    backgroundColor: 'pink',
    color: 'white'
  },

  input: {
    margin: 10,
    backgroundColor: 'gainsboro',
    paddingLeft: 10,
    paddingVertical: 10,
    bordemBottomWidth: 2,
    borderBottomColor: 'darkgray'
  },

  button: {
    padding: 10,
    backgroundColor: 'purple',
    width: 170,
    borderRadius: 10
  },

  texto: {
    textAlign: 'center',
    color: 'white'
  }
});

