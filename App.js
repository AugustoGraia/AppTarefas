import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

import Tarefa from '../AppTarefas/src/tarefa';

import { FontAwesome } from '@expo/vector-icons';

export default function App() {

  const [ tarefa, setTarefa ] = useState('');

  const [ list, setList] = useState([ ]);

  function handleAdd() {
    
    if(tarefa === ''){
      return;
    }

    const data = {
      key: Date.now(),
      item: tarefa
    }

    setList(velhoArray => [data, ...velhoArray]);

    setTarefa();
  }
  //Devolve todas as tarefas que são diferentes do parametro
  function handleDelete(item){
    let filtroItem = list.filter((tarefa) => {
      return (tarefa.item !== item)
    })

    setList(filtroItem);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Compras</Text>
      <View style={styles.containerInput}>
        <TextInput
        placeholder='Digite seu produto'
        style={styles.input}
        value={tarefa}
        onChangeText={ (text) => setTarefa(text)}
        />

        <TouchableOpacity style={styles.buttonADD} onPress={handleAdd}>
          <FontAwesome name="plus" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
      
      <FlatList
      style={styles.FlatList}
      data={list}
      keyExtractor={ (item) => item.key}
      renderItem={ ({item}) => <Tarefa data={item} deleteItem={ () => handleDelete(item.item)} />}
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
  },
  FlatList:{
    flex: 1,
    backgroundColor: '#fff',
    paddingStart: '4%',
    paddingEnd: '4%',
  }


});
