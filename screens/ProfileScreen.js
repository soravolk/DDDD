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

const STANDARD_SIZE = Math.floor(Dimensions.get("window").width);

const styles = StyleSheet.create({
  wholeContainer: {
    flex: 1,
    backgroundColor: "#fffde7",
    paddingTop: 0.1 * STANDARD_SIZE,
    paddingHorizontal: 0.05 * STANDARD_SIZE
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  nameText: {
    fontSize: 0.07 * STANDARD_SIZE,
    textAlign: "center"
  },
  introduceContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 0.06 * STANDARD_SIZE,
    paddingBottom: 0.03 * STANDARD_SIZE
  },
  introduceText: {
    fontSize: 0.05 * STANDARD_SIZE
  },
  dividerContainer: {
    flex: 1,
    justifyContent: "center",
    height: 0.06 * STANDARD_SIZE
  },
  wishContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff"
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
    title: "我的資訊"
  };

  render() {
    return (
      <ScrollView style={styles.wholeContainer}>
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
        <View style={styles.dividerContainer}>
          <Divider />
        </View>
        <View style={styles.wishContainer}>
          <Text style={styles.wishTitle}>許願池</Text>
          <Text style={styles.wishText}>#男生 #學生 #跑步</Text>
        </View>
      </ScrollView>
    );
  }
}

export default ProfileScreen;
