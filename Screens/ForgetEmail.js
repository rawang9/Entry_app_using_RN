import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Image, Text } from "react-native";

const ForgetEmailScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const emailHandler = () => {
    console.log("Email found Sucessfully of ", email);
    const userId = 1908410100005;
    alert(`Your registed userId is ${userId} `);
    navigation.replace("login");
  };
  const logoImage = require("../src/logo.png");
  return (
    <View style={styles.container}>
      <Image
        source={logoImage}
        style={{ width: 200, height: 200, marginTop: 30 }}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your Registered Email."
        autoFocus
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <Button title="Find" onPress={emailHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginTop: 100,
    marginVertical: 10,
    width: "80%",
  },
  button: {
    backgroundColor: "#1e81b0",
    padding: 10,
    borderRadius: 5,
  },
});

export default ForgetEmailScreen;
