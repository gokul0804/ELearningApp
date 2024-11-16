// src/components/screens/Password.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LockIcon from '../../../assets/icons/lock.svg';
import EyeIcon from '../../../assets/icons/dont-view.svg'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function Password() {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const validations = {
    length: password.length >= 8,
    lowercase: /[a-z]/.test(password),
    uppercase: /[A-Z]/.test(password),
    number: /[0-9]/.test(password),
    symbol: /[$@#%!*\?&]/.test(password),
  };

  const isPasswordValid = Object.values(validations).every(Boolean);

  const handleSubmit = async () => {
    if (isPasswordValid) {
      try {
        await AsyncStorage.setItem('userPassword', password);
        navigation.navigate('HomeTabs'); // Navigate to HomeTabs component
      } catch (error) {
        console.error('Error saving password:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../../assets/images/password-page.jpg')} 
        style={styles.image} 
      />
      
      <Text style={styles.title}>Set a Strong Password</Text>
      <Text style={styles.subtitle}>Set a strong password for your account.</Text>
      
      <View style={styles.inputContainer}>
        <LockIcon width="26" height="26" />
        
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          secureTextEntry={!isPasswordVisible}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity onPress={togglePasswordVisibility}>
          <EyeIcon width="24" height="24" />
        </TouchableOpacity>
      </View>

      <View style={styles.validationContainer}>
        <ValidationCheckbox label="Should contain at least 8 characters" isValid={validations.length} />
        <ValidationCheckbox label="Should contain a lowercase letter (a - z)" isValid={validations.lowercase} />
        <ValidationCheckbox label="Should contain an uppercase letter (A - Z)" isValid={validations.uppercase} />
        <ValidationCheckbox label="Should contain at least one number (0-9)" isValid={validations.number} />
        <ValidationCheckbox label="Should contain at least one symbol ($,@,#,%,!,*,?,&)" isValid={validations.symbol} />
      </View>

      <TouchableOpacity 
        style={[styles.button, !isPasswordValid && styles.buttonDisabled]} 
        onPress={handleSubmit} 
        disabled={!isPasswordValid}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const ValidationCheckbox = ({ label, isValid }) => (
  <View style={styles.validationItem}>
    <View style={[styles.checkbox, isValid && styles.checkboxValid]} />
    <Text style={[styles.validationText, isValid && styles.validationTextValid]}>{label}</Text>
  </View>
);

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
    marginBottom: 40,
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
  validationContainer: {
    width: '95%',
    marginBottom: 20,
  },
  validationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#d4d4d4',
    borderRadius: 3,
    marginRight: 10,
  },
  checkboxValid: {
    backgroundColor: 'blue',
    borderColor: 'blue',
  },
  validationText: {
    fontSize: 14,
    color: 'grey',
  },
  validationTextValid: {
    color: 'blue',
  },
  button: {
    backgroundColor: '#726aec',
    paddingVertical: 14,
    paddingHorizontal: 140,
    borderRadius: 5,
  },
  buttonDisabled: {
    backgroundColor: '#d4d4d4',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
