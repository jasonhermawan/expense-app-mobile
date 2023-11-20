import { Link, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Wallet() {
  return (
    <>
      <Stack.Screen options={{headerShown: true, headerTitle: "Wallets"}} />
      <View style={styles.container}>
        <Text>Index of Wallet Tab</Text>
        <StatusBar style="auto" />
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
