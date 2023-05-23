import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { showMessage } from "react-native-flash-message";
import HomeButton from "./homeButton";
import QRScannerScreen from "./Scanner";
import constants from "expo-constants";
import Reason from "./Reason";
import MessageBox from "./MessageBox";
import Contact from "./Contact";
import FixComp from "./FixComp";
import { CommonActions } from "@react-navigation/native";

const Home = ({ navigation }) => {
  const image = require("../src/bg.jpg");
  const Name = "Akarshit gupta ";
  const Branch = "CSE";
  const Year = 4;

  useEffect(() => {
    console.log("running useEffect");
  }, []);

  return (
    <View style={[styles.container]}>
      <ImageBackground source={image} style={styles.image}>
        <FixComp Name={Name} Branch={Branch} Year={Year} />
        <View style={{ flex: 0.8 }}>
          {/* <ScrollView> */}
          <HomeButton navigation={navigation} />
          {/* </ScrollView> */}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
  },
  profileText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  content: {
    flex: 0.2,
    marginTop: constants.statusBarHeight + 10,
    // marginTop: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  column: {
    flex: 1,
    marginHorizontal: 5,
    // paddingRight: 20,
  },
});

export default Home;
