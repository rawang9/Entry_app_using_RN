import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./Screens/login";
import OtpScreen from "./Screens/OtpScreen";
import ForgetEmail from "./Screens/ForgetEmail";
import Home from "./Screens/Home";
import constants from "expo-constants";
import QRScannerScreen from "./Screens/Scanner";
import MessageBox from "./Screens/MessageBox";
import Reason from "./Screens/Reason";
import EntryDetail from "./Screens/EntryDetail";
import HomeButton from "./Screens/homeButton";
import FlashMessage from "react-native-flash-message";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Contact from "./Screens/Contact";
import AllMessage from "./Screens/AllMessage";
import Scanner from "./Screens/Scanner";

const RootStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
// const FixCompButtomStack = createNativeStackNavigator();

// const FixCompButtomStackNavigator = () => {
//   <FixCompButtomStack.Navigator>
//     <FixCompButtomStack.Screen name="allmsg" component={AllMessage}/>
//     <FixCompButtomStack.Screen name="logout"/>
//   </FixCompButtomStack.Navigator>;
// }

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="otpscreen"
        component={OtpScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="home"
        component={Home}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="forgot"
        component={ForgetEmail}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="scanner"
        options={{ headerShown: false }}
        component={Scanner}
      />
      <HomeStack.Screen
        name="entry"
        options={{ headerShown: false }}
        component={EntryDetail}
      />
      <HomeStack.Screen
        name="reason"
        options={{ headerShown: false }}
        component={Reason}
      />
      <HomeStack.Screen
        name="contact"
        options={{ headerShown: false }}
        component={Contact}
      />
      <HomeStack.Screen
        name="allmsg"
        options={{ headerShown: false }}
        component={AllMessage}
      />
    </HomeStack.Navigator>
  );
};

export default function App() {
  const [homeBody, setHomeBody] = useState("");
  const setHome = (status) => {
    setHomeBody(status);
  };
  return (
    <NavigationContainer>
      <FlashMessage position="top" />
      <RootStack.Navigator>
        <RootStack.Screen
          name="AuthStack"
          component={AuthStackNavigator}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="HomeStack"
          component={HomeStackNavigator}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <FlashMessage position="top" />
    //   <LoginScreen />
    //   {/* <ForgetEmail /> */}
    //   {/* <LoginScreen /> */}
    //   {/* <OtpScreen /> */}
    //   {/* <Home /> */}
    //   {/* <AllMessage /> */}
    //   {/* <Home /> */}
    //   {/* <QRScannerScreen /> */}
    //   {/* <Reason /> */}
    //   {/* <EntryDetail /> */}
    //   <StatusBar />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 0,
    // paddingTop: constants.statusBarHeight,
  },
});
