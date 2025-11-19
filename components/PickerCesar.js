import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function PickerCesar({ moedaSelecionada, setMoedaSelecionada, moedas }) {
  return (
    <View>
      <Picker
        itemStyle={estilos.hero}
        useNativeAndroidPickerStyle={false}
        selectedValue={moedaSelecionada}
        androidmode=""
        onValueChange={v => setMoedaSelecionada(v)}
      >
        {Object.keys(moedas).map((value, key) => (
          <Picker.Item value={value} label={value} key={key} />
        ))}
      </Picker>
    </View>
  );
}

const estilos = StyleSheet.create({
  hero: {
    color: '#fff',
  },
});
