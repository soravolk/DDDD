import React from "react";
import { ScrollView, StyleSheet, Text, View, Dimensions } from "react-native";

const STANDARD_SIZE = Math.floor(Dimensions.get("window").width);

const styles = StyleSheet.create({
  wishContainer: {
    flex: 1,

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

const InfoScreen = () => {
  return (
    <ScrollView>
      <View style={styles.wishContainer}>
        <Text style={styles.wishTitle}>健康紀錄</Text>
        <Text style={styles.wishText}>身高</Text>
        <Text style={styles.wishText}>體重</Text>
        <Text style={styles.wishText}>BMI</Text>
        <Text style={styles.wishText}>脈搏</Text>
        <Text style={styles.wishText}>診斷</Text>
      </View>
    </ScrollView>
  );
};

export default InfoScreen;
