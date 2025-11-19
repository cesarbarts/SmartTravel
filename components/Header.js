import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={estilos.header}>
      <Text style={estilos.headerText}>$martTravel</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  header: {
    backgroundColor: '#62e641ff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 10,
  },
  headerText: {
    fontSize: 24,
  },
});
