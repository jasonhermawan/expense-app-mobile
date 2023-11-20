import { Link, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{headerShown: true, headerTitle: "Home"}} />
      <View style={styles.container}>
        <Text>Index of Home Tab</Text>
        <StatusBar style="auto" />
        <Link href={"/home/detail-page"}>
          <Text>Go to detail page</Text>
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
