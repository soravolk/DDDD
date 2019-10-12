import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  Modal,
  ScrollView
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
    paddingVertical: 0.03 * STANDARD_SIZE
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
    paddingHorizontal: 0.1 * STANDARD_SIZE,
    paddingTop: 0.05 * STANDARD_SIZE,
    paddingBottom: 0.01 * STANDARD_SIZE,
    maxHeight: 1.2 * STANDARD_SIZE
  },
  descriptionContainer: {
    paddingVertical: 0.08 * STANDARD_SIZE
  },
  descriptionText: {
    fontSize: 0.04 * STANDARD_SIZE,
    lineHeight: 0.08 * STANDARD_SIZE
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
    modalInviteVisible: false,
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

  setInviteVisible = () => {
    this.setState({ modalInviteVisible: !this.state.modalInviteVisible });
  };

  renderMission = ({ item }) => {
    return (
      <View>
        <ListItem
          title={item.name}
          subtitle={item.description}
          subtitleProps={{
            numberOfLines: 1
          }}
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
    const { navigate } = this.props.navigation;
    const handleAccept = () => {
      this.setVisible();
      const missionList = this.state.missionList.filter(
        item => item.id != this.state.itemId
      );
      const missionSelected = this.state.missionSelected.concat({
        name: this.state.name,
        description: this.state.description,
        type: this.state.type,
        random: STANDARD_SIZE / 2
      });
      this.setState({
        missionList: missionList,
        missionSelected: missionSelected
      });
      navigate("MissionList", { missionSelected: this.state.missionSelected });
    };
    return (
      <ScrollView>
        <Modal
          visible={this.state.modalVisible}
          onRequestClose={this.setVisible}
          transparent={true}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContainerInner}>
              <ScrollView style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>
                  {this.state.description}
                </Text>
              </ScrollView>
              <View style={styles.buttonContainer}>
                <Button
                  buttonStyle={styles.buttonItem}
                  title="邀請"
                  outline
                  onPress={this.setInviteVisible}
                />
                <Button
                  buttonStyle={styles.buttonItem}
                  title="接受"
                  outline
                  onPress={handleAccept}
                />
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          visible={this.state.modalInviteVisible}
          onRequestClose={this.setInviteVisible}
        >
          <View>
            {/* <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.missionList}
          renderItem={this.renderMission}
        /> */}
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
      </ScrollView>
    );
  }
}
export default MissionSelectScreen;
