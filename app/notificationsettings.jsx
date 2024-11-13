import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NotificationSettings = () => {
  const navigation = useNavigation();

  const [orderNotifications, setOrderNotifications] = useState(true);
  const [promotionalNotifications, setPromotionalNotifications] = useState(false);
  const [newsNotifications, setNewsNotifications] = useState(true);

  const handleLogout = () => {
    navigation.navigate('login'); // Navigate back to the login page
  };

  const navigateTo = (screen) => {
    navigation.navigate(screen); // Navigate to the specified screen
  };

  return (
    <ScrollView className="flex-1 bg-[#F5E1D8] p-6" contentContainerStyle={{ paddingBottom: 20 }}>
      {/* Notification Settings Section */}
      <Text className="text-2xl font-bold text-[#4B3D3D] mb-4">Notification Settings</Text>

      <View className="mb-4">
        <Text className="text-lg text-[#6B4D4D]">Order Notifications</Text>
        <Switch
          value={orderNotifications}
          onValueChange={setOrderNotifications}
          thumbColor={orderNotifications ? '#A06F54' : '#f4f3f4'}
          trackColor={{ false: '#767577', true: '#6D3919' }}
        />
      </View>

      <View className="mb-4">
        <Text className="text-lg text-[#6B4D4D]">Promotional Notifications</Text>
        <Switch
          value={promotionalNotifications}
          onValueChange={setPromotionalNotifications}
          thumbColor={promotionalNotifications ? '#A06F54' : '#f4f3f4'}
          trackColor={{ false: '#767577', true: '#6D3919' }}
        />
      </View>

      <View className="mb-6">
        <Text className="text-lg text-[#6B4D4D]">News Notifications</Text>
        <Switch
          value={newsNotifications}
          onValueChange={setNewsNotifications}
          thumbColor={newsNotifications ? '#A06F54' : '#f4f3f4'}
          trackColor={{ false: '#767577', true: '#6D3919' }}
        />
      </View>

      {/* Save Changes Button */}
      <TouchableOpacity className="bg-[#A06F54] p-3 rounded-lg shadow-lg mb-4" onPress={() => alert('Notification settings saved!')}>
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

export default NotificationSettings;
