import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  Modal
} from "react-native";
import { ListItem, Avatar, Button } from "react-native-elements";
import { missionList, missionSelected } from "../assets/MissionData";

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
  modalContainerInner: {
    alignItems: "center",
    paddingHorizontal: 0.12 * STANDARD_SIZE,
    paddingVertical: 0.08 * STANDARD_SIZE
  },
  descriptionContainer: {
    paddingVertical: 0.08 * STANDARD_SIZE
  },
  descriptionText: {
    fontSize: 0.05 * STANDARD_SIZE
  }
});
class MissionSelectScreen extends Component {
  static navigationOptions = {
    title: "任務列表",
    headerStyle: {
      backgroundColor: "#fffde7"
    }
  };
  state = {
    modalVisible: false,
    missionList: missionList,
    itemId: 1000,
    name: "",
    description: "",
    type: "",
    missionSelected: missionSelected
  };
  keyExtractor = (item, index) => index.toString();

  setVisible = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };

  handleAccept = () => {
    this.setVisible();
    const missionList = this.state.missionList.filter(
      item => item.id != this.state.itemId
    );
    const missionSelected = this.state.missionSelected.push({
      name: this.state.name,
      description: this.state.description,
      type: this.state.type,
      random: 0
    });
    this.setState({
      missionList: missionList,
      missionSelected: missionSelected
    });
  };

  renderMission = ({ item }) => {
    return (
      <View>
        <ListItem
          title={item.name}
          subtitle={item.description}
          containerStyle={styles.container}
          bottomDivider
          leftIcon={{ name: item.type }}
          onPress={() => {
            this.setVisible();
            this.setState({
              itemId: item.id,
              name: item.name,
              description: item.description,
              type: item.type
            });
          }}
        />
      </View>
    );
  };

  render() {
    return (
      <View>
        <Modal
          visible={this.state.modalVisible}
          onRequestClose={this.setVisible}
          transparent={true}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContainerInner}>
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>
                  跑吧跑吧一直跑，邀請一位隊友跑吧跑吧一直跑
                </Text>
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  buttonStyle={styles.buttonItem}
                  title="邀請"
                  outline
                  onPress={this.setVisible}
                />
                <Button
                  buttonStyle={styles.buttonItem}
                  title="接受"
                  outline
                  onPress={this.handleAccept}
                />
              </View>
            </View>
          </View>
        </Modal>
        <ListItem
          title="頂置任務"
          subtitle="1000步和配對"
          bottomDivider
          onPress={this.setVisible}
        />
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.missionList}
          renderItem={this.renderMission}
        />
      </View>
    );
  }
}
export default MissionSelectScreen;
