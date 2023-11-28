import { Link, Redirect, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';
import CalendarPicker from 'react-native-calendar-picker';
import React from 'react';
import { useState } from 'react/cjs/react.development';
import axios from 'axios';
import config from '../../../config';

export default function AddTransaction() {
  const API_URL= config.apiUrl;

  const [type, setType] = useState("Income");
  const [date, setDate] = useState("2023-12-12")
  const [name, setName] = useState("");
  const [nominal, setNominal] = useState();
  const [description, setDescription] = useState("");

  const onAddTransaction = async () => {
    try {
      const response = await axios.post(`${API_URL}/transaction`, {
        name,
        type,
        nominal: Number(nominal),
        description,
        date,
        wallet: 1,
      })
      setName("");
      setNominal("");
      setDescription("")
      return <Redirect href={"/home"} />
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Stack.Screen options={{headerShown: false}} />
      <StatusBar style="auto" />
      <ScrollView style={styles.container}>
        <View style={styles.inputContainer}>
          <CalendarPicker 
          />
          <View style={{marginTop: 20,}}>
            <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 10,}}>
              <Pressable onPress={() => setType("Income")} style={type === "Income" ? {backgroundColor:"rgba(209, 255, 216, 1)", width: "49%", padding: 12, borderRadius: 10,} : {width: "49%", borderWidth:1, borderColor: "rgba(0, 131, 21, 1)", padding: 12, borderRadius: 10,}}>
                <Text style={type === "Income" ? {color: "black", textAlign: "center"} : {color: "rgba(0, 131, 21, 1)", textAlign: "center"}}>Income</Text>
              </Pressable>
              <Pressable  onPress={() => setType("Expense")} style={type === "Expense" ? {backgroundColor:"rgba(255, 209, 209, 1)", width: "49%", padding: 12, borderRadius: 10,} : {width: "49%", borderWidth:1, borderColor: "rgba(147, 33, 33, 1)", padding: 12, borderRadius: 10,}}>
                <Text style={type === "Expense" ? {color: "black", textAlign: "center"} : {color: "rgba(147, 33, 33, 1)", textAlign: "center"}}>Expense</Text>
              </Pressable>
            </View>
            <TextInput value={name} style={styles.input} placeholder="Transaction Name" placeholderTextColor="gray" onChangeText={setName}/>
            <TextInput value={nominal} style={styles.input} placeholder="Amount" placeholderTextColor="gray" onChangeText={setNominal} />
            <TextInput value={description} style={styles.input} placeholder="Decription (optional)" placeholderTextColor="gray" onChangeText={setDescription} />
          </View>
          <Pressable onPress={() => onAddTransaction()} style={{width: "100%", padding: 15, marginTop: 0, backgroundColor:"black", borderRadius:10}}>
            <Text style={{textAlign: "center", color: "white"}}>Add Transaction</Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
    marginTop: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  input: {
    padding: 15,
    marginTop: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "darkgray",
    color: "black",
  }
});