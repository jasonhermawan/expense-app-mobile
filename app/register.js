import { Link, Redirect } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function Register() {
  return (
    <View style={styles.container}>
    <View style={styles.topSection}>
      <Text style={{fontSize: 35, fontWeight: "700", textAlign:"left", marginBottom: 12,}}>Register Account</Text>
      <Text style={{fontSize: 22, fontWeight: "400", textAlign:"left", color: "rgba(84, 84, 84, 1)"}}>You're one step closer. </Text>
      <View style={styles.inputSection}>
      <Text style={{fontWeight: "600"}}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter your email"/>
        <Text style={{fontWeight: "600"}}>Password</Text>
        <TextInput style={styles.input} placeholder="Enter your password" secureTextEntry={true}/>
        <Text style={{fontWeight: "600"}}>Confirm Password</Text>
        <TextInput style={styles.input} placeholder="Confirm your password" secureTextEntry={true}/>
      </View>
    </View>
    <View style={styles.buttonContainer}>
      <Link href="/login" replace asChild>
        <Text style={{textAlign: "center", marginBottom: 5,}}>Already have an account? Login</Text>
      </Link>
        <View style={styles.button}>
          <Link href="/home" replace asChild>
            <Text style={{color: "white", textAlign: "center", fontSize: 20, fontWeight: 500}}>Register</Text>
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
  topSection: {
    width: "100%",
    marginTop: 120,
  },
  inputSection: {
    marginTop: 50,
  },
  input: {
    padding: 20,
    marginTop: 5,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 15,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,
  },
  button: {
    backgroundColor: "black",
    width: 330,
    padding: 18,
    marginVertical: 5,
    borderRadius: 15,
  },
})