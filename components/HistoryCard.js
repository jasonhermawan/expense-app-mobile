import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function HistoryCard(props) {
  return (
    <View style={styles.historyCard}>
      <View style={styles.cardDetail}>
        <View style={
            {backgroundColor: props.type === "Expense" ? "rgba(255, 209, 209, 1)" : "rgba(209, 255, 216, 1)", padding: 10, borderRadius: "50%"}
          }>
          <AntDesign name={props.type === "Expense" ? "arrowdown" : "arrowup" } size={24} color="black" />
        </View>
        <View>
          <Text style={{ fontWeight: "700", fontSize: 14 }}>{props.name}</Text>
          <Text>{props.type}</Text>
        </View>
      </View>
      <View>
        <Text>{props.type === "Expense" ? `- Rp ${Number(props.nominal).toLocaleString("id")}` : `Rp ${Number(props.nominal).toLocaleString("id")}`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  }
});
