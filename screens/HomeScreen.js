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

const StatusBarHeight = StatusBar.currentHeight;
const STANDARD_SIZE = Math.floor(Dimensions.get("window").width);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: StatusBarHeight + 0.06 * STANDARD_SIZE
    // paddingHorizontal: 0.06 * STANDARD_SIZE
  },
  friendContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 0.06 * STANDARD_SIZE,
    marginRight: 0.06 * STANDARD_SIZE
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
  }
});

class HomeScreen extends React.PureComponent {
  static navigationOptions = {
    header: null
  };
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/images/homeBackground.png")}
          style={{ width: "100%", height: "110%", top: 0 }}
        >
          <View style={styles.friendContainer}>
            <Avatar
              rounded
              activeOpacity={0.3}
              size="large"
              source={{
                uri: "https://picsum.photos/100"
              }}
              onPress={() => navigate("FriendList")}
              containerStyle={styles.avatar}
            />
          </View>
          <Text style={{ textAlign: "center" }}>TEST</Text>
        </ImageBackground>
      </View>
    );
  }
}

export default HomeScreen;
