import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput} from 'react-native';

export default function App() {
  const [name, setName] = useState('Michal');
  const [person, setPerson] = useState({
    name: 'Mariusz',
    age: 21,
  });

  const clickHandler = () => {

      setName('Roman');
      setPerson({ name: 'Poncjusz', age: 23});
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hi, ia am {name}</Text>
        <Text style={styles.boldText}>His name is {person.name} and his age is {person.age}</Text>
      </View>

      <TextInput style={styles.input} placeholder='e.g. John Doe' />

      <Text>Econa maker</Text>

      <View style={styles.buttonContainer}>
        <Button title='Update me' onPress={clickHandler} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#A30AB1',
    padding: 20, 
  },
  boldText: {
    fontWeight: 'bold',
    color: 'green'
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
});
