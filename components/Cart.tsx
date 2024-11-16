import React from "react";
import { View, Text, FlatList, Button, StyleSheet, Alert } from "react-native";
import { useAuth } from "../context/AuthContext";

const Cart = ({ route, navigation }: any) => {
  const { selectedItems } = route.params;
  const { userRole } = useAuth();

  const placeOrder = () => {
    if (!selectedItems.length) {
      Alert.alert("Cart is empty!", "Please add items to your cart before placing an order.");
      return;
    }

    // Mock order placement logic
    Alert.alert(
      "Order Success",
      `Order placed successfully by ${userRole === "student" ? "Student" : "Admin"}!`
    );
    navigation.navigate("OrderStatus");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      {selectedItems.length ? (
        <FlatList
          data={selectedItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        />
      ) : (
        <Text>Your cart is empty!</Text>
      )}
      <Button title="Place Order" onPress={placeOrder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  item: { fontSize: 16, marginVertical: 5 },
});

export default Cart;
