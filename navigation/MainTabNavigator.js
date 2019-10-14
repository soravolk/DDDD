import React from "react";
import { Platform, StatusBar } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import InviteListScreen from "../screens/InviteListScreen";
import MissionSelectScreen from "../screens/MissionSelectScreen";
import MissionListScreen from "../screens/MissionListScreen";
import ExchangeScreen from "../screens/ExchangeScreen";
import FriendListScreen from "../screens/FriendListScreen";
import ProfileScreen from "./ProfileScreen";

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
    Home: HomeScreen,
    FriendList: FriendListScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? `ios-walk` : "md-walk"}
    />
  )
};

HomeStack.path = "";

const MissionSelectStack = createStackNavigator(
  {
    MissionSelect: MissionSelectScreen,
    InviteList: InviteListScreen
  },
  config
);

MissionSelectStack.path = "";

const MissionStack = createMaterialTopTabNavigator(
  {
    任務列表: MissionSelectStack,
    MissionList: MissionListScreen
  },
  {
    tabBarOptions: {
      labelStyle: {
        color: "#ff6f00"
      },
      tabStyle: {
        marginTop: StatusBarHeight
      },
      style: {
        backgroundColor: "#fffde7"
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

const tabNavigator = createBottomTabNavigator(
  {
    Profile: ProfileStack,
    Home: HomeStack,
    Mission: MissionStack,
    Exchange: ExchangeStack
  },
  {
    initialRouteName: "Home",
    tabBarOptions: {
      style: {
        backgroundColor: "#fffde7"
      },
      showLabel: false
    }
  }
);

tabNavigator.path = "";

export default tabNavigator;
