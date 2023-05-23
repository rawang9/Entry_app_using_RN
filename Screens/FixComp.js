import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
} from "react-native";
import { useNavigation, CommonActions } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import constants from "expo-constants";
import MessageBox from "./MessageBox";

const FixComp = ({ Name, Branch, Year }) => {
  removeValue = async () => {
    try {
      await AsyncStorage.removeItem("userDetail");
    } catch (e) {
      // remove error
    }

    console.log("Done. deleted");
  };
  const navigation = useNavigation();
  return (
    <View style={[styles.content]}>
      <View style={styles.row}>
        <View
          style={{
            ...styles.column,
            flex: 0.2,
          }}
        >
          <Image
            source={{
              uri: "https://media.licdn.com/dms/image/C5103AQGzSWfcxE2HqQ/profile-displayphoto-shrink_800_800/0/1574659583089?e=2147483647&v=beta&t=DF_HZ5zOqthTn8LWZLIk8tmtINm5mXLK6gsq1AyLvfc",
            }}
            style={{ width: 100, height: 100, borderRadius: 20 }}
          />
        </View>
        <View
          style={{
            ...styles.column,
            flex: 0.5,
            paddingLeft: 15,
          }}
        >
          <Text style={{ ...styles.profileText, fontSize: 13 }}>
            User_id- 1908410100005
          </Text>
          <Text style={styles.profileText}>{Name}</Text>
          <Text style={styles.profileText}>{Branch}</Text>
          <Text style={styles.profileText}>Year- {Year}</Text>
        </View>
        <View
          style={{
            ...styles.column,
            flex: 0.2,
          }}
        >
          <Pressable
            style={{ paddingBottom: 8, marginLeft: 7 }}
            onPress={() => {
              navigation.navigate("HomeStack", { screen: "allmsg" });
              console.log("message");
            }}
          >
            <MaterialIcons name={"message"} size={30} color="#FF8400" />
          </Pressable>
          <Pressable
            onPress={() => {
              console.log("logout");
              removeValue();
              navigation.dispatch(
                CommonActions.reset({
                  index: 1,
                  routes: [
                    {
                      name: "AuthStack",
                      params: {
                        screen: "login",
                      },
                    },
                  ],
                })
              );
            }}
            style={{ marginLeft: 7 }}
          >
            <AntDesign name={"logout"} size={30} color="#19A7CE" />
          </Pressable>
          <Text style={{ fontWeight: "bold", color: "#19A7CE" }}>Logout </Text>
        </View>
      </View>
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

export default FixComp;
