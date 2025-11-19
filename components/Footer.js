import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={estilos.footer}>
      <Text>(C) 2025. Utilizada API gratuita.</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  footer: {
    backgroundColor: '#62e641ff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 40,
  },
});
