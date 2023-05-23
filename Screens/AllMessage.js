import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import FixComp from "./FixComp";
import MessageBox from "./MessageBox";
const AllMessage = () => {
  const Name = "Akarshit gupta ";
  const Branch = "CSE";
  const Year = 4;
  const image = require("../src/bg.jpg");
  const allMessages = [];
  // Generate 10 components with different dates
  date = "10/11/2022";
  senderName = "Amod tiwari";
  message = "Do not play game in Hostel.";
  date = ["29/03/2023", "18/02/2023", "2/01/2023", "10/12/2022", "13/11/2022"];
  senderName = [
    "Dr. Amod Kumar Tiwari",
    "Dr. Mainejar Yadav",
    "Dr. Anurag Sewak",
    "Dr. Mainejar Yadav",
    "Er. Ashish Ranjan Mishra",
  ];
  message = [
    "Attend the Class on Regular basis.",
    "Company Textron On campus interview today at 10:00 AM",
    "Everyone Submit Your college fee on time.",
    "There will be water sortage till 11:00 AM",
    "No one is Allowed to get outside of campus till 10:00 AM.",
  ];
  const getAllMessage = () => {
    for (let i = 0; i < 5; i++) {
      const component = (
        <MessageBox
          date={date[i]}
          senderName={senderName[i]}
          message={message[i]}
        />
      );
      allMessages.push(component);
    }
  };
  getAllMessage();
  return (
    <View style={styles.body}>
      <ImageBackground source={image} style={styles.image}>
        <FixComp Name={Name} Branch={Branch} Year={Year} />
        <View style={styles.container}>
          <ScrollView>{allMessages}</ScrollView>
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
export default AllMessage;
