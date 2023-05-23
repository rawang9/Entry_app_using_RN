import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Image,
  Text,
  Pre,
  Pressable,
} from "react-native";
import { CommonActions } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const storeData = async (value) => {
  try {
    await AsyncStorage.setItem("userDetail", value);
  } catch (e) {
    // saving error
  }
};

const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // value previously stored
      //to obj tos tring JSON.stringify(obj)
      // str to obj JSON.parse(str)
      // console.log("localStorage", typeof JSON.parse(value));
    }
  } catch (e) {
    // error reading value
  }
};

const OtpScreen = ({ navigation }) => {
  const [otp, setOtp] = useState("");
  const [userDetail, setUserDetail] = useState({});
  useEffect(() => {}, []);

  useEffect(() => {
    if (Object.keys(userDetail).length) {
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: "home" }],
        })
      );
    }
  }, [userDetail]);

  const otp_verify = async () => {
    const response = await axios
      .get("https://footprints-api.onrender.com/students/1908410100005")
      .catch((err) => {
        alert(`${err}`);
      });
    if (response) {
      setUserDetail(response.data.data);
      storeData(JSON.stringify(response.data.data));
      // getData("userDetail");
    }
  };
  const handlePress = () => {
    console.log("resend otp");
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
        placeholder="Enter 6 digit OTP"
        keyboardType="numeric"
        autoFocus
        maxLength={6}
        onChangeText={(text) => setOtp(text)}
        value={otp}
      />
      <Button title="Verify" onPress={otp_verify} />
      <Pressable
        style={{
          padding: 10,
          width: 100,
          marginTop: 100,
          alignItems: "center",
          alignSelf: "baseline",
          borderRadius: 100,
          marginLeft: 40,
        }}
        onPress={handlePress}
      >
        <Text style={{ color: "#57C5B6" }}>Send Again</Text>
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
  resend: {
    paddingTop: 100,
    color: "blue",
    paddingRight: 210,
  },
});

export default OtpScreen;
