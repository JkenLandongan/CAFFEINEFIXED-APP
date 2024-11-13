import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RespondentsPage = () => {
  const navigation = useNavigation();
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    if (feedback.trim() === '') {
      Alert.alert('Error', 'Please enter your feedback.');
      return;
    }

    // Here you would usually send the feedback to your server
    Alert.alert('Success', 'Your feedback has been submitted.');
    setFeedback(''); // Clear the input
  };

  const handleLogout = () => {
    navigation.navigate('login'); // Navigate back to the login page
  };

  return (
    <ScrollView className="flex-1 bg-[#F5E1D8] p-6" contentContainerStyle={{ paddingBottom: 20 }}>
      <Text className="text-2xl font-bold text-[#4B3D3D] mb-4">Respondents</Text>

      <Text className="text-lg text-[#6B4D4D] mb-2">We value your feedback!</Text>
      <TextInput
        value={feedback}
        onChangeText={setFeedback}
        multiline
        placeholder="Type your feedback or inquiry here..."
        className="bg-white p-4 rounded-lg shadow-md mb-4"
        style={{ height: 100, textAlignVertical: 'top' }}
      />

      <TouchableOpacity className="bg-[#A06F54] p-3 rounded-lg shadow-lg" onPress={handleSubmit}>
        <Text className="text-white text-center font-bold">Submit Feedback</Text>
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

export default RespondentsPage;
