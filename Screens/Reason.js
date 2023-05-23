import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
  ImageBackground,
} from "react-native";
import FixComp from "./FixComp";
import { CommonActions, useNavigation } from "@react-navigation/native";

const Reason = () => {
  const navigation = useNavigation();
  const Name = "Akarshit gupta ";
  const Branch = "CSE";
  const Year = 4;
  const image = require("../src/bg.jpg");
  const [reasonText, setReasonText] = useState("");
  const [locationText, setLocationText] = useState("");
  const send_detail = () => {
    console.log("Submited details.");

    navigation.reset({
      routes: [
        {
          name: "AuthStack",
          params: { screen: "home" },
        },
        {
          name: "HomeStack",
          params: { screen: "entry" },
        },
      ],
    });
  };
  return (
    <View style={styles.body}>
      <ImageBackground source={image} style={styles.image}>
        <FixComp Name={Name} Branch={Branch} Year={Year} />
        <View style={styles.container}>
          <View style={styles.boxes}>
            <Text style={styles.title}>Enter Your Reason</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter valid reason."
              autoFocus
              maxLength={200}
              onChangeText={(text) => setReasonText(text)}
              value={reasonText}
            />
          </View>
          <View style={styles.boxes}>
            <Text style={styles.title}>Enter Location</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Location"
              autoFocus
              maxLength={200}
              onChangeText={(text) => setLocationText(text)}
              value={locationText}
            />
          </View>
          <Pressable
            style={{
              padding: 10,
              backgroundColor: "green",
              width: 100,
              marginTop: 10,
              alignItems: "center",
              alignSelf: "center",
              borderRadius: 100,
            }}
            color={"green"}
            title="Submit"
            onPress={send_detail}
          >
            <Text style={{ color: "white" }}>SUBMIT</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  title: { fontWeight: "bold", marginBottom: 4, fontSize: 16 },
  container: {
    flex: 0.8,
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  boxes: {
    paddingBottom: 30,
  },
  input: {
    backgroundColor: "#FFFDD0",
    height: 50,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  body: {
    flex: 1,
    alignItems: "stretch",
  },
});

export default Reason;
