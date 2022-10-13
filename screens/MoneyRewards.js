import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const MoneyRewards = () => {
  return (
    <ScrollView>
      <ImageBackground
        source={require("../assets/Orangebg.png")}
        style={styles.Orangebg}
      >
        <ImageBackground source={require("../assets/Ellipse 3.png")} style={styles.backButton}>
            <TouchableOpacity>🔙</TouchableOpacity>
        </ImageBackground>
        <Text>Rewards</Text>
        
      </ImageBackground>
      
    </ScrollView>
  );
};

export default MoneyRewards;

const styles = StyleSheet.create({
  Orangebg: {
    height: window.height,
    width: window.width,
  },
  backButton: {
    height:30,
    width:30
  },
});
