import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const hotCoffeeImage = require('../assets/images/hot-coffee.gif'); 

const GetStarted = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image 
        source={hotCoffeeImage} 
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>
        Welcome to Our Coffee Shop!
      </Text>
      <Text style={styles.description}>
        Discover the best coffee in town and join our community of coffee lovers!
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          onPress={() => navigation.navigate('login')}
          style={styles.loginButton}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.navigate('createaccount')}
          style={styles.createAccountButton}
        >
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a8704e', 
    padding: 24,
  },
  image: {
    width: 256,
    height: 256, 
    marginBottom: 24,
  },
  title: {
    fontSize: 24, 
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#7B3F00', 
  },
  description: {
    fontSize: 18, 
    textAlign: 'center',
    marginBottom: 40,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#7B3F00', 
    borderRadius: 8, 
    paddingHorizontal: 32,
    paddingVertical: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  createAccountButton: {
    backgroundColor: '#7B3F00', 
    borderRadius: 8, 
    paddingHorizontal: 32,
    paddingVertical: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF', 
    fontWeight: '800',
    fontSize: 18,
  },
});

export default GetStarted;
