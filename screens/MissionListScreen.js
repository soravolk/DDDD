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
import Svg, { Circle, Line } from "react-native-svg";

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
  progressBar: {
    height: 5,
    backgroundColor: "black",
    width: STANDARD_SIZE / 2
  }
});

const ProgressBar = random => {
  const height = STANDARD_SIZE / 10;
  const width = STANDARD_SIZE / 2;
  const y_axis = height / 1.8;
  const x_axis = width - 10;
  const x_progress = width - random;
  const strokeWidth = height / 3;
  return (
    <View>
      <Svg height={height} width={width}>
        <Line
          x1="10"
          y1={y_axis}
          x2={x_axis}
          y2={y_axis}
          stroke="#fffde7"
          strokeLinecap="round"
          strokeWidth={strokeWidth}
        />
        <Line
          x1="10"
          y1={y_axis}
          x2={x_progress}
          y2={y_axis}
          stroke="#fb8c00"
          strokeLinecap="round"
          strokeWidth={strokeWidth}
        />
      </Svg>
    </View>
  );
};
class MissionListScreen extends Component {
  static navigationOptions = {
    title: "執行中",
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
          rightElement={ProgressBar(item.random)}
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

{
  /* <Circle
fill="none"
cx={radius}
cy={radius}
r={radius - 5}
stroke="orange"
strokeWidth={strokeWidth}
strokeDashoffset={100}
strokeDasharray="2"
strokeLinecap="50"
/> */
}
