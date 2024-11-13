import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the icon library

const ProfilePage = () => {
  const navigation = useNavigation();

  const userInfo = {
    name: 'Jken Landongan',
    profileImage: 'https://i.pinimg.com/474x/da/a2/52/daa25214ef7af98c5be682213b15852b.jpg',
  };

  const handleLogout = () => {
    navigation.navigate('login'); // Navigate back to the login page
  };

  const navigateTo = (screen) => {
    navigation.navigate(screen); // Navigate to the specified screen
  };

  const buttons = [
    { label: 'Account Details', screen: 'accountdetails', icon: 'person' },
    { label: 'Payment Details', screen: 'paymentdetails', icon: 'card' },
    { label: 'Notification Settings', screen: 'notificationsettings', icon: 'notifications' },
    { label: 'Order History', screen: 'orderhistory', icon: 'list' },
    { label: 'Respondents', screen: 'respondents', icon: 'people' },
    { label: 'Loyalty', screen: 'loyalty', icon: 'star' },
    { label: 'Edit Profile', screen: 'editprofile', icon: 'create' },
    { label: 'Logout', screen: 'getstarted', icon: 'log-out' },
  ];

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

      {/* Navigation Buttons Section */}
      <View className="mt-6">
        {buttons.map((item) => (
          <TouchableOpacity
            key={item.label}
            className="flex-row items-center bg-[#A06F54] p-3 rounded-lg shadow-lg mb-4"
            onPress={() => navigateTo(item.screen)}
          >
            <Icon name={item.icon} size={20} color="white" style={{ marginRight: 10 }} />
            <Text className="text-white font-bold text-left">{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default ProfilePage;
