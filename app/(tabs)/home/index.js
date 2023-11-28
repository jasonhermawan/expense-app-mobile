import { Link, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import HistoryCard from "../../../components/HistoryCard";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import config from "../../../config";

export default function Home() {
  const API_URL= config.apiUrl;

  const [transactions, setTransactions] = useState([]);
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);

  const getTransaction = async () => {
    try {
      const response = await axios.get(`${API_URL}/transaction`)
      // console.log("response", response)
      setTransactions(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getIncome = async () => {
    try {
      const response = await axios.get(`${API_URL}/transaction/nominal?type=income`)
      setIncome(response.data[0].total_nominal);
    } catch (error) {
      console.log(error)
    }
  }

  const getExpense = async () => {
    try {
      const response = await axios.get(`${API_URL}/transaction/nominal?type=expense`)
      setExpense(response.data[0].total_nominal);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTransaction()
    getIncome()
    getExpense()
  }, [])

  const printHistoryTransaction = () => {
    return transactions.map((val) => {
      return (
        <HistoryCard 
          key={val.id}
          name={val.name}
          type={val.type}
          nominal={val.nominal}
        />
      )
    })
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: true, headerTitle: "Home" }} />
      <StatusBar style="auto" />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.fixedAdd}
        >
          <Link href="/home/AddTransaction">
            <View>
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
        <ScrollView>
          <View style={styles.topContainer}>
            <View style={styles.statsCard}>
              <Text style={{ color: "white" }}>Total Balance</Text>
              <Text
                style={{
                  color: "white",
                  fontWeight: "700",
                  marginTop: 5,
                  fontSize: 25,
                }}
              >
                Rp {(income - expense).toLocaleString("id")}
              </Text>
              <View style={styles.statsDetail}>
                <View style={styles.statsCardItem}>
                  <Text style={{ color: "white" }}>Income</Text>
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "700",
                      marginTop: 5,
                      fontSize: 15,
                    }}
                  >
                    Rp {Number(income).toLocaleString("id")}
                  </Text>
                </View>
                <View style={styles.statsCardItem}>
                  <Text style={{ color: "white" }}>Expense</Text>
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "700",
                      marginTop: 5,
                      fontSize: 15,
                    }}
                  >
                    Rp {Number(expense).toLocaleString("id")}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.historyContainer}>
            <View style={styles.historyHeader}>
              <Text style={{ fontWeight: "700", fontSize: 15 }}>
                Transaction History
              </Text>
              <TouchableOpacity>
                <Link href={"/home/History"}>
                  <Text>See all</Text>
                </Link>
              </TouchableOpacity>
            </View>
            <View style={styles.historyList}>

              {printHistoryTransaction()}

            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  topContainer: {
    backgroundColor: "rgba(245, 245, 245, 1)",
    padding: 20,
    paddingVertical: 30,
    paddingBottom: 75,
  },
  statsCard: {
    backgroundColor: "black",
    padding: 20,
    borderRadius: 10,
  },
  historyContainer: {
    backgroundColor: "white",
    marginTop: -45,
    minHeight: 300,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 20,
    paddingVertical: 30,
    shadowColor: "rgba(230, 230, 230, 1)",
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  statsDetail: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statsCardItem: {
    borderWidth: 1,
    borderColor: "rgba(77, 77, 77, 1)",
    padding: 10,
    borderRadius: 5,
    width: "49%",
  },
  historyHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  historyList: {
    marginTop: 20,
  },
  cardDetail: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  historyCard: {
    marginVertical: 5,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "rgba(230, 230, 230, 1)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 5,
    borderRadius: 10,
  },
});
