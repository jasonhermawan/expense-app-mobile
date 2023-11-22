import { Stack } from "expo-router";
import react from "react";

export default function Layout() {

  return (
    <Stack >
      <Stack.Screen name="index" options={{
        headerShown: false
      }} />
      <Stack.Screen name="login" options={{
        headerShown: false
      }} />
      <Stack.Screen name="register" options={{
        headerShown: false
      }} />
      <Stack.Screen name="(tabs)" options={{
        headerShown: false
      }} />
    </Stack>
  );
}