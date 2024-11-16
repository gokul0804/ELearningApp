import { View, Text, Image, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import FlagIcon from '../../../assets/icons/flag.svg';
import DropdownIcon from '../../../assets/icons/drop-down.svg';
import PhoneIcon from '../../../assets/icons/phone.svg';

const { height } = Dimensions.get('window');

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const fetchPhoneNumber = async () => {
      const storedPhoneNumber = await AsyncStorage.getItem('phoneNumber');
      // Removed automatic navigation to Home
    };
    fetchPhoneNumber();
  }, [navigation]);

  const handleJoinNow = async () => {
    const phoneRegex = /^[0-9]{10}$/; // Regular expression for 10-digit phone number

    if (phoneRegex.test(phoneNumber)) {
      const storedAccounts = JSON.parse(await AsyncStorage.getItem('accounts')) || [];
      
      if (storedAccounts.includes(phoneNumber)) {
        await AsyncStorage.setItem('phoneNumber', phoneNumber);
        console.log('Phone number saved:', phoneNumber);
        navigation.navigate('Home'); // Navigate to Home after saving
      } else {
        setErrorMessage('No such mobile number registered.');
      }
    } else {
      setErrorMessage('Please enter a valid 10-digit phone number.');
    }
  };

  const handleChangePhoneNumber = (number) => {
    setPhoneNumber(number);
    setErrorMessage(''); // Clear error message on new input
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/login-page.jpg')} style={styles.image} />
      <Text style={styles.title}>Login to your account</Text>
      <Text style={styles.subtitle}>Login with your phone number</Text>

      <View style={styles.inputContainers}>
        <TouchableOpacity style={styles.flagContainer}>
          <FlagIcon width={38} height={38} />
          <DropdownIcon marginRight={-2} width={12} height={12} />
        </TouchableOpacity>

        <View style={[styles.inputContainer, errorMessage ? styles.inputError : null]}>
          <PhoneIcon style={styles.phoneIcon} width={24} height={24} />
          <Text style={styles.prefix}>+91</Text>
          <TextInput
            style={styles.textInput}
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={handleChangePhoneNumber}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleJoinNow}>
        <Text style={styles.buttonText}>Join Now</Text>
      </TouchableOpacity>

      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

      <View style={styles.accountContainer}>
        <Text style={styles.accountText}>don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Verify')}>
          <Text style={styles.createAccountText}> Create an Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
    backgroundColor: "#fff",
  },
  image: {
    width: '100%',
    height: height * 0.3,
    resizeMode: 'contain',
    marginTop: 50,
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '500',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: 'grey',
    marginBottom: 24,
  },
  inputContainers: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#726aec',
    borderRadius: 5,
    paddingHorizontal: 8,
    width: '85%',
    height: 50,
    marginBottom: 20,
  },
  inputError: {
    borderColor: 'red', // Change the border color to red on error
  },
  flagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  prefix: {
    fontSize: 16,
    marginRight: 8,
    alignSelf: 'center',
  },
  textInput: {
    flex: 1,
    height: '100%',
    paddingLeft: 8,
    fontSize: 16,
  },
  phoneIcon: {
    marginRight: 8,
  },
  button: {
    marginTop: 25,
    backgroundColor: '#726aec',
    paddingVertical: 15,
    paddingHorizontal: 138,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    fontSize: 16,
  },
  accountContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  accountText: {
    fontSize: 16,
    color: 'grey',
  },
  createAccountText: {
    fontSize: 16,
    color: '#726aec',
    fontWeight: '500',
  },
});
