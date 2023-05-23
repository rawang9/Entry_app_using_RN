import React, { useState } from "react";
import { View, StyleSheet, Text, Image, Modal, Pressable } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import { Button } from "react-native";
import { showMessage } from "react-native-flash-message";

const HomeButton = ({ navigation }) => {
  const location = "Inside";
  const [modalVisible, setModalVisible] = useState(false);
  const handlePress = () => {
    setModalVisible(true);
    console.log(modalVisible);
  };

  const handleYesPress = () => {
    // handle "Yes" button press event here
    showMessage({
      message: "Loaction Information Sent.",
      type: "success",
    });
    setModalVisible(false);
  };

  const handleNoPress = () => {
    // handle "No" button press event here
    showMessage({
      message: "Loaction Information not sent.",
      type: "danger",
    });
    setModalVisible(false);
  };
  const entryBtn = () => {
    // handle button press event here
    // console.log(navigation);
    navigation.push("HomeStack", { screen: "scanner" });
    console.log("Make Entry");
  };
  return (
    <View style={[styles.container]}>
      <View style={[styles.content]}>
        <View style={styles.userInfo}>
          <Text style={styles.location}>Your Current Location</Text>
          <Text style={styles.present_loc}>
            <Entypo name={"location"} size={30} color="green" /> You are present{" "}
            {location} Campus.
          </Text>
          <View
            style={{ ...styles.makeEntry, paddingBottom: 180, paddingTop: 10 }}
          >
            <Pressable
              style={{
                padding: 10,
                backgroundColor: "green",
                width: 200,
                marginTop: 10,
                alignItems: "center",
                alignSelf: "center",
                borderRadius: 100,
              }}
              color={"green"}
              onPress={entryBtn}
            >
              <Text style={{ color: "white" }}>Make Entry</Text>
            </Pressable>
          </View>
          <View style={styles.makeEntry}>
            <Pressable
              style={{
                padding: 10,
                width: 200,
                backgroundColor: "#57C5B6",
                marginTop: 10,
                alignItems: "center",
                alignSelf: "center",
                borderRadius: 100,
              }}
              onPress={() => {
                // handle button press event here
                console.log("Contact Main Gaurd");
                navigation.push("HomeStack", { screen: "contact" });
              }}
            >
              <Text style={{ color: "white" }}>Contact Main Gaurd</Text>
            </Pressable>
          </View>
          <View style={styles.makeEntry}>
            <Pressable
              style={{
                padding: 10,
                width: 200,
                backgroundColor: "red",
                marginTop: 10,
                alignItems: "center",
                alignSelf: "center",
                borderRadius: 100,
              }}
              onPress={handlePress}
            >
              <Text style={{ color: "white" }}>Panic Button</Text>
            </Pressable>
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(false);
              }}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Text style={styles.modalText}>Are you sure?</Text>
                  <View style={styles.modalButtonsContainer}>
                    <Button
                      title="Yes"
                      color="green"
                      onPress={handleYesPress}
                      style={styles.modalButton}
                    />
                    <Button
                      title="No"
                      color="red"
                      onPress={handleNoPress}
                      style={styles.modalButton}
                    />
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  makeEntry: {
    paddingBottom: 30,
    width: 300,
    paddingLeft: 50,
  },
  container: {
    flex: 1,
    padding: 10,
    alignItems: "stretch",
  },
  userInfo: {
    // flex: 0.6,
    paddingTop: 20,
  },
  location: {
    fontSize: 20,
    fontWeight: "bold",
  },
  present_loc: {
    paddingTop: 20,
    fontWeight: "bold",
  },
  content: {
    flex: 0.4,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 20,
    width: "80%",
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  modalButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  modalButton: {
    borderRadius: 8,
  },
});

export default HomeButton;
