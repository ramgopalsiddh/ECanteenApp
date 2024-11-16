import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useAuth } from "../context/AuthContext";

const AdminHomeScreen = ({ navigation }: any) => {
  const { logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Dashboard</Text>
      <Button title="Manage Menu" onPress={() => navigation.navigate("MenuManagement")} />
      <Button title="Manage Orders" onPress={() => navigation.navigate("OrderManagement")} />
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
});

export default AdminHomeScreen;
