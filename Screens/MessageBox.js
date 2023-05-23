import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MessageBox = ({ date, senderName, message }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.senderName}>{senderName}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F3C1",
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    fontWeight: "bold",
  },
  senderName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
  },
  message: {
    fontSize: 16,
    color: "#333333",
  },
});

export default MessageBox;
