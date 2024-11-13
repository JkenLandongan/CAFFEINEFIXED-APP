import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EditProfilePage = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('Jken Landongan');
  const [email, setEmail] = useState('jkenlandongan@gmail.com');
  const [phone, setPhone] = useState('09279375182');
  const [address, setAddress] = useState('Toledo City');

  const handleSave = () => {
    // Here you would typically send the updated data to your server
    Alert.alert('Success', 'Your profile has been updated.');
    navigation.navigate('Profile'); // Navigate back to the profile page
  };

  const handleLogout = () => {
    navigation.navigate('login'); // Navigate back to the login page
  };

  return (
    <ScrollView className="flex-1 bg-[#F5E1D8] p-6" contentContainerStyle={{ paddingBottom: 20 }}>
      <Text className="text-2xl font-bold text-[#4B3D3D] mb-4">Edit Profile</Text>

      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        className="bg-white p-4 rounded-lg shadow-md mb-4"
      />
      
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
        className="bg-white p-4 rounded-lg shadow-md mb-4"
      />

      <TextInput
        value={phone}
        onChangeText={setPhone}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        className="bg-white p-4 rounded-lg shadow-md mb-4"
      />

      <TextInput
        value={address}
        onChangeText={setAddress}
        placeholder="Address"
        className="bg-white p-4 rounded-lg shadow-md mb-4"
      />

      <TouchableOpacity className="bg-[#A06F54] p-3 rounded-lg shadow-lg mb-4" onPress={handleSave}>
        <Text className="text-white text-center font-bold">Save Changes</Text>
      </TouchableOpacity>

      {/* Navigation Buttons Section */}
      <View className="mt-6">
      <TouchableOpacity className="bg-[#A06F54] p-3 rounded-lg shadow-lg mt-6" onPress={() => navigation.goBack()}>
        <Text className="text-white text-center font-bold">Go Back</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default EditProfilePage;
