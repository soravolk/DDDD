import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Text, View, FlatList } from "react-native";

export default function ProfileScreen() {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
}

ProfileScreen.navigationOptions = {
  title: "我的資訊"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
