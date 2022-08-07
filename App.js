import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

import Tarefa from '../AppTarefas/src/tarefa';

import { FontAwesome } from '@expo/vector-icons';

export default function App() {

  const [ tarefa, setTarefa ] = useState('');

  const [ list, setList] = useState([
    {
      key: '1',
      item: 'Compras'
    },
    {
      key: '2',
      item: 'React Native'
    },
]);

  function handleAdd() {
    alert(tarefa)
  }
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TESTE</Text>
      <View style={styles.containerInput}>
        <TextInput
        placeholder='Digite sua tarefas'
        style={styles.input}
        value={tarefa}
        onChangeText={ (text) => setTarefa(text)}
        />

        <TouchableOpacity style={styles.buttonADD} onPress={handleAdd}>
          <FontAwesome name="plus" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
      
      <FlatList
      data={list}
      keyExtractor={ (item) => item.key}
      renderItem={ ({item}) => <Tarefa data={item} />}
      />
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
  },
  containerInput:{
    flexDirection: 'row',
    width: '100%',
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22,
  },
  input:{
    width: '75%',
    backgroundColor: '#fbfbfb',
    height: 44,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  buttonADD:{
    width: '15%',
    height: 44,
    backgroundColor: '#73f7ff',
    marginLeft: 8,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center'
  }

});
