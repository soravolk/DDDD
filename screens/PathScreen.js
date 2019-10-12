import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image
} from "react-native";
import { Icon, Divider } from "react-native-elements";

const STANDARD_SIZE = Math.floor(Dimensions.get("window").width);

const styles = StyleSheet.create({
  wishContainer: {
    flex: 1,
    alignItems: "center"
  },
  wishTitleContainer: {
    paddingTop: 0.025 * STANDARD_SIZE,
    backgroundColor: "#fffde7",
    width: "100%",
    paddingBottom: 0.025 * STANDARD_SIZE,
    flexDirection: "row",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#ffccbc",
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: {
      height: 2,
      width: 1
    }
  },
  wishTitle: {
    fontSize: 0.055 * STANDARD_SIZE,
    textAlign: "center"
  },
  circleContainer: {
    margin: 0.05 * STANDARD_SIZE,
    justifyContent: "center",
    backgroundColor: "#fff9c4",
    borderRadius: 100,
    width: 0.45 * STANDARD_SIZE,
    height: 0.45 * STANDARD_SIZE,
    elevation: 5,
    shadowColor: "#ffccbc",
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: {
      height: 2,
      width: 1
    }
  },
  wishText: {
    fontSize: 0.08 * STANDARD_SIZE,
    fontWeight: "500",
    textAlign: "center",
    alignItems: "center",
    paddingBottom: 0.05 * STANDARD_SIZE,
    fontWeight: "bold",
    color: "#1c2a48"
  },
  dividerContainer: {
    flex: 1,
    justifyContent: "center",
    height: 0.06 * STANDARD_SIZE
  },
  editIcon: {
    marginLeft: 0.01 * STANDARD_SIZE
  },
  graphContainer: {
    alignItems: "center"
  }
});

const PathScreen = () => {
  return (
    <ScrollView>
      <View style={styles.wishContainer}>
        <View style={styles.wishTitleContainer}>
          <Text style={styles.wishTitle}>步數累計</Text>
          <Icon
            name="md-settings"
            type="ionicon"
            color="#f57f17"
            containerStyle={styles.editIcon}
          />
        </View>
        <View style={styles.circleContainer}>
          <Text style={styles.wishText}>84460</Text>
        </View>
      </View>
      <View style={styles.dividerContainer}>
        <Divider />
      </View>
      <View style={styles.graphContainer}>
        <Text style={styles.wishTitle}>近期步數統計</Text>
        <Image
          style={{ height: 180, width: 180 }}
          source={require("../assets/images/graph.png")}
        />
      </View>
    </ScrollView>
  );
};

export default PathScreen;
