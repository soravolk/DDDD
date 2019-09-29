import React, { Component } from "react";
import { Text, View, FlatList, StatusBar, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import { missionSelected } from "../assets/MissionData";

const styles = StyleSheet.create({
  container: {}
});
class MissionListScreen extends Component {
  static navigationOptions = {
    title: "清單"
  };

  keyExtractor = (item, index) => index.toString();

  renderMission = ({ item }) => {
    return (
      <View>
        <ListItem title={item.name} subtitle={item.description} bottomDivider />
      </View>
    );
  };

  render() {
    return (
      <View>
        <ListItem title="頂置任務" subtitle="1000步和配對" bottomDivider />
        <FlatList
          keyExtractor={this.keyExtractor}
          data={missionSelected}
          renderItem={this.renderMission}
        />
      </View>
    );
  }
}

export default MissionListScreen;
