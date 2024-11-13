import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OrderHistory = () => {
  const navigation = useNavigation();

  const [orders, setOrders] = useState([
    { id: 1, name: 'Espresso', price: 130.00, date: '2024-09-20', status: 'Delivered' },
    { id: 2, name: 'Latte', price: 120.00, date: '2024-09-18', status: 'Delivered' },
    { id: 3, name: 'Cappuccino', price: 140.00, date: '2024-09-15', status: 'Pending' },
  ]);

  return (
    <ScrollView className="flex-1 bg-[#F5E1D8] p-6">
      <Text className="text-2xl font-bold text-[#4B3D3D] mb-4">Order History</Text>
      {orders.length === 0 ? (
        <Text className="text-[#6B4D4D]">No orders found.</Text>
      ) : (
        orders.map((order) => (
          <View key={order.id} className="bg-[#E7D4C5] p-4 rounded-lg shadow-md mb-4">
            <Text className="text-xl font-semibold text-[#4B3D3D]">{order.name}</Text>
            <Text className="text-[#6B4D4D]">₱{order.price.toFixed(2)}</Text>
            <Text className="text-[#6B4D4D]">Ordered on: {order.date}</Text>
            <Text className={`text-[#6B4D4D] font-bold ${order.status === 'Delivered' ? 'text-green-600' : 'text-red-600'}`}>
              Status: {order.status}
            </Text>
          </View>
        ))
      )}

      <TouchableOpacity className="bg-[#A06F54] p-3 rounded-lg shadow-lg mt-6" onPress={() => navigation.goBack()}>
        <Text className="text-white text-center font-bold">Go Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default OrderHistory;
