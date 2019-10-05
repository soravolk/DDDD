import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions
} from "react-native";
import { Avatar, Divider } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

const STANDARD_SIZE = Math.floor(Dimensions.get("window").width);

const styles = StyleSheet.create({
  wholeContainer: {
    flex: 1,
    backgroundColor: "#fafafa"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 0.1 * STANDARD_SIZE,
    paddingHorizontal: 0.05 * STANDARD_SIZE
  },
  nameText: {
    fontSize: 0.06 * STANDARD_SIZE,
    textAlign: "center"
  },
  introduceContainer: {
    flex: 1,
    alignItems: "center",
    marginBottom: 0.03 * STANDARD_SIZE
  },
  introduceText: {
    fontSize: 0.04 * STANDARD_SIZE
  },
  dividerContainer: {
    flex: 1,
    justifyContent: "center",
    height: 0.06 * STANDARD_SIZE
  },
  wishContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 0.05 * STANDARD_SIZE
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

class ProfileScreen extends React.PureComponent {
  static navigationOptions = {
    title: "我的資訊",
    headerStyle: {
      backgroundColor: "#fffde7"
    }
  };

  render() {
    return (
      <ScrollView style={styles.wholeContainer}>
        <LinearGradient colors={["#fff59d", "#fff9c4", "#e1f5fe"]}>
          <View style={styles.container}>
            <Avatar
              rounded
              size="large"
              source={{
                uri: "https://picsum.photos/100"
              }}
              showEditButton
            />
            <Text style={styles.nameText}>小樹人精靈</Text>
            <View style={styles.introduceContainer}>
              <Text style={styles.introduceText}>
                我很喜歡跑步，平常都跑5k，有時間的話還會再跑20k，請多指教
              </Text>
            </View>
          </View>
        </LinearGradient>
        <View style={styles.dividerContainer}>
          <Divider />
        </View>
        <View style={styles.wishContainer}>
          <Text style={styles.wishTitle}>許願池</Text>
          <Text style={styles.wishText}>#女生 #學生 #跑步</Text>
        </View>
        <View style={styles.dividerContainer}>
          <Divider />
        </View>
        <View style={styles.wishContainer}>
          <Text style={styles.wishTitle}>步數累計</Text>
        </View>
        <View style={styles.dividerContainer}>
          <Divider />
        </View>
        <View style={styles.wishContainer}>
          <Text style={styles.wishTitle}>基本資訊</Text>
        </View>
      </ScrollView>
    );
  }
}

export default ProfileScreen;
