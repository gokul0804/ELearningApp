import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Profile from '../../../assets/icons/profile.svg'; 

export default function Name({ navigation }) {
  const [name, setName] = useState('');
  const [error, setError] = useState(''); // State to hold error message

  const handleSubmit = async () => {
    if (name.trim() === '') {
      setError('Please enter your name.'); 
      return;
    }

    try {
      await AsyncStorage.setItem('userName', name);
      navigation.navigate('Password');
    } catch (error) {
      setError('Failed to save name. Please try again.'); 
    }
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../../assets/images/name-page.jpg')} 
        style={styles.image} 
      />
      
      <Text style={styles.title}>Enter Your Name</Text>
      <Text style={styles.subtitle}>Enter your full name for your account.</Text>
      
      <View style={styles.inputContainer}>
        <Profile width="24" height="24" />
        
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          value={name}
          onChangeText={setName}
        />
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    marginTop: 50,
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 70,
  },
  title: {
    fontSize: 26,
    fontWeight: '500',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: 'grey',
    textAlign: 'center',
    marginBottom: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '95%',
    borderWidth: 1,
    borderColor: '#d4d4d4',
    borderRadius: 5,
    paddingHorizontal: 8,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 55,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  button: {
    marginTop: 150,
    backgroundColor: '#726aec',
    paddingVertical: 14,
    paddingHorizontal: 140,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});
