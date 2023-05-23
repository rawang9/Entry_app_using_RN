import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import FixComp from "./FixComp";
const QRScannerScreen = ({ navigation }) => {
  const [scanned, setScanned] = useState(false);

  const onScan = (event) => {
    if (!scanned) {
      setScanned(true);
      alert(`Scanned QR code: ${event.data}`);
      navigation.navigate("reason");
    }
  };
  const Name = "Akarshit gupta ";
  const Branch = "CSE";
  const Year = 4;
  const image = require("../src/bg.jpg");
  return (
    <View style={styles.body}>
      <ImageBackground source={image} style={styles.image}>
        <FixComp Name={Name} Branch={Branch} Year={Year} />
        <View style={styles.container}>
          <BarCodeScanner
            onBarCodeScanned={onScan}
            style={StyleSheet.absoluteFillObject}
          />
          <Text style={styles.description}>
            {scanned ? "Scan successful!" : "Scan a QR code"}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    flexDirection: "column",
    justifyContent: "center",
  },
  description: {
    fontSize: 16,
    marginTop: 20,
    textAlign: "center",
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
export default QRScannerScreen;
