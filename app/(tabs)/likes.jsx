import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';

const CoffeeShopFavorites = () => {
  const [favorites, setFavorites] = useState([]);
  
  const menuItems = [
    {
      id: 1,
      name: 'Espresso',
      description: 'Rich and bold espresso shot.',
      price: '₱130.00',
      image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp1GzItrQ7g3pgAW2GieCKUlOkrIP-XzccjQ&s' },
    },
    {
      id: 2,
      name: 'Latte',
      description: 'Smooth espresso with steamed milk.',
      price: '₱120.00',
      image: { uri: 'https://dwellbymichelle.com/wp-content/uploads/2020/06/DWELL-Iced-Cold-Brew-Latte-e1592262551330.jpg' },
    },
    {
      id: 3,
      name: 'Mocha',
      description: 'Chocolatey delight with espresso and milk.',
      price: '₱105.00',
      image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjSuAC_Ytd5pDDtZFRAkGfYIMG3_TbOgxrpQ&s' },
    },
  ];

  const toggleFavorite = (id) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(id)) {
        return prevFavorites.filter(favId => favId !== id); // Remove from favorites
      } else {
        return [...prevFavorites, id]; // Add to favorites
      }
    });
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Favorites</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {menuItems.map(item => (
          <View key={item.id} style={styles.menuItem}>
            {item.image && item.image.uri ? (
              <Image source={item.image} style={styles.image} resizeMode="cover" />
            ) : (
              <View style={styles.placeholderImage}>
                <Text style={styles.placeholderText}>No Image Available</Text>
              </View>
            )}
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => toggleFavorite(item.id)}
            >
              <Text style={styles.buttonText}>
                {favorites.includes(item.id) ? ' 🤍 Add to Favorites ' : '❤️ Remove from Favorites'}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8E3D3',
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4B3D3D',
    textAlign: 'center',
    marginBottom: 20,
  },
  scrollContainer: {
    paddingBottom: 16,
  },
  menuItem: {
    backgroundColor: '#E7C7B3',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 8,
  },
  placeholderImage: {
    width: '100%',
    height: 150,
    backgroundColor: '#D3D3D3',
    borderRadius: 10,
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    color: '#6B4D4D',
  },
  itemName: {
    fontSize: 24,
    fontWeight: '600',
    color: '#4B3D3D',
  },
  itemDescription: {
    color: '#6B4D4D',
    marginVertical: 4,
  },
  itemPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4B3D3D',
  },
  button: {
    backgroundColor: '#A06F54',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default CoffeeShopFavorites;
