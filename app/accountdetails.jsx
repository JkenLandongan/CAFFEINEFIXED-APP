import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AccountDetails = () => {
  const navigation = useNavigation();

  const userInfo = {
    name: 'Jken Landongan',
    email: 'jkenlandongan@gmail.com',
    address: 'Toledo City',
    phone: '09279375182',
    profileImage: 'https://i.pinimg.com/474x/da/a2/52/daa25214ef7af98c5be682213b15852b.jpg',
  };

  const handleLogout = () => {
    navigation.navigate('login'); // Navigate back to the login page
  };

  const navigateTo = (screen) => {
    navigation.navigate(screen); // Navigate to the specified screen
  };

  return (
    <ScrollView className="flex-1 bg-[#F5E1D8] p-6" contentContainerStyle={{ paddingBottom: 20 }}>
      {/* Profile Section */}
      <View className="flex items-center mb-6">
        <Image
          source={{ uri: userInfo.profileImage }}
          className="w-32 h-32 rounded-full"
        />
        <Text className="text-3xl font-bold text-[#4B3D3D] text-center mt-4">{userInfo.name}</Text>
      </View>

      {/* Account Details Section */}
      <View className="mb-6">
        <Text className="text-2xl font-bold text-[#4B3D3D] mb-2">Account Details</Text>
        <Text className="text-lg text-[#6B4D4D]">Name: {userInfo.name}</Text>
        <Text className="text-lg text-[#6B4D4D]">Email: {userInfo.email}</Text>
        <Text className="text-lg text-[#6B4D4D]">Address: {userInfo.address}</Text>
        <Text className="text-lg text-[#6B4D4D]">Phone: {userInfo.phone}</Text>
      </View>

      {/* Navigation Buttons Section */}
     <View>

     <TouchableOpacity className="bg-[#A06F54] p-3 rounded-lg shadow-lg mt-6" onPress={() => navigation.goBack()}>
        <Text className="text-white text-center font-bold">Go Back</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AccountDetails;
