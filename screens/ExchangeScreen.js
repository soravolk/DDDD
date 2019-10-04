import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image
} from "react-native";
import { Avatar, Divider, Button, Icon } from "react-native-elements";

const STANDARD_SIZE = Math.floor(Dimensions.get("window").width);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    paddingHorizontal: 0.06 * STANDARD_SIZE
  },
  pointCotainer: {
    flex: 1,
    padding: 0.1 * STANDARD_SIZE,
    margin: 0.07 * STANDARD_SIZE,
    backgroundColor: "#fffde7",
    borderRadius: 10,
    elevation: 8,
    shadowColor: "#ffccbc",
    shadowOpacity: 0.4,
    shadowRadius: 7,
    shadowOffset: {
      height: 4,
      width: 1
    }
  },
  pointText: {
    fontSize: 0.06 * STANDARD_SIZE
  },
  recommendContainer: {
    flex: 1,
    alignContent: "center",
    paddingTop: 0.03 * STANDARD_SIZE,
    paddingHorizontal: 0.06 * STANDARD_SIZE
  },
  recommendTitle: {
    fontSize: 0.05 * STANDARD_SIZE
  },
  recommendItemWrap: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: STANDARD_SIZE
  },
  recommendItemContainer: {
    flex: 1,
    paddingHorizontal: 0.06 * STANDARD_SIZE,
    paddingVertical: 0.04 * STANDARD_SIZE,
    margin: 0.06 * STANDARD_SIZE,
    alignItems: "center",
    maxWidth: STANDARD_SIZE / 2.5,
    backgroundColor: "#fffde7",
    borderRadius: 10,
    elevation: 8,
    shadowColor: "#ffccbc",
    shadowOpacity: 0.4,
    shadowRadius: 7,
    shadowOffset: {
      height: 4,
      width: 1
    }
  },
  recommendItemText: {
    lineHeight: 0.08 * STANDARD_SIZE,
    fontSize: 0.05 * STANDARD_SIZE
  },
  recommendButton: {
    borderRadius: 10,
    elevation: 8,
    shadowColor: "#ffccbc",
    shadowOpacity: 0.4,
    shadowRadius: 7,
    shadowOffset: {
      height: 4,
      width: 1
    }
  }
});

const RecommendItem = () => (
  <View style={styles.recommendItemContainer}>
    <Image
      style={{ width: 100, height: 100 }}
      source={{ uri: "https://picsum.photos/100" }}
    />
    <Text style={styles.recommendItemText}>FIN</Text>
    <Text style={styles.recommendItemText}>5 公里</Text>
    <Text style={styles.recommendItemText}>15 點</Text>
    <Button buttonStyle={styles.recommendButton} title="兌換" outline />
  </View>
);
class ExchangeScreen extends React.PureComponent {
  static navigationOptions = {
    title: "點數專區",
    headerStyle: {
      backgroundColor: "#fffde7"
    }
  };
  render() {
    return (
      <ScrollView containerStyle={styles.container}>
        <View style={styles.pointCotainer}>
          <Text style={styles.pointText}> Point 8446</Text>
        </View>
        <Divider />
        <View style={styles.recommendContainer}>
          <Text style={styles.recommendTitle}>你附近的商品</Text>
          <ScrollView horizontal="true">
            <RecommendItem />
            <RecommendItem />
            <RecommendItem />
            <RecommendItem />
          </ScrollView>
        </View>
        <Divider />
        <View></View>
      </ScrollView>
    );
  }
}

export default ExchangeScreen;
