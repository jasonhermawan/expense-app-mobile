import { Link, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function AddWallet() {
  return (
    <>
      <Stack.Screen options={{headerShown: true, headerTitle: "Add Wallet"}} />
      <View style={styles.container}>
        <Text>Add Wallet</Text>
        <StatusBar style="auto" />
        <Link href={"/wallet"}>
          <Text>Go back to wallet</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});