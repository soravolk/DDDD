import React from "react";
import { ScrollView, StyleSheet, Text, View, Dimensions } from "react-native";
import { Icon, Divider } from "react-native-elements";

const STANDARD_SIZE = Math.floor(Dimensions.get("window").width);

const styles = StyleSheet.create({
  wishContainer: {
    flex: 1
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
  wishTextContainer: {
    marginTop: 0.05 * STANDARD_SIZE,
    paddingHorizontal: 0.05 * STANDARD_SIZE
  },
  wishTagContainer: {
    backgroundColor: "#fff9c4",
    margin: 0.01 * STANDARD_SIZE,
    padding: 0.02 * STANDARD_SIZE,
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#ffccbc",
    shadowOpacity: 0.4,
    shadowRadius: 7,
    shadowOffset: {
      height: 4,
      width: 1
    }
  },
  wishText: {
    fontSize: 0.05 * STANDARD_SIZE
  },
  editIcon: {
    marginLeft: 0.01 * STANDARD_SIZE
  }
});

const InfoScreen = () => {
  return (
    <ScrollView>
      <View style={styles.wishContainer}>
        <View style={styles.wishTitleContainer}>
          <Text style={styles.wishTitle}>健康紀錄</Text>
          <Icon
            name="md-settings"
            type="ionicon"
            color="#f57f17"
            containerStyle={styles.editIcon}
          />
        </View>
        <View style={styles.wishTextContainer}>
          <View style={styles.wishTagContainer}>
            <Text style={styles.wishText}>身高 : 170</Text>
          </View>
          <View style={styles.wishTagContainer}>
            <Text style={styles.wishText}>體重 : 58</Text>
          </View>
          <View style={styles.wishTagContainer}>
            <Text style={styles.wishText}>BMI : 20</Text>
          </View>
          <View style={styles.wishTagContainer}>
            <Text style={styles.wishText}>脈搏 : 72 / 167</Text>
          </View>
          <View style={styles.wishTagContainer}>
            <Text style={styles.wishText}>睡眠時間 : 01:00～07:30</Text>
          </View>
          <View style={styles.wishTagContainer}>
            <Text style={styles.wishText}>診斷 : 良好</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default InfoScreen;
