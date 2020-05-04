import React, { Component, useState } from 'react';
import { Avatar, Button, Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, View, Text, Image, ImageBackground, TextInput, TouchableOpacity, Picker } from 'react-native';
import { disableExpoCliLogging } from 'expo/build/logs/Logs';
import axios from 'axios';

//try putting the enter name, enter email, and picker in a view then the touchopa in a view and move to bottom

export default function profileSetup({ navigation }) {
  const [name, setName] = useState('Tyler');
  const [email, setEmail] = useState('');
  const [selectedValue, setSelectedValue] = useState('Tyler');

  function backend() {}

  function combined() {
    backend();
    selectedValue === 'id' ? navigation.navigate('Main') : navigation.navigate('ID', { name: name, id: 'ID' });
  }

  return (
    <View style={styles.mainView}>
      <Text style={styles.enterName}>Enter Name</Text>

      <TextInput style={styles.nameField} placeholder='e.g John Doe' onChangeText={val => setName(val)} />

      <Text style={styles.enterName}>Enter email</Text>

      <TextInput
        style={styles.nameField}
        placeholder='e.g example@gmail.com'
        keyboardType='email-address'
        onChangeText={val => setEmail(val)}
      />

      <Text style={styles.pickerText}>Please choose who you want to continue as</Text>

      <View style={styles.pickerView}>
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          {/* <Picker.Item label=' ' value='null' /> */}
          <Picker.Item label='User' value='id' />
          <Picker.Item label='Designer' value='nid' />
        </Picker>
        <TouchableOpacity style={styles.continueButton} onPress={() => combined()}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  enterName: {
    padding: 8,
  },
  nameField: {
    borderWidth: 2,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 300,
  },
  picker: {
    width: 10,
  },
  pickerText: {
    padding: 8,
  },
  pickerView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueButton: {
    marginTop: 150,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#00BCD4',
    borderRadius: 30,
    borderColor: '#fff',
  },
  continueText: {
    marginLeft: 90,
    marginRight: 90,
  },
});
