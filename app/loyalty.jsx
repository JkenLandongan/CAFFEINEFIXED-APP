import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoyaltyPage = () => {
  const navigation = useNavigation();

  // Example loyalty data
  const loyaltyPoints = 150;
  const rewards = [
    { id: 1, description: 'Free Coffee', pointsRequired: 100 },
    { id: 2, description: '10% Off Next Purchase', pointsRequired: 200 },
    { id: 3, description: 'Exclusive Merchandise', pointsRequired: 300 },
  ];

  const handleLogout = () => {
    navigation.navigate('login'); // Navigate back to the login page
  };

  const navigateTo = (screen) => {
    navigation.navigate(screen); // Navigate to the specified screen
  };

  return (
    <ScrollView className="flex-1 bg-[#F5E1D8] p-6" contentContainerStyle={{ paddingBottom: 20 }}>
      <Text className="text-2xl font-bold text-[#4B3D3D] mb-4">Loyalty Program</Text>

      <View className="mb-6">
        <Text className="text-lg text-[#6B4D4D]">Your Loyalty Points:</Text>
        <Text className="text-3xl font-bold text-[#A06F54]">{loyaltyPoints}</Text>
      </View>

      <Text className="text-lg font-bold text-[#4B3D3D] mb-2">Rewards:</Text>
      {rewards.map((reward) => (
        <View key={reward.id} className="bg-[#E7D4C5] p-4 rounded-lg shadow-md mb-4">
          <Text className="text-lg text-[#4B3D3D]">{reward.description}</Text>
          <Text className="text-[#6B4D4D]">Points Required: {reward.pointsRequired}</Text>
        </View>
      ))}

      {/* Navigation Buttons Section */}
      <View className="mt-6">
      <TouchableOpacity className="bg-[#A06F54] p-3 rounded-lg shadow-lg mt-6" onPress={() => navigation.goBack()}>
        <Text className="text-white text-center font-bold">Go Back</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default LoyaltyPage;
