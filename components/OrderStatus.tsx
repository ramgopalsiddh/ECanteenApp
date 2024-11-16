import React from "react";
import { View, Text, StyleSheet } from "react-native";

const OrderStatus = () => {
  // Mock data
  const orders = [
    { id: "1", items: ["Pizza", "Juice"], status: "Prepared" },
    { id: "2", items: ["Burger"], status: "Picked" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Status</Text>
      {orders.map((order) => (
        <View key={order.id} style={styles.order}>
          <Text>Items: {order.items.join(", ")}</Text>
          <Text>Status: {order.status}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  order: { marginVertical: 10 },
});

export default OrderStatus;
