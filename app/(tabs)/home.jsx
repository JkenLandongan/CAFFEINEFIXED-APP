import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const CoffeeShopHome = () => {
  const dailySpecials = [
    
    {
      id: 1,
      name: 'Espresso',
      description: 'Rich and bold espresso shot.',
      price: '₱130.00',
      image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp1GzItrQ7g3pgAW2GieCKUlOkrIP-XzccjQ&s' },
    },
    {
      id: 2,
      name: 'Cappuccino',
      description: 'Creamy and frothy, the perfect blend.',
      price: '₱150.00',
      image: { uri: 'https://www.smeg.com/binaries/content/gallery/web_img_5627.jpg.jpg/web_img_5627.jpg.jpg/brx%3ApostcardDeskLarge' },
    },
    {
      id: 3,
      name: 'Latte',
      description: 'Smooth espresso with steamed milk.',
      price: '₱120.00',
      image: { uri: 'https://dwellbymichelle.com/wp-content/uploads/2020/06/DWELL-Iced-Cold-Brew-Latte-e1592262551330.jpg' },
    },
    {
      id: 4,
      name: 'Mocha',
      description: 'Chocolatey delight with espresso and milk.',
      price: '₱105.00',
      image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjSuAC_Ytd5pDDtZFRAkGfYIMG3_TbOgxrpQ&s' },
    },
    {
      id: 5,
      name: 'Americano',
      description: 'An Americano is a coffee drink made by diluting espresso with hot water, resulting in a rich yet smooth flavor..',
      price: '₱120.00',
      image: { uri: 'https://i.pinimg.com/474x/87/cb/44/87cb44a3f6c9be8c73d9ddad07366c09.jpg' },
    },
    {
      id: 6,
      name: 'Fudge Brownie Coffee',
      description: 'Fudge brownie coffee is a rich, indulgent blend that combines the flavors of chocolatey fudge brownies with robust coffee for a decadent treat.',
      price: '₱150.00',
      image: { uri: 'https://i.pinimg.com/474x/2d/d8/ac/2dd8ac97f30ebf072e8d708b34e95104.jpg' },
    },
  ];

  return (
    <View className="flex-1 bg-[#F5E1D8] p-6">
      {/* Header Section */}
      <View className="flex items-center mb-6">
       
        <Text className="text-4xl font-bold text-[#4B3D3D] text-center mt-4">Welcome to Caffeine Fixed!</Text>
        <Text className="text-lg text-center text-[#6B4D4D] mt-2">Your daily dose of happiness in a cup!</Text>
      </View>

      {/* Daily Specials Section */}
      <Text className="text-2xl font-bold text-[#4B3D3D] mb-4">Today's Specials</Text>
      <ScrollView>
        {dailySpecials.map((special) => (
          <View key={special.id} className="bg-[#E7D4C5] p-4 rounded-lg shadow-md mb-4">
            {special.image && special.image.uri ? (
              <Image
                source={special.image} // Handles web images
                className="w-full h-48 rounded-lg mb-4"
              />
            ) : (
              <View className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <Text className="text-[#6B4D4D]">No Image Available</Text>
              </View>
            )}
            <Text className="text-xl font-semibold text-[#4B3D3D]">{special.name}</Text>
            <Text className="text-[#6B4D4D]">{special.description}</Text>
            <Text className="text-lg font-bold text-[#4B3D3D]">{special.price}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Order Button */}
     
    </View>
  );
};

export default CoffeeShopHome;
