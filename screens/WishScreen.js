import React from "react";
import { ScrollView, StyleSheet, Text, View, Dimensions } from "react-native";

const STANDARD_SIZE = Math.floor(Dimensions.get("window").width);

const styles = StyleSheet.create({
  wishContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 0.05 * STANDARD_SIZE,
    marginTop: 0.05 * STANDARD_SIZE
  },
  wishTitle: {
    fontSize: 0.06 * STANDARD_SIZE,
    textAlign: "center",
    paddingBottom: 0.05 * STANDARD_SIZE
  },
  wishText: {
    fontSize: 0.05 * STANDARD_SIZE
  }
});

const WishScreen = () => {
  return (
    <View style={styles.wishContainer}>
      <Text style={styles.wishTitle}>許願池</Text>
      <Text style={styles.wishText}>#女生 #學生 #跑步</Text>
    </View>
  );
};

export default WishScreen;
