import React, { Component } from "react";
import { Text, View } from "react-native";

class ExchangeScreen extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

ExchangeScreen.navigationOptions = {
  title: "Exchange"
};

export default ExchangeScreen;
