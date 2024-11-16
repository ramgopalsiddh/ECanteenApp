import React, { useState } from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import mockMenu from "../mock/mockData";

const BrowseMenu = ({ navigation }: any) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleSelectItem = (itemName: string) => {
    setSelectedItems((prev) =>
      prev.includes(itemName) ? prev.filter((item) => item !== itemName) : [...prev, itemName]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Browse Menu</Text>
      <FlatList
        data={mockMenu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text>{item.name} - ${item.price}</Text>
            <Button
              title={selectedItems.includes(item.name) ? "Remove" : "Add"}
              onPress={() => toggleSelectItem(item.name)}
            />
          </View>
        )}
      />
      <Button title="Go to Cart" onPress={() => navigation.navigate("Cart", { selectedItems })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  menuItem: { flexDirection: "row", justifyContent: "space-between", marginVertical: 5 },
});

export default BrowseMenu;
