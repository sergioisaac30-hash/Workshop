import React from "react";
import { View, Text, StyleSheet } from "react-native";

const InfoBox = ({ title, data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {Object.entries(data).map(([key, value]) => (
        <Text key={key} style={styles.item}>
          {key}: {value}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  item: {
    fontSize: 14,
    color: "#333",
  },
});

export default InfoBox;