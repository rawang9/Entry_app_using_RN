import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Button,
  Pressable,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [UserId, setUserId] = useState("");

  const login = () => {
    console.log("Login pressed", UserId);
    navigation.navigate("otpscreen");
  };
  const handlePress = () => {
    console.log("forget Password");
    navigation.navigate("forgot");
  };
  const logoImage = require("../src/logo.png");
  return (
    <View style={styles.container}>
      <Image
        source={logoImage}
        style={{ width: 200, height: 200, marginTop: 30, borderRadius: 10 }}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Roll no."
        autoFocus
        keyboardType="numeric"
        onChangeText={(text) => setUserId(text)}
        value={UserId}
      />
      <Button title="Login" onPress={login} />
      <Pressable
        style={{
          width: 150,
          marginTop: 100,
          alignItems: "center",
          alignSelf: "baseline",
          borderRadius: 100,
          marginLeft: 20,
        }}
        onPress={handlePress}
      >
        <Text style={{ color: "#57C5B6" }}>Forgot User Id?</Text>
      </Pressable>
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
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  forger_pass: {
    paddingTop: 100,
    color: "blue",
    paddingRight: 210,
  },
});

export default LoginScreen;
