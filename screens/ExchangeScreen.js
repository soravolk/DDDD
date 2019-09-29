import React from "react";
import { Text, View } from "react-native";

class ExchangeScreen extends React.PureComponent {
  static navigationOptions = {
    title: "點數專區",
    headerStyle: {
      backgroundColor: "#fffde7"
    }
  };
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default ExchangeScreen;
