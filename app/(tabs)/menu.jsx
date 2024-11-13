import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const CaffeineFixedMenu = () => {
  const navigation = useNavigation(); // Get navigation prop
  const [cartItems, setCartItems] = useState([]); // State to manage cart items

  const menuItems = {
    HotCoffee: [
      { id: 1, name: 'Espresso', description: 'Rich and bold espresso shot.', price: 130.00 },
      { id: 2, name: 'Cappuccino', description: 'Creamy and frothy, the perfect blend.', price: 150.00 },
      { id: 3, name: 'Latte', description: 'Smooth espresso with steamed milk.', price: 120.00 },
      { id: 4, name: 'Mocha', description: 'Chocolatey delight with espresso and milk.', price: 105.00 },
      { id: 5, name: 'Americano', description: 'Espresso diluted with hot water.', price: 120.00 },
      { id: 6, name: 'Flat White', description: 'Velvety microfoam on espresso.', price: 150.00 },
    ],
    IcedCoffee: [
      { id: 7, name: 'Iced Latte', description: 'Chilled espresso with milk over ice.', price: 150.00 },
      { id: 8, name: 'Iced Mocha', description: 'Chocolatey iced espresso drink.', price: 140.00 },
    ],
    FudgeCoffee: [
      { id: 9, name: 'Fudge Brownie Coffee', description: 'Rich coffee with brownie flavors.', price: 150.00 },
      { id: 10, name: 'Caramel Fudge Latte', description: 'Latte with caramel fudge swirl.', price: 150.00 },
    ],
  };


  const handleAddToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]); // Add item to cart
    navigation.navigate('cart'); // Navigate to Cart page
    console.log('Added to cart:', item.name);
  };

  return (
    <View className="flex-1 bg-[#F5E1D8] p-4">
      <Text className="text-4xl font-bold text-[#4B3D3D] text-center mb-5">Caffeine Fixed Menu</Text>
      <ScrollView>
        {Object.keys(menuItems).map(category => (
          <View key={category}>
            <Text className="text-3xl font-bold text-[#4B3D3D] my-2">
              {category.replace(/([A-Z])/g, ' $1').trim()}
            </Text>
            {menuItems[category].map(item => (
              <View key={item.id} className="bg-[#E7D4C5] p-4 rounded-lg mb-3 shadow-md">
                <Text className="text-2xl font-semibold text-[#4B3D3D]">{item.name}</Text>
                <Text className="text-[#6B4D4D] my-1">{item.description}</Text>
                <Text className="text-xl font-bold text-[#4B3D3D]">₱{item.price.toFixed(2)}</Text>
                <TouchableOpacity className="bg-[#A06F54] p-2 rounded mt-2" onPress={() => handleAddToCart(item)}>
                  <Text className="text-white text-center font-bold">Add to Cart</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default CaffeineFixedMenu;
