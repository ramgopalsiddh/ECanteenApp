import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useAuth } from "../context/AuthContext";

const LoginScreen = () => {
  const { login } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>E-Canteen Login</Text>
      <Button title="Login as Admin" onPress={() => login("admin")} />
      <Button title="Login as Student" onPress={() => login("student")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
});

export default LoginScreen;
