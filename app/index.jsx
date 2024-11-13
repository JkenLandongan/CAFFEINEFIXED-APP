import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'expo-router'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/hot-coffee.gif')}
        style={styles.image}
      />
      
      
      <Text style={styles.title}>WELCOME TO CAFFEINE FIXED</Text>
      
      
      <Link href="/getstarted" style={styles.linkButton}>
        <Text style={styles.buttonText}>Get Started</Text>
      </Link>
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a8704e', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  image: {
    width: 300,
    height: 300, 
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#7B3F00', 
  },
  linkButton: {
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
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF', 
    fontWeight: '800',
    fontSize: 18,
  },
});
