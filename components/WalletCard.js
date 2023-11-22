import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

export default function WalletCard(props) {
  return (
    <View style={styles.walletCard}>
      <View style={styles.cardDetail}>
        <View style={
            {backgroundColor: "rgba(240, 240, 240, 1)", padding: 10, borderRadius: "50%"}
          }>
          <MaterialCommunityIcons name="wallet" size={24} color="black" />
        </View>
        <View>
          <Text style={{ fontWeight: "700", fontSize: 14 }}>{props.wallet}</Text>
        </View>
      </View>
      <View style={{flexDirection: "row", alignItems: "center", gap: 5}}>
        <Text>{props.nominal}</Text>
        <EvilIcons name="chevron-right" size={30} color="black"/>
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
  walletCard: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(240, 240, 240, 1)",
  }
});
