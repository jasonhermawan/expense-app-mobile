import { Link, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function Detail() {
  return (
    <>
      <Stack.Screen options={{headerShown: true, headerTitle: "Transactions Detail"}} />
      <View style={styles.container}>
        <Text>Detail transaction history</Text>
        <StatusBar style="auto" />
        <Link href={"/home"}>
          <Text>Go back to home</Text>
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