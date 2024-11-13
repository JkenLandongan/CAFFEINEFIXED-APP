import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const CartPage = () => {
  const navigation = useNavigation(); // Get navigation prop
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Espresso', price: 130.00, quantity: 1 },

  ]);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const updateQuantity = (id, change) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    navigation.navigate('checkout', { cartItems });
    console.log('Proceeding to checkout...');
  };

  return (
    <ScrollView className="flex-1 bg-[#F5E1D8] p-5">
      <Text className="text-2xl font-bold mb-5">Your Cart</Text>
      {cartItems.map(item => (
        <View key={item.id} className="flex-row justify-between items-center mb-4 p-2 bg-white rounded-lg shadow-md">
          <Text className="text-lg font-semibold">{item.name}</Text>
          <Text className="text-lg text-[#6B4D4D]">₱{item.price.toFixed(2)}</Text>
          <View className="flex-row items-center">
            <TouchableOpacity onPress={() => updateQuantity(item.id, -1)} className="bg-[#A06F54] p-2 rounded">
              <Text className="text-white text-lg">-</Text>
            </TouchableOpacity>
            <Text className="text-lg mx-2">{item.quantity}</Text>
            <TouchableOpacity onPress={() => updateQuantity(item.id, 1)} className="bg-[#A06F54] p-2 rounded">
              <Text className="text-white text-lg">+</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => removeItem(item.id)} className="bg-[#61351d] p-2 rounded ml-2">
            <Text className="text-white text-lg">Remove</Text>
          </TouchableOpacity>
        </View>
      ))}
      <Text className="text-lg font-bold mt-5 text-right">Total: ₱{totalPrice.toFixed(2)}</Text>
      <TouchableOpacity onPress={handleCheckout} className="bg-[#A06F54] p-4 rounded mt-5">
        <Text className="text-white text-center text-lg font-bold">Checkout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CartPage;
