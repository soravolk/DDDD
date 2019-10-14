import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  Dimensions,
  ImageBackground
} from "react-native";
import { Avatar } from "react-native-elements";
import { PROFILE } from "./FriendListScreen";

const StatusBarHeight = StatusBar.currentHeight;
const STANDARD_SIZE = Math.floor(Dimensions.get("window").width);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: StatusBarHeight + 0.06 * STANDARD_SIZE
    // paddingHorizontal: 0.06 * STANDARD_SIZE
  },
  friendContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 0.06 * STANDARD_SIZE,
    marginRight: 0.06 * STANDARD_SIZE,
    maxHeight: 0.2 * STANDARD_SIZE
  },
  avatar: {
    elevation: 8,
    shadowColor: "#ffccbc",
    shadowOpacity: 0.4,
    shadowRadius: 7,
    shadowOffset: {
      height: 4,
      width: 1
    }
  },
  circleOutside: {
    flexDirection: "row",
    justifyContent: "center"
  },
  circleContainer: {
    margin: 0.05 * STANDARD_SIZE,
    justifyContent: "center",
    backgroundColor: "#fff9c4",
    borderRadius: 100,
    width: 0.45 * STANDARD_SIZE,
    height: 0.45 * STANDARD_SIZE,
    elevation: 5,
    shadowColor: "#ffccbc",
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: {
      height: 2,
      width: 1
    }
  },
  wishText: {
    fontSize: 0.08 * STANDARD_SIZE,
    fontWeight: "500",
    textAlign: "center",
    alignItems: "center",
    paddingBottom: 0.05 * STANDARD_SIZE,
    fontWeight: "bold",
    color: "#1c2a48"
  }
});

// const PROFILE = {
//   profile0: require("../assets/images/profile1.jpg"),
//   profile1: require("../assets/images/profile2.jpg"),
//   profile2: require("../assets/images/profile3.jpg"),
//   profile3: require("../assets/images/profile4.jpg"),
//   profile4: require("../assets/images/profile5.jpg")
// };
class HomeScreen extends React.PureComponent {
  static navigationOptions = {
    header: null
  };
  render() {
    const { navigate } = this.props.navigation;
    const profileName = this.props.navigation.getParam(
      "profile",
      PROFILE["profile0"]
    );
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/images/homeBackground.gif")}
          style={{ width: "100%", height: "110%", top: 0 }}
        >
          <View style={styles.friendContainer}>
            <Avatar
              rounded
              activeOpacity={0.3}
              size="large"
              source={profileName}
              onPress={() => navigate("FriendList")}
              containerStyle={styles.avatar}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default HomeScreen;
