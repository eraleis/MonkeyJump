import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Goban } from '@sabaki/shudan'

import './node_modules/@sabaki/shudan/css/goban.css'

export default function App() {
  return (
    <View style={styles.container}>
      <Goban vertexSize={24} signMap={[[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, -1, 0], [0, 0, -1, 1, 0], [0, 0, 0, 0, 0]]} />
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
});
