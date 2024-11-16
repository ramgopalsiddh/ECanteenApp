import React, { useState } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";

interface Order {
  id: string;
  studentName: string;
  items: string[];
  status: "Received" | "Picked" | "Prepared";
}

const OrderManagement = () => {
  const [orders, setOrders] = useState<Order[]>([
    { id: "1", studentName: "Alice", items: ["Pizza", "Juice"], status: "Received" },
    { id: "2", studentName: "Bob", items: ["Sandwich"], status: "Picked" },
  ]);

  const updateOrderStatus = (id: string) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id
          ? { ...order, status: order.status === "Received" ? "Picked" : "Prepared" }
          : order
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Management</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.orderItem}>
            <Text>{item.studentName}</Text>
            <Text>{item.items.join(", ")}</Text>
            <Text>Status: {item.status}</Text>
            <Button title="Next Status" onPress={() => updateOrderStatus(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  orderItem: { marginVertical: 10 },
});

export default OrderManagement;
