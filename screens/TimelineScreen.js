import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import React, { Component } from "react";
import BottomNav from "../components/bottomNav";
import Timeline from "../components/timeline";
const win = Dimensions.get("window");

const TimelineScreen = ({ navigation }) => {
  return (
    <View style={styles.bg}>
      <Image
        style={[styles.bar, styles.barPosition, styles.float]}
        source={require("../assets/mini-component-assets/profilexl.png")}
      />
      <ScrollView>
        <Timeline
          name="Hamza Kalande"
          src={require("../assets/mini-component-assets/photo1.png")}
        />
        <Timeline
          name="Edidiong Udoh"
          src={require("../assets/mini-component-assets/photo2.png")}
        />
      </ScrollView>
      <BottomNav navigation={navigation} />
    </View>
  );
};
export default TimelineScreen;

const styles = StyleSheet.create({
  bg: {
    height: win.height + 40,
  },
  barPosition: {
    top: 20,
    right: 20,
  },
  bar: {
    // width: win.width,
    height: 80,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    alignSelf: "center",
  },
  float: {
    position: "absolute",
    elevation: 6,
    zIndex: 6,
  },
});
