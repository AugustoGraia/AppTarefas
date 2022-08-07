
import React from 'react';

import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Tarefa({data}){
    
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} >
                <FontAwesome name="trash" size={24} color="#22272e"/>
            </TouchableOpacity>

            <Text>{data.item}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: 'rgba(196,196,196, 0.20)',
      marginTop: 12,
      padding: 12,
      borderRadius: 4,
      flexDirection: 'row',
      alignItems: 'center',
    },
    button:{
        marginRight: 8,
    }
     
  });
  