import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import api from './src/api';
import PickerCesar from './components/PickerCesar';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  const [moedas, setMoedas] = useState<Record<string, number>>({});

  const [valor, setvalor] = useState<number>(0);

  const [valorConvertido, setvalorConvertido] = useState<number>(0);

  const [moedaSelecionada, setMoedaSelecionada] = useState<string>('');

  function calcularValor() {
    if (!valor || !moedaSelecionada) {
      Alert.alert('Aviso', 'Preencha todos os campos.');
    } else {
      setvalorConvertido(valor / (moedas[moedaSelecionada] / moedas['brl']));
    }
  }

  useEffect(() => {
    setvalorConvertido(0);
  }, [moedaSelecionada]);

  useEffect(() => {
    async function obterMoedas() {
      const moedasObtidas = await api.get('eur.json');
      setMoedas(moedasObtidas.data.eur);
    }

    obterMoedas();
  }, []);

  return (
    <View style={estilos.generalView}>
      <Header></Header>
      <View style={estilos.body}>
        <Text style={estilos.hero}>
          ✈️ Prepare-se para sua viagem! Converta qualquer valor para R$
        </Text>
        <Text style={estilos.paragraph}>1. Selecione uma moeda</Text>

        <PickerCesar
          moedaSelecionada={moedaSelecionada}
          setMoedaSelecionada={setMoedaSelecionada}
          moedas={moedas}
        ></PickerCesar>

        <Text style={estilos.paragraph}>
          2. Digite um valor{' '}
          {moedaSelecionada !== undefined ? moedaSelecionada.toUpperCase() : ''}
          :
        </Text>

        <TextInput
          style={estilos.txtInput}
          onChangeText={text => setvalor(Number(text))}
        ></TextInput>

        <TouchableOpacity style={estilos.btnObter} onPress={calcularValor}>
          <View>
            <Text style={estilos.btnObterText}>🤑 Obter valor</Text>
          </View>
        </TouchableOpacity>

        <Text style={estilos.txtResultado}>
          {valorConvertido !== undefined
            ? 'r$'.toUpperCase() +
              ' ' +
              valorConvertido.toFixed(2).replace('.', ',')
            : ''}
        </Text>
      </View>
      <Footer></Footer>
    </View>
  );
}

const estilos = StyleSheet.create({
  generalView: {
    backgroundColor: '#222020ff',
    flex: 1,
  },

  hero: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
  },

  paragraph: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  body: {
    padding: 20,
    flex: 1,
    gap: 10,
  },

  btnObter: {
    padding: 20,
    backgroundColor: '#62e641ff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnObterText: {
    color: '#fff',
    fontSize: 18,
  },

  txtResultado: {
    color: '#62e641ff',
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  txtInput: {
    backgroundColor: '#ffffff50',
    color: '#fff',
    textAlign: 'center',
    padding: 20,
    borderRadius: 10,
  },
});
