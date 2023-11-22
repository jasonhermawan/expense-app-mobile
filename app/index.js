import { Link, Redirect, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    // <Redirect href={"/(tabs)/home"} />
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/home-illustration.jpg')}/>
      <Text style={{fontSize: 35, fontWeight: "700", textAlign: "center", marginBottom: 12,}}>Welcome to FinTracks App</Text>
      <Text style={{fontSize: 16, fontWeight: "400", textAlign: "center", color: "rgba(84, 84, 84, 1)"}}>Start managing your financial now. Track your expense, income all in one app.</Text>
      <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Link href="/login" replace asChild>
              <Text style={{color: "white", textAlign: "center", fontSize: 20, fontWeight: 500}}>Login</Text>
            </Link>
          </View>
          <View style={styles.button2}>
            <Link href="/register" replace asChild>
              <Text style={{color: "black", textAlign: "center", fontSize: 20, fontWeight: 500}}>Register</Text>
            </Link>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 30,
    flex: 1,
    alignItems: "center"
  },
  image: {
    marginTop: 130,
    marginBottom: 30,
    height: 270,
    width: 270,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,
  },
  button: {
    backgroundColor: "black",
    width: 300,
    padding: 18,
    marginVertical: 5,
    borderRadius: 15,
  },
  button2: {
    backgroundColor: "rgba(197, 197, 197, 1)",
    width: 300,
    padding: 18,
    marginVertical: 5,
    borderRadius: 15,
  }
})
