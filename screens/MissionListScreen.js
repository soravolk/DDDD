import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  StatusBar,
  ScrollView,
  StyleSheet,
  Dimensions,
  Modal
} from "react-native";
import { ListItem, Avatar, Button } from "react-native-elements";
import Svg, { Circle, Line } from "react-native-svg";
import { missionOrigin, missionTop } from "../assets/MissionData";

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
  modalInfoContainer: {
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
  modalInfoContainerInner: {
    alignItems: "center",
    paddingHorizontal: 0.1 * STANDARD_SIZE,
    paddingTop: 0.05 * STANDARD_SIZE,
    paddingBottom: 0.01 * STANDARD_SIZE,
    maxHeight: 1.2 * STANDARD_SIZE
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
  },
  descriptionContainer: {
    paddingVertical: 0.08 * STANDARD_SIZE
  },
  descriptionText: {
    fontSize: 0.04 * STANDARD_SIZE,
    lineHeight: 0.08 * STANDARD_SIZE
  },
  mateNameText: {
    fontSize: 0.03 * STANDARD_SIZE,
    textAlign: "right",
    fontWeight: "bold",
    lineHeight: 0.06 * STANDARD_SIZE
  }
});

const ProgressBar = random => {
  const height = STANDARD_SIZE / 12;
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
    modalInfoVisible: false,
    pointModalVisible: false,
    modalMissionVisible: false,
    missionTop: missionTop,
    missionOrigin: missionOrigin,
    itemId: 1000,
    description: ""
  };

  keyExtractor = (item, index) => index.toString();

  handleMatch = () => {
    this.setInfoVisible();
    this.setVisible();
    const missionTop = this.state.missionTop.filter(item => item.id != 1);
    this.setState({
      missionTop: missionTop
    });
  };

  handleComplete = () => {
    this.setPointVisible();
    const missionOrigin = this.state.missionOrigin.filter(
      item => item.id != this.state.itemId
    );
    this.setState({
      missionOrigin: missionOrigin
    });
  };

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
          subtitle={ProgressBar(item.random)}
          onPress={() => {
            if (item.random != STANDARD_SIZE / 2) {
              this.setPointVisible();
            } else {
              this.setMissionVisible();
            }
            this.setState({ itemId: item.id, description: item.description });
          }}
        />
      </View>
    );
  };

  setPointVisible = () => {
    this.setState({ pointModalVisible: !this.state.pointModalVisible });
  };
  setInfoVisible = () => {
    this.setState({ modalInfoVisible: !this.state.modalInfoVisible });
  };
  setMissionVisible = () => {
    this.setState({ modalMissionVisible: !this.state.modalMissionVisible });
  };
  setVisible = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };

  render() {
    const wholeMission = this.props.navigation.getParam("missionSelected")
      ? this.state.missionOrigin.concat(
          this.props.navigation.getParam("missionSelected")
        )
      : this.state.missionOrigin;
    const mateName = this.props.navigation.getParam("mateName");
    return (
      <View>
        <Modal
          visible={this.state.modalMissionVisible}
          onRequestClose={this.setMissionVisible}
          transparent={true}
        >
          <View style={styles.modalInfoContainer}>
            <View style={styles.modalInfoContainerInner}>
              <ScrollView style={styles.descriptionContainer}>
                <Text style={styles.mateNameText}>{mateName}</Text>
                <Text style={styles.descriptionText}>
                  {this.state.description}
                </Text>
              </ScrollView>
            </View>
          </View>
        </Modal>
        <Modal
          visible={this.state.modalInfoVisible}
          onRequestClose={this.setInfoVisible}
          transparent={true}
        >
          <View style={styles.modalInfoContainer}>
            <View style={styles.modalInfoContainerInner}>
              <ScrollView style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>
                  {missionTop[0].description}
                </Text>
              </ScrollView>
              <View style={styles.buttonContainer}>
                <Button
                  buttonStyle={styles.buttonItem}
                  title="完成"
                  outline
                  onPress={() => {
                    this.handleMatch();
                  }}
                />
              </View>
            </View>
          </View>
        </Modal>
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
                source={require("../assets/images/card.jpg")}
              />
              <View style={styles.infoContainer}>
                <Text style={styles.infoText}>ID: 卡蹦</Text>
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.infoText}>性別: 男</Text>
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.infoText}>職業: 學生</Text>
              </View>
              <View style={styles.introContainer}>
                <Text style={styles.introText}>我愛跑馬拉松</Text>
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  buttonStyle={styles.buttonItem}
                  title="放棄"
                  outline
                  onPress={this.setVisible}
                />
                <Button
                  buttonStyle={styles.buttonItem}
                  title="選定"
                  onPress={this.setVisible}
                  outline
                />
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
                  onPress={this.handleComplete}
                />
              </View>
            </View>
          </View>
        </Modal>
        <ListItem
          title={
            this.state.missionTop[0].name != ""
              ? this.state.missionTop[0].name
              : "已解完每日任務"
          }
          titleProps={{
            numberOfLines: 1
          }}
          // subtitle={missionTop[0].description}
          bottomDivider
          subtitle={
            this.state.missionTop[0].random != null
              ? ProgressBar(this.state.missionTop[0].random)
              : null
          }
          onPress={() => {
            this.setInfoVisible();
          }}
          containerStyle={{
            backgroundColor:
              this.state.missionTop[0].name != "" ? "#ffe0b2" : "white"
          }}
        />
        <FlatList
          keyExtractor={this.keyExtractor}
          data={wholeMission}
          renderItem={this.renderMission}
        />
      </View>
    );
  }
}

export default MissionListScreen;
