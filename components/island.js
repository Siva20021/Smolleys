import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component, useState } from "react";
import {
  useFonts,
  BubblegumSans_400Regular,
} from "@expo-google-fonts/bubblegum-sans";

const win = Dimensions.get("window");

const IslandComponent = ({ position }) => {
  const [open, setOpen] = useState(false);
  let [fontsLoaded] = useFonts({
    BubblegumSans_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }

  function getImage(position) {
    if (position == 1)
      return require("../assets/mini-component-assets/island1.png");
    if (position == 2)
      return require("../assets/mini-component-assets/island2.png");
    if (position == 3)
      return require("../assets/mini-component-assets/island3.png");
    if (position == 4)
      return require("../assets/mini-component-assets/island4.png");
    if (position == 5)
      return require("../assets/mini-component-assets/island5.png");
    if (position == 6)
      return require("../assets/mini-component-assets/island6.png");
    if (position == 7)
      return require("../assets/mini-component-assets/island7.png");
    if (position > 7)
      return require("../assets/mini-component-assets/island1.png");
  }
  return (
    <View>
      {/* Island Popup */}
      <ImageBackground
        style={[
          open ? null : styles.hide,
          styles.islandPop,
          position == 7
            ? styles.islandCenter
            : position % 2 == 0
            ? styles.islandLeft
            : styles.islandRight,
        ]}
        source={require("../assets/mini-component-assets/moneyButton.png")}
      >
        <Text style={styles.emoji}>🛏️</Text>
        <Text style={styles.todoText}>Make Your Bed</Text>
        <ImageBackground
          source={require("../assets/mini-component-assets/blueButton.png")}
          style={styles.button}
        >
          <Text style={styles.todoText}>Complete Task</Text>
        </ImageBackground>
      </ImageBackground>

      {/* Island */}
      <TouchableOpacity onPress={() => setOpen(!open)}>
        <Image
          source={getImage(position)}
          style={[
            position == 7 ? styles.island7 : styles.island,
            position == 7
              ? styles.islandCenter
              : position % 2 == 0
              ? styles.islandLeft
              : styles.islandRight,
          ]}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  islandPop: {
    width: 270,
    margin: 10,
    resizeMode: "contain",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  island: {
    height: 200,
    marginTop: -20,
  },
  island7: {
    height: 200,
    width: 310,
    marginTop: -20,
  },
  islandLeft: {
    alignSelf: "flex-end",
  },
  islandRight: {
    alignSelf: "flex-start",
  },
  islandCenter: {
    alignSelf: "center",
  },
  emoji: {
    fontSize: 70,
  },
  todoText: {
    fontSize: 20,
    color: "green",
    fontFamily: "BubblegumSans_400Regular",
  },
  hide: {
    display: "none",
  },
  button: {
    height: 70,
    padding: 10,
    marginBottom: -40,
    elevation: 5,
    width: win.width - 192,
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default IslandComponent;
