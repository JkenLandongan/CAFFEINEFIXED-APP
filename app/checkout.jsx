import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function CoffeeShopCheckoutPage() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('');

  const route = useRoute();
  const orderSummary = route.params?.orderSummary || [
    { name: 'Espresso', price: 130, quantity:  3}, // Default item (Espresso) added
  ];

  // Calculate total price
  const totalPrice = orderSummary.reduce((total, item) => total + item.price * item.quantity, 0);
  const navigation = useNavigation();

  const handleCheckout = () => {
    if (!name || !address || !deliveryMethod || !phoneNumber) {
      Alert.alert('Please fill all fields');
      return;
    }

    Alert.alert(
      "Order Confirmed",
      "Thanks for ordering!",
      [
        {
          text: "OK",
          onPress: () => {
            navigation.navigate('home'); // Navigate back to home page
          }
        }
      ],
      { cancelable: false }
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Coffee Shop Checkout</Text>

      {/* Order Summary */}
      <View style={styles.orderSummary}>
        <Text style={styles.subtitle}>Order Summary</Text>
        {orderSummary.map((item, index) => (
          <View key={index} style={styles.orderItem}>
            <Text>{item.quantity}x {item.name}</Text>
            <Text>₱{(item.price * item.quantity).toFixed(2)}</Text>
          </View>
        ))}
      </View>

      {/* Customer Info Input */}
      <TextInput 
        placeholder="Full Name" 
        style={styles.input} 
        onChangeText={setName} 
        value={name} 
      />
      <TextInput 
        placeholder="Delivery Address" 
        style={styles.input} 
        onChangeText={setAddress} 
        value={address} 
      />
      <TextInput 
        placeholder="Delivery Method (e.g., Pickup, Delivery, Gcash)" 
        style={styles.input} 
        onChangeText={setDeliveryMethod} 
        value={deliveryMethod} 
      />
      <TextInput 
        placeholder="Phone Number" 
        style={styles.input} 
        keyboardType="numeric" 
        onChangeText={setPhoneNumber} 
        value={phoneNumber} 
      />

      {/* Total Price */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ₱{totalPrice.toFixed(2)}</Text>
      </View>

      {/* Checkout Button */}
      <TouchableOpacity onPress={handleCheckout} style={styles.checkoutButton}>
        <Text style={styles.buttonText}>Confirm and Pay</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8E3D3',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    width: '100%',
    paddingVertical: 10,
    marginBottom: 15,
  },
  orderSummary: {
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  totalContainer: {
    marginVertical: 20,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#3b7d3c', // Green button
    width: '100%',
    paddingVertical: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
