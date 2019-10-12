import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  StatusBar,
  StyleSheet,
  Dimensions,
  Modal
} from "react-native";
import { ListItem, Avatar, Button } from "react-native-elements";
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
  },
  modalContainer: {
    backgroundColor: "#fffde7",
    width: "100%",
    height: "100%",
    paddingVertical: 0.1 * STANDARD_SIZE
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
  },
  avatarBackground: {
    backgroundColor: "#fafafa",
    marginTop: 0.23 * STANDARD_SIZE,
    width: "100%",
    height: "20%",
    zIndex: 1,
    position: "absolute"
  },
  modalContainerInner: {
    marginTop: 0.08 * STANDARD_SIZE,
    alignItems: "center",
    zIndex: 2
  },
  infoContainer: {
    marginVertical: 0.04 * STANDARD_SIZE,
    paddingHorizontal: 0.02 * STANDARD_SIZE,
    width: "50%",
    backgroundColor: "#ffab91",
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
  infoText: {
    fontSize: 0.05 * STANDARD_SIZE,
    lineHeight: 0.09 * STANDARD_SIZE
  },
  introContainer: {
    marginVertical: 0.04 * STANDARD_SIZE,
    paddingHorizontal: 0.02 * STANDARD_SIZE,
    width: "80%",
    backgroundColor: "#fafafa",
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
  introText: {
    fontSize: 0.04 * STANDARD_SIZE,
    lineHeight: 0.07 * STANDARD_SIZE
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
  pointModalContainer: {
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
  pointModalContainerInner: {
    alignItems: "center",
    paddingHorizontal: 0.12 * STANDARD_SIZE,
    paddingVertical: 0.08 * STANDARD_SIZE
  },
  pointText: {
    fontSize: 0.05 * STANDARD_SIZE,
    marginVertical: 0.04 * STANDARD_SIZE
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

class MissionListScreen extends React.PureComponent {
  static navigationOptions = {
    title: "執行中",
    headerStyle: {
      backgroundColor: "#fffde7"
    }
  };

  state = {
    modalVisible: false,
    pointModalVisible: false,
    missionSelected: null
  };

  keyExtractor = (item, index) => index.toString();

  renderMission = ({ item }) => {
    return (
      <View>
        <ListItem
          title={item.name}
          titleProps={{
            numberOfLines: 1
          }}
          containerStyle={styles.container}
          bottomDivider
          leftIcon={{ name: item.type }}
          rightElement={ProgressBar(item.random)}
          onPress={this.setPointVisible}
        />
      </View>
    );
  };

  setPointVisible = () => {
    this.setState({ pointModalVisible: !this.state.pointModalVisible });
  };

  setVisible = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };

  render() {
    const missionSelected = this.props.navigation.getParam(
      "missionSelected",
      null
    );
    return (
      <View>
        <Modal
          visible={this.state.modalVisible}
          onRequestClose={this.setVisible}
        >
          <View style={styles.modalContainer}>
            <View style={styles.avatarBackground} />
            <View style={styles.modalContainerInner}>
              <Avatar
                rounded
                size="xlarge"
                containerStyle={styles.avatarContainer}
                source={{
                  uri: "https://picsum.photos/100"
                }}
              />
              <View style={styles.infoContainer}>
                <Text style={styles.infoText}>ID: 敲敲</Text>
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.infoText}>性別: 女</Text>
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.infoText}>職業: 學生</Text>
              </View>
              <View style={styles.introContainer}>
                <Text style={styles.introText}>
                  我愛速大麻weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed
                </Text>
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  buttonStyle={styles.buttonItem}
                  title="放棄"
                  outline
                  onPress={this.setVisible}
                />
                <Button buttonStyle={styles.buttonItem} title="選定" outline />
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          visible={this.state.pointModalVisible}
          onRequestClose={this.setPointVisible}
          transparent={true}
        >
          <View style={styles.pointModalContainer}>
            <View style={styles.pointModalContainerInner}>
              <Text style={styles.pointText}>獲得50點！</Text>
              <View style={styles.buttonContainer}>
                <Button
                  buttonStyle={styles.buttonItem}
                  title="OK"
                  outline
                  onPress={this.setPointVisible}
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
