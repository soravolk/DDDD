import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  StatusBar,
  StyleSheet,
  Dimensions
} from "react-native";
import { ListItem } from "react-native-elements";
import { missionSelected } from "../assets/MissionData";

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
class MissionListScreen extends Component {
  static navigationOptions = {
    title: "清單",
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
          data={missionSelected}
          renderItem={this.renderMission}
        />
      </View>
    );
  }
}

export default MissionListScreen;
