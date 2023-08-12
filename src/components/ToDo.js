import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const ToDo = ({ completeTask, item }) => {
  return (
    <TouchableOpacity onPress={completeTask}>
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFFF00",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  itemText: {
    maxWidth: "80%",
  },
});
