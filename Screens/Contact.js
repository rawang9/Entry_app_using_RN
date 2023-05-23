import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
  ImageBackground,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Fontisto from "react-native-vector-icons/Fontisto";
import FixComp from "./FixComp";
import { CommonActions, useNavigation } from "@react-navigation/native";
const Contact = ({ route }) => {
  const navigation = useNavigation();
  const [message, setMessage] = useState("");
  const image = require("../src/bg.jpg");
  const Name = "Akarshit gupta ";
  const Branch = "CSE";
  const Year = 4;
  useEffect(() => {
    console.log(navigation.getState());
  }, []);
  const handleCallPress = () => {
    Linking.openURL("tel:8009123221");
  };

  const handleEmailPress = () => {
    Linking.openURL("mailto:rawn123141@gmail.com");
  };

  const handleSend = () => {
    // do something with the message
    console.log("Sending message:", message);
  };

  return (
    <View style={styles.body}>
      <ImageBackground source={image} style={styles.image}>
        <FixComp Name={Name} Branch={Branch} Year={Year} />
        <View style={styles.container}>
          <TouchableOpacity onPress={handleCallPress} style={styles.contact}>
            <Feather name={"phone-call"} size={30} color="#19A7CE" />
            <Text style={styles.mobileNo}>800-912-3221</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleEmailPress} style={styles.contact}>
            <Fontisto name="email" size={30} color="#FF8400" />
            <Text style={styles.email}>rawn123141@gmail.com</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.messageBox}
            placeholder="Type your message here..."
            value={message}
            onChangeText={(text) => setMessage(text)}
            multiline
          />
          <Pressable
            style={{
              padding: 10,
              width: 200,
              backgroundColor: "orange",
              marginTop: 10,
              alignItems: "center",
              alignSelf: "center",
              borderRadius: 100,
            }}
            onPress={handleSend}
          >
            <Text style={{ color: "white" }}>Send</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  contact: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
    paddingBottom: 15,
  },
  container: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  mobileNo: {
    fontSize: 20,
    marginLeft: 15,
  },
  email: {
    fontSize: 16,
    marginLeft: 15,
  },
  messageBox: {
    marginTop: 10,
    height: 150,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#F5F3C1",
    borderRadius: 10,
    padding: 10,
    textAlignVertical: "top",
    width: "100%",
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
export default Contact;
