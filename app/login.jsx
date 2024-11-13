import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router'; 

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    
    setIsLoggedIn(true); 
  };

  return (
    <View className="flex-1 justify-center items-center p-4 bg-[#a8704e]">
      {!isLoggedIn && (
        <>
         
          <Text className="text-3xl font-bold mb-5">Login</Text>

        
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            className="border-b w-full mb-4 p-2"
            onChangeText={setEmail}
            value={email}
          />

          <TextInput
            placeholder="Password"
            secureTextEntry
            className="border-b w-full mb-4 p-2"
            onChangeText={setPassword}
            value={password}
          />
        </>
      )}

     
      <TouchableOpacity className="bg-white p-3 rounded w-full" onPress={handleLogin}>
        <Link href="/home" className="text-black text-center font-bold">Login</Link>
      </TouchableOpacity>
    </View>
  );
}
