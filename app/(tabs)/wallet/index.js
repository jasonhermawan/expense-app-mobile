import axios from 'axios';
import React from 'react';
import { Link, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react/cjs/react.development";
import config from "../../../config";
import WalletCard from '../../../components/WalletCard';

export default function Wallet() {
  const API_URL= config.apiUrl;
  const [wallets, setWallets] = useState([]);

  const getWallets = async () => {
    try {
      const response = await axios.get(`${API_URL}/wallet`)
      setWallets(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getWallets()
  }, [])

  const printWallets = () => {
    return wallets.map((value) => {
      return (
        <WalletCard
          key={value.id}
          wallet={value.wallet}
          nominal="0"
        />
      )
    })
  }

  return (
    <>
      <StatusBar style="auto" />
      <Stack.Screen options={{headerShown: true, headerTitle: "Wallets"}} />
      <View style={styles.container}>
      <TouchableOpacity
          style={styles.fixedAdd}
        >
          <Link href="/wallet/AddWallet">
            <View >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 25,
                  fontWeight: "700",
                }}
              >
                +
              </Text>
            </View>
          </Link>
        </TouchableOpacity>
        {printWallets()}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  fixedAdd: {
    position: "absolute",
    zIndex: 1000,
    bottom: 20,
    right: 20,
    backgroundColor: "black",
    width: 60,
    height: 60,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
  },
});
