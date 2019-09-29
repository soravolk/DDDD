import React from "react";
import { Platform, StatusBar } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import MissionSelectScreen from "../screens/MissionSelectScreen";
import MissionListScreen from "../screens/MissionListScreen";
import ExchangeScreen from "../screens/ExchangeScreen";

const StatusBarHeight = StatusBar.currentHeight;
const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-person" : "md-person"}
    />
  )
};

ProfileStack.path = "";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-home${focused ? "" : "-outline"}`
          : "md-home"
      }
    />
  )
};

HomeStack.path = "";

const MissionStack = createMaterialTopTabNavigator(
  {
    MissionSelect: MissionSelectScreen,
    MissionList: MissionListScreen
  },
  {
    tabBarOptions: {
      tabStyle: {
        paddingTop: StatusBarHeight
      }
    }
  }
);

MissionStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-list" : "ios-list"}
    />
  )
};

MissionStack.path = "";

const ExchangeStack = createStackNavigator(
  {
    Exchange: ExchangeScreen
  },
  config
);

ExchangeStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-cart" : "md-cart"}
    />
  )
};

ExchangeStack.path = "";

const tabNavigator = createBottomTabNavigator({
  ProfileStack,
  HomeStack,
  MissionStack,
  ExchangeStack
});

tabNavigator.path = "";

export default tabNavigator;
