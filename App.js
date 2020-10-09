import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, ScrollView} from 'react-native';

export default function App() {
  const [name, setName] = useState('Michal');
  const [age, setAge] = useState(32);
  const [person, setPerson] = useState({
    name: 'Mariusz',
    age: 21,
  });

  const [people, setPeople] = useState([
    { key: 1, name: 'Jan', age: 32} ,
    { key: 2, name: 'Roman', age: 12 },
    { key: 3, name: 'Kasjusz', age: 54 },
    { key: 4, name: 'Tadeusz', age: 12 },
    { key: 5, name: 'Leszek', age: 72 },
    { key: 6, name: 'Abraham', age: 65 },
  ])

  const clickHandler = () => {

      setName('Roman');
      setPerson({ name: 'Poncjusz', age: 23});
  }

  return (
    <View style={styles.container}>
      {/* Basics */}
      <View style={styles.header}>
        <Text style={styles.boldText}>Hi, ia am {name} and my age is {age}</Text>
        <Text style={styles.boldText}>His name is {person.name} and his age is {person.age}</Text>
      </View>
      
      <Text>Write down your name</Text>
      <TextInput
        multiline 
        style={styles.input} 
        placeholder='e.g. John Doe' 
        onChangeText={(value) => setName(value)}/>

      <Text>Write down your age</Text>
      <TextInput 
        keyboardType='numeric'
        style={styles.input} 
        placeholder="e.g. 45" 
        onChangeText={(value) => setAge(value)} />

      <Text>Econa maker</Text>

      <View style={styles.buttonContainer}>
        <Button title='Update me' onPress={clickHandler} />
      </View>
      <StatusBar style="auto" />

    {/* Lists and scrols view */}
    
      <ScrollView>
      { people.map((item) => {
        return (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )
        
      })}
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
//    justifyContent: 'center',
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
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'green',
    fontSize:24,
  },  
});
