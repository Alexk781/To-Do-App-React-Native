import React from "react";
import { Text, View, StyleSheet } from "react-native";
export const Header = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>List of To Do's</Text>
        <View style={styles.items}></View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 70,
    paddingHorizontal: 30,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 30,
  },
  items: {},
});
