import React, { Component } from "react";
import { Text, View, FlatList, StyleSheet, Dimensions } from "react-native";
import { ListItem } from "react-native-elements";
import { missionList } from "../assets/MissionData";

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
class MissionSelectScreen extends Component {
  static navigationOptions = {
    title: "任務列表",
    headerStyle: {
      backgroundColor: "#fffde7"
    }
  };

  keyExtractor = (item, index) => index.toString();

  renderMission = ({ item }) => {
    return (
      <View>
        <ListItem
          title={item.name}
          subtitle={item.description}
          containerStyle={styles.container}
          bottomDivider
          leftIcon={{ name: item.type }}
        />
      </View>
    );
  };

  render() {
    return (
      <View>
        <ListItem title="頂置任務" subtitle="1000步和配對" bottomDivider />
        <FlatList
          keyExtractor={this.keyExtractor}
          data={missionList}
          renderItem={this.renderMission}
        />
      </View>
    );
  }
}
export default MissionSelectScreen;
