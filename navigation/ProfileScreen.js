import React from "react";
import { createMaterialTopTabNavigator } from "react-navigation";
import TabBarIcon from "../components/TabBarIcon";
import WishScreen from "../screens/WishScreen";
import PathScreen from "../screens/PathScreen";
import InfoScreen from "../screens/InfoScreen";
import { Platform, StyleSheet, Text, View, Dimensions } from "react-native";
import { Avatar, Divider } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

const STANDARD_SIZE = Math.floor(Dimensions.get("window").width);

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 0.15 * STANDARD_SIZE,
    paddingHorizontal: 0.05 * STANDARD_SIZE
  },
  nameText: {
    fontSize: 0.06 * STANDARD_SIZE,
    textAlign: "center"
  },
  introduceContainer: {
    flex: 1,
    alignItems: "center",
    marginVertical: 0.03 * STANDARD_SIZE,
    padding: 0.03 * STANDARD_SIZE
  },
  introduceText: {
    fontSize: 0.04 * STANDARD_SIZE
  }
});

const ProfileScreen = createMaterialTopTabNavigator(
  {
    Wish: {
      screen: WishScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-star-half" : "md-star-half"}
          />
        )
      }
    },
    Path: {
      screen: PathScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-stats" : "md-stats"}
          />
        )
      }
    },
    Info: {
      screen: InfoScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-document" : "md-document"}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      labelStyle: {
        color: "#ff6f00"
      },
      style: {
        backgroundColor: "#fffde7"
      },
      showLabel: false,
      showIcon: true
    }
  }
);

// WishScreen.navigationOptions = {
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === "ios" ? "ios-list" : "ios-list"}
//     />
//   )
// };

ProfileScreen.path = "";

ProfileScreen.navigationOptions = {
  header: (
    <View style={styles.outerContainer}>
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
    </View>
  )
};

export default ProfileScreen;
