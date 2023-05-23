import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Modal,
  ImageBackground,
} from "react-native";
import FixComp from "./FixComp";
import { CommonActions, useNavigation } from "@react-navigation/native";
const EntryDetail = () => {
  const navigation = useNavigation();
  useEffect(() => {
    console.log(navigation.getState());
  }, []);

  const image = require("../src/bg.jpg");
  const Name = "Akarshit gupta ";
  const Branch = "CSE";
  const Year = 4;
  const userData = {
    reason: "Shopping.",
    location: "Churk",
    outDate: "21/12/2023",
    outTime: "12:32 PM",
    inDate: "21/12/2023",
    inTime: "02:32 PM",
    name: "Akarshit gupta",
    branch: "CSE",
    year: 4,
  };
  return (
    <View style={styles.body}>
      <ImageBackground source={image} style={styles.image}>
        <FixComp Name={Name} Branch={Branch} Year={Year} />
        <View style={[styles.container]}>
          <View style={[styles.content]}>
            <View style={styles.row}>
              <View style={[styles.column, { flex: 0.4 }]}>
                <Image
                  source={{
                    uri: "https://media.licdn.com/dms/image/C5103AQGzSWfcxE2HqQ/profile-displayphoto-shrink_800_800/0/1574659583089?e=2147483647&v=beta&t=DF_HZ5zOqthTn8LWZLIk8tmtINm5mXLK6gsq1AyLvfc",
                  }}
                  style={{ width: 150, height: 200, borderRadius: 10 }}
                />
              </View>
              <View
                style={[
                  styles.column,
                  {
                    flex: 0.6,
                    paddingTop: 25,
                  },
                ]}
              >
                <Text style={styles.textContent}>
                  Name : {userData["name"]}
                </Text>
                <Text style={styles.textContent}>
                  Branch : {userData["branch"]}
                </Text>
                <Text style={styles.textContent}>
                  Year : {userData["year"]}
                </Text>
                <Text style={{ ...styles.textContent, fontSize: 16 }}>
                  User_id- 1908410100005
                </Text>
              </View>
            </View>
            <View style={styles.entryInfo}>
              <Text style={styles.belowText}>
                Reason : {userData["reason"]}
              </Text>
              <Text style={styles.belowText}>
                Location : {userData["location"]}
              </Text>
              <Text style={styles.belowText}>
                Out Date : {userData["outDate"]}
              </Text>
              <Text style={styles.belowText}>
                Out Time : {userData["outTime"]}
              </Text>
              <Text style={styles.belowText}>
                In Date :{/* {userData["inDate"]} */}
              </Text>
              <Text style={styles.belowText}>
                In Time :{/* {userData["inTime"]} */}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  textContent: { fontSize: 18, fontWeight: "bold", paddingLeft: 20 },
  container: {
    flex: 0.8,
    paddingTop: 20,
  },
  entryInfo: {
    paddingTop: "1%",
    padding: 20,
    backgroundColor: "#FFFDD0",
  },
  belowText: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    fontWeight: "bold",
    fontSize: 20,
    borderWidth: 2,
    marginBottom: 5,
    borderColor: "green",
    borderRadius: 10,
  },
  content: {
    backgroundColor: "#FFFDD0",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    padding: 5,
  },
  column: {
    flex: 1,
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

export default EntryDetail;
