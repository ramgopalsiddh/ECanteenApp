import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useAuth } from "../context/AuthContext";

const StudentHomeScreen = ({ navigation }: any) => {
  const { logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Dashboard</Text>
      <Button title="Browse Menu" onPress={() => navigation.navigate("BrowseMenu")} />
      <Button title="View Cart" onPress={() => navigation.navigate("Cart")} />
      <Button title="Order Status" onPress={() => navigation.navigate("OrderStatus")} />
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
});

export default StudentHomeScreen;
