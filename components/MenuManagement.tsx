import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, FlatList, Alert } from "react-native";

interface MenuItem {
  id: string;
  name: string;
  price: number;
}

const MenuManagement = () => {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");

  const addMenuItem = () => {
    if (itemName && itemPrice) {
      setMenu([...menu, { id: Date.now().toString(), name: itemName, price: parseFloat(itemPrice) }]);
      setItemName("");
      setItemPrice("");
    } else {
      Alert.alert("Error", "Please enter both name and price");
    }
  };

  const deleteMenuItem = (id: string) => {
    setMenu(menu.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu Management</Text>
      <TextInput
        placeholder="Item Name"
        value={itemName}
        onChangeText={setItemName}
        style={styles.input}
      />
      <TextInput
        placeholder="Price"
        value={itemPrice}
        onChangeText={setItemPrice}
        style={styles.input}
        keyboardType="numeric"
      />
      <Button title="Add Item" onPress={addMenuItem} />
      <FlatList
        data={menu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text>{item.name} - ${item.price.toFixed(2)}</Text>
            <Button title="Delete" onPress={() => deleteMenuItem(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginVertical: 10 },
  menuItem: { flexDirection: "row", justifyContent: "space-between", marginVertical: 5 },
});

export default MenuManagement;
