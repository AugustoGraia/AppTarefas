import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TESTE</Text>
      <View>
        <TextInput
        placeholder='Digite sua tarefas'
        style={styles.input}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22272e',
    paddingTop: 28,
  },
  title:{
    fontWeight: 'bold',
    fontSize: 24,
    color: '#ffff',
    marginTop: '5%',
    paddingStart: '5%',
    marginBottom: 12,
  }
});
