import { Tabs } from "expo-router";
import { Entypo } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{ 
          tabBarLabel: "Home", 
          tabBarLabelStyle: {color: "black"},
          title: "Home", 
          tabBarIcon: ({focused}) => focused? (
            <Entypo name="home" size={24} color="black" />
          ) : (
            <Entypo name="home" size={24} color="gray" />
          )
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{ 
          tabBarLabel: "Wallets",
          tabBarLabelStyle: {color: "black"},
          title: "Wallets",
          tabBarIcon: ({focused}) => focused? (
            <Entypo name="wallet" size={24} color="black" />
          ) : (
            <Entypo name="wallet" size={24} color="gray" />
          )
        }}
      />
      <Tabs.Screen
        name="account"
        options={{ 
          tabBarLabel: "Account",
          tabBarLabelStyle: {color: "black"},
          title: "Account",
          tabBarIcon: ({focused}) => focused? (
            <MaterialCommunityIcons name="account" size={24} color="black" />
          ) : (
            <MaterialCommunityIcons name="account" size={24} color="gray" />
          )
        }}
      />
    </Tabs>
  );
}
