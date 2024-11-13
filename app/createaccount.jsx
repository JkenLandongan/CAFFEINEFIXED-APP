import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

export default function CreateAccount() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const navigation = useNavigation(); 
  const handleCreateAccount = () => {
    if (password !== confirmPassword) {
      console.log('Passwords do not match');
      return;
    }
    
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);

    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      
      <TextInput
        placeholder="First Name"
        style={styles.input}
        onChangeText={setFirstName}
        value={firstName}
      />

      
      <TextInput
        placeholder="Last Name"
        style={styles.input}
        onChangeText={setLastName}
        value={lastName}
      />

      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        style={styles.input}
        onChangeText={setEmail}
        value={email}
      />


      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        onChangeText={setPassword}
        value={password}
      />

      <TextInput
        placeholder="Confirm Password"
        secureTextEntry
        style={styles.input}
        onChangeText={setConfirmPassword}
        value={confirmPassword}
      />

      <TouchableOpacity 
      onPress={() => navigation.navigate('login')} 
      style={styles.createAccountButton}
         
        >
          <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a8704e',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24, 
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: 'black', 
    width: '100%',
    paddingVertical: 8,
    marginBottom: 16,
  },
  createAccountButton: {
    backgroundColor: 'white', 
    width: '100%',
    paddingVertical: 12,
    borderRadius: 8, 
  },
  buttonText: {
    color: 'black', 
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
