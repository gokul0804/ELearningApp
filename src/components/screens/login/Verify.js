import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

const { height } = Dimensions.get('window');
const CELL_COUNT = 4;

const App = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('+91');
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(30);
  const ref = useBlurOnFulfill({ value: otp, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({ value: otp, setValue: setOtp });

  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleSendOtp = () => {
    if (phoneNumber.length !== 13) {
      Alert.alert('Error', 'Please enter a valid 10-digit phone number.');
      return;
    }
    Alert.alert('OTP sent to:', phoneNumber);
    setTimer(30);
  };

  const handleVerify = async () => {
    if (phoneNumber.length !== 13) {
      Alert.alert('Error', 'Please enter a valid phone number before verifying.');
      return;
    }

    try {
      // Save phone number to AsyncStorage
      await AsyncStorage.setItem('phoneNumber', phoneNumber);
      Alert.alert('Success', 'Phone number saved successfully!');
      navigation.navigate('Name'); // Navigate to Name.js
    } catch (error) {
      Alert.alert('Error', 'Failed to save phone number. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/otp-page.jpg')} style={styles.image} />
      <Text style={styles.title}>Verify OTP</Text>
      <Text style={styles.subtitle}>
        Please enter the 4-digit verification code sent to{' '}
        <Text style={styles.phoneNumber}>{phoneNumber}</Text>
      </Text>

      <TextInput
        style={styles.input}
        keyboardType="phone-pad"
        placeholder="Enter your 10-digit phone number"
        maxLength={13}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

      <TouchableOpacity style={styles.sendOtpButton} onPress={handleSendOtp}>
        <Text style={styles.sendOtpText}>Send OTP</Text>
      </TouchableOpacity>

      <View style={styles.otpContainer}>
        <CodeField
          ref={ref}
          {...props}
          value={otp}
          onChangeText={setOtp}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
      </View>

      <View style={styles.resendContainer}>
        <Text style={styles.resendText}>Don't receive code? </Text>
        <Text style={styles.timerText}>{timer} sec</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleVerify}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles remain unchanged...
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: height * 0.3,
    resizeMode: 'contain',
    marginTop: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '500',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: 'grey',
    textAlign: 'center',
    marginBottom: 24,
  },
  phoneNumber: {
    fontWeight: 'bold',
  },
  input: {
    width: '85%',
    height: 40,
    borderWidth: 1,
    borderColor: '#d4d4d4',
    borderRadius: 5,
    paddingHorizontal: 8,
    fontSize: 14,
    marginBottom: 10,
  },
  sendOtpButton: {
    backgroundColor: '#726aec',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  sendOtpText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    marginBottom: 10,
  },
  codeFieldRoot: {
    marginTop: 20,
    width: '100%',
    justifyContent: 'space-around',
  },
  cell: {
    width: 50,
    height: 50,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
  resendContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft: 130,
  },
  resendText: {
    fontSize: 12,
    color: 'grey',
  },
  timerText: {
    fontSize: 12,
    color: 'blue',
    fontWeight: 'bold',
  },
  button: {
    marginTop: 25,
    backgroundColor: '#726aec',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 5,
    width: "80%",
    marginTop: -2,
  },
  buttonText: {
    marginLeft: 65,
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default App;
