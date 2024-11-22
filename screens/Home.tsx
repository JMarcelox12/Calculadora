import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from "../styles";

export default function Home({ navigation }) {
  const [selectedOption, setSelectedOption] = useState("soma");

  const handleSelecionar = () => {
    if (selectedOption === "soma") {
      navigation.navigate('soma');
    } else if (selectedOption === "subtracao") {
      navigation.navigate('subtracao');
    } else if (selectedOption === "multiplicacao") {
      navigation.navigate('multiplicacao');
    } else if (selectedOption === "divisao") {
        navigation.navigate('divisao');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindos à minha super calculadora</Text>

      <Picker
        selectedValue={selectedOption}
        onValueChange={(itemValue) => setSelectedOption(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Soma" value="soma" />
        <Picker.Item label="Subtração" value="subtracao" />
        <Picker.Item label="Multiplicação" value="multiplicacao" />
        <Picker.Item label="Divisão" value="divisao" />
      </Picker>

      <TouchableOpacity style={styles.botaoEnviar} onPress={handleSelecionar}>
        <Text style={styles.texto}>Submeter</Text>
      </TouchableOpacity>
    </View>
  );
}