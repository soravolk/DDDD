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
  pointContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 0.1 * STANDARD_SIZE,
    margin: 0.07 * STANDARD_SIZE,
    height: 0.1 * STANDARD_SIZE,
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
  pointInnerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: STANDARD_SIZE * 0.6,
    marginHorizontal: "auto"
  },
  pointText: {
    fontSize: 0.06 * STANDARD_SIZE,
    fontWeight: "600",
    color: "#1c2a48"
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
    paddingTop: 0.02 * STANDARD_SIZE,
    margin: 0.06 * STANDARD_SIZE,
    alignItems: "center",
    maxWidth: STANDARD_SIZE / 2.2,
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
  recommendItemTextContainer: {
    backgroundColor: "#fff9c4",
    margin: 0.01 * STANDARD_SIZE,
    padding: 0.02 * STANDARD_SIZE,
    borderRadius: 10
  },

  recommendItemText: {
    lineHeight: 0.08 * STANDARD_SIZE,
    fontSize: 0.04 * STANDARD_SIZE
  },
  recommendButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0.05 * STANDARD_SIZE
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
  },
  otherContainer: {
    margin: 0.03 * STANDARD_SIZE,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});
const ITEMS = {
  item0: require("../assets/images/GPSitems1.jpg"),
  item1: require("../assets/images/GPSitems2.jpg"),
  item2: require("../assets/images/GPSitems3.jpg"),
  item3: require("../assets/images/GPSitems4.jpg"),
  item4: require("../assets/images/GPSitems5.png")
};
const RecommendItem = props => (
  <View style={styles.recommendItemContainer}>
    <Image style={{ width: 100, height: 100 }} source={props.image} />

    <Text style={styles.recommendItemText}>{props.name}</Text>

    <View style={styles.recommendItemTextContainer}>
      <Text style={styles.recommendItemText}>{props.distance}</Text>
    </View>
    <View style={styles.recommendItemTextContainer}>
      <Text style={styles.recommendItemText}>{props.time}</Text>
    </View>

    <Button
      buttonStyle={styles.recommendButton}
      containerStyle={styles.recommendButtonContainer}
      title="兌換"
      outline
    />
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
        <View style={styles.pointContainer}>
          <View style={styles.pointInnerContainer}>
            <Image
              style={{ width: 100, height: 100 }}
              source={require("../assets/images/dCoin.png")}
            />
            <Text style={styles.pointText}> 8446</Text>
          </View>
        </View>
        <Divider />
        <View style={styles.recommendContainer}>
          <Text style={styles.recommendTitle}>你附近的商品</Text>
          <ScrollView horizontal="true">
            <RecommendItem
              name="STARBUCKS 星巴克 - 8折兌換卷"
              distance="350公尺"
              time="約4分鐘"
              image={ITEMS["item0"]}
            />
            <RecommendItem
              name="萊爾富 – 10元抵用券"
              distance="500公尺"
              time="約6分鐘"
              image={ITEMS["item1"]}
            />
            <RecommendItem
              name="全聯福利中心 – 鮮奶兌換券"
              distance="1.3公里"
              time="約18分鐘"
              image={ITEMS["item2"]}
            />
            <RecommendItem
              name="摩斯漢堡 – 海老天丼珍珠堡特價 $80"
              distance="800公尺"
              time="約10分鐘"
              image={ITEMS["item3"]}
            />
            <RecommendItem
              name="7-ELEVEN –原萃免費兌換券"
              distance="500公尺"
              time="約7分鐘"
              image={ITEMS["item4"]}
            />
          </ScrollView>
        </View>
        <Divider />
        <View style={styles.recommendContainer}>
          <Text style={styles.recommendTitle}>去逛逛 ... ?</Text>
          <View style={styles.otherContainer}>
            <Icon
              name="ios-shirt"
              type="ionicon"
              size={25}
              color="#bcaaa4"
              reverse
              raised
            />
            <Icon name="restaurant" size={25} color="#bcaaa4" reverse raised />
            <Icon name="flight" size={25} color="#bcaaa4" reverse raised />
            <Icon
              name="md-book"
              type="ionicon"
              size={25}
              color="#bcaaa4"
              reverse
              raised
            />
            <Icon
              name="ios-phone-portrait"
              type="ionicon"
              size={25}
              color="#bcaaa4"
              reverse
              raised
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default ExchangeScreen;
