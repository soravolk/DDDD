import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  StatusBar,
  Dimensions
} from "react-native";
import { ListItem } from "react-native-elements";
import { friendList } from "../assets/MissionData";

const StatusBarHeight = StatusBar.currentHeight;
const STANDARD_SIZE = Math.floor(Dimensions.get("window").width);

const styles = StyleSheet.create({
  container: {
    marginVertical: 0.025 * STANDARD_SIZE,
    marginHorizontal: 0.035 * STANDARD_SIZE,
    backgroundColor: "#fdd835",
    borderRadius: 10,
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

class friendListScreen extends Component {
  static navigationOptions = {
    // header: null,
    headerStyle: {
      backgroundColor: "#fffde7"
    }
  };

  keyExtractor = (item, index) => index.toString();

  renderFriends = ({ item }) => {
    return (
      <ListItem
        title={item.name}
        subtitle={item.description}
        leftAvatar={{ source: { uri: "https://picsum.photos/100" } }}
        containerStyle={styles.container}
      />
    );
  };

  render() {
    return (
      <View>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={friendList}
          renderItem={this.renderFriends}
        />
      </View>
    );
  }
}

export default friendListScreen;
