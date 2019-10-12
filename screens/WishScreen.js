import React from "react";
import { ScrollView, StyleSheet, Text, View, Dimensions } from "react-native";
import { Icon } from "react-native-elements";

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
  wishTextContainer: {
    marginTop: 0.05 * STANDARD_SIZE,
    paddingHorizontal: 0.05 * STANDARD_SIZE,
    flexDirection: "row",
    flexWrap: "wrap"
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

const WishScreen = () => {
  return (
    <View style={styles.wishContainer}>
      <View style={styles.wishTitleContainer}>
        <Text style={styles.wishTitle}>稱號</Text>
        <Icon
          name="md-settings"
          type="ionicon"
          color="#f57f17"
          containerStyle={styles.editIcon}
        />
      </View>
      <View style={styles.wishTextContainer}>
        <View style={styles.wishTagContainer}>
          <Text style={styles.wishText}>#我有朋友了</Text>
        </View>
        <View style={styles.wishTagContainer}>
          <Text style={styles.wishText}>#健走才是王道</Text>
        </View>
        <View style={styles.wishTagContainer}>
          <Text style={styles.wishText}>#早起運動身體好</Text>
        </View>
      </View>
    </View>
  );
};

export default WishScreen;
