import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  StatusBar,
  Dimensions,
  Modal
} from "react-native";
import { ListItem, Avatar, Divider, Button } from "react-native-elements";
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
  },
  modalContainer: {
    marginVertical: 0.3 * STANDARD_SIZE,
    marginHorizontal: 0.1 * STANDARD_SIZE,
    backgroundColor: "#fffde7",
    borderRadius: 10,
    elevation: 8,
    shadowColor: "#ffccbc",
    shadowOpacity: 0.4,
    shadowRadius: 7,
    shadowOffset: {
      height: 4,
      width: 1
    }
  },
  modalContainerInner: {
    alignItems: "center",
    paddingHorizontal: 0.15 * STANDARD_SIZE,
    paddingVertical: 0.1 * STANDARD_SIZE
  },
  nameText: {
    fontSize: 0.06 * STANDARD_SIZE,
    lineHeight: 0.08 * STANDARD_SIZE,
    textAlign: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    margin: 0.02 * STANDARD_SIZE
  },
  buttonItem: {
    borderRadius: 10,
    elevation: 8,
    shadowColor: "#ffccbc",
    shadowOpacity: 0.4,
    shadowRadius: 7,
    shadowOffset: {
      height: 4,
      width: 1
    },
    marginHorizontal: 0.03 * STANDARD_SIZE
  },
  avatarContainer: {
    marginBottom: 0.04 * STANDARD_SIZE
  },
  dividerContainer: {
    flex: 1,
    justifyContent: "center",
    height: 0.06 * STANDARD_SIZE
  }
});

class friendListScreen extends Component {
  state = {
    modalVisible: false,
    name: ""
  };

  static navigationOptions = {
    // header: null,
    headerStyle: {
      backgroundColor: "#fffde7"
    }
  };

  setVisible = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };

  keyExtractor = (item, index) => index.toString();

  renderFriends = ({ item }) => {
    return (
      <ListItem
        title={item.name}
        subtitle={item.description}
        leftAvatar={{ source: { uri: "https://picsum.photos/100" } }}
        containerStyle={styles.container}
        onPress={() => {
          this.setVisible();
          this.setState({ name: item.name });
        }}
      />
    );
  };

  render() {
    return (
      <View>
        <Modal
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={this.setVisible}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContainerInner}>
              <Avatar
                rounded
                size="xlarge"
                containerStyle={styles.avatarContainer}
                source={{
                  uri: "https://picsum.photos/100"
                }}
              />
              <Text style={styles.nameText}>{this.state.name}</Text>
              <View style={styles.dividerContainer}>
                <Divider backgroundColor="black" />
              </View>
              <View style={styles.buttonContainer}>
                <Button buttonStyle={styles.buttonItem} title="任務" outline />
                <Button buttonStyle={styles.buttonItem} title="聊天" outline />
              </View>
            </View>
          </View>
        </Modal>
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
