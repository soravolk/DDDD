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
  Dimensions
} from "react-native";
import { Avatar } from "react-native-elements";

const StatusBarHeight = StatusBar.currentHeight;
const STANDARD_SIZE = Math.floor(Dimensions.get("window").width);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffde7",
    justifyContent: "center",
    paddingTop: StatusBarHeight + 0.06 * STANDARD_SIZE,
    paddingHorizontal: 0.06 * STANDARD_SIZE
  },
  friendContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  }
});

class HomeScreen extends React.PureComponent {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.friendContainer}>
          <Avatar
            rounded
            size="large"
            source={{
              uri: "https://picsum.photos/100"
            }}
          />
        </View>
        <Text style={{ textAlign: "center" }}>TEST</Text>
      </View>
    );
  }
}

export default HomeScreen;
