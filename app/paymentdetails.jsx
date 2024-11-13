import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PaymentDetails = () => {
  const navigation = useNavigation();
  
  const [cardHolderName, setCardHolderName] = useState('Jken Landongan');
  const [address, setaddress] = useState('Toledo City');
  const [cardNumber, setCardNumber] = useState('09269390574');
  
 

  const handleLogout = () => {
    navigation.navigate('login'); // Navigate back to the login page
  };

  const navigateTo = (screen) => {
    navigation.navigate(screen); // Navigate to the specified screen
  };

  return (
    <ScrollView className="flex-1 bg-[#F5E1D8] p-6" contentContainerStyle={{ paddingBottom: 20 }}>
      {/* Payment Details Section */}
      <Text className="text-2xl font-bold text-[#4B3D3D] mb-4">Payment Details</Text>

      <View className="mb-6">
        <Text className="text-lg text-[#6B4D4D]"> Name</Text>
        <TextInput
          value={cardHolderName}
          onChangeText={setCardHolderName}
          className="bg-white p-3 rounded-lg border border-gray-300 mb-4"
          placeholder="Enter card holder name"
        />
         <Text className="text-lg text-[#6B4D4D]"> Address </Text>
        <TextInput
          value={address}
          onChangeText={setaddress}
          className="bg-white p-3 rounded-lg border border-gray-300 mb-4"
          placeholder="Enter address"
        />

        <Text className="text-lg text-[#6B4D4D]">Phone Number</Text>
        <TextInput
          value={cardNumber}
          onChangeText={setCardNumber}
          className="bg-white p-3 rounded-lg border border-gray-300 mb-4"
          placeholder="Enter card number"
          keyboardType="numeric"
        />



        
        
        </View>
      

      {/* Save Changes Button */}
      <TouchableOpacity className="bg-[#A06F54] p-3 rounded-lg shadow-lg mb-4" onPress={() => alert('Payment details saved!')}>
        <Text className="text-white text-center font-bold">Save Changes</Text>
      </TouchableOpacity>

      {/* Navigation Buttons Section */}
      <View>

        <TouchableOpacity className="bg-[#A06F54] p-3 rounded-lg shadow-lg mt-6" onPress={() => navigation.goBack()}>
        <Text className="text-white text-center font-bold">Go Back</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default PaymentDetails;
