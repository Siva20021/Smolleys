import { useRef } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  ScrollViewBase,
  StyleSheet,
  Text,
  View,
} from "react-native";
import BottomNav from "../components/bottomNav";
import IslandComponent from "../components/island";
import TopBar from "../components/topBar";
const win = Dimensions.get("window");

const KidsHomePage = ({ navigation }) => {
  const scrollViewRef = useRef();
  return (
    <ImageBackground
      style={styles.bg}
      source={require("../assets/mini-component-assets/water.png")}
    >
      <TopBar />
      <ScrollView
        ref={scrollViewRef}
        // onContentSizeChange={() =>
        //   scrollViewRef.current.scrollToEnd({ animated: true })
        // }
        style={styles.direction}
      >
        <IslandComponent
          navigation={navigation}
          task="Do the dishes"
          icon="🍽️"
          position="5"
        />
        <IslandComponent
          navigation={navigation}
          task="Take out the trash"
          icon="🗑️"
          position="4"
        />
        <IslandComponent
          navigation={navigation}
          task="Play Outside"
          icon="🧸"
          position="3"
        />
        <IslandComponent
          navigation={navigation}
          task="Walk the cat"
          icon="🐈"
          position="2"
        />
        <IslandComponent
          navigation={navigation}
          task="Do Homework"
          icon="🎒"
          position="1"
        />
      </ScrollView>
      <BottomNav navigation={navigation} />
    </ImageBackground>
  );
};

export default KidsHomePage;

const styles = StyleSheet.create({
  bg: {
    height: win.height + 40,
  },
  direction: {
    // flexDirection: "column-reverse",

    height: win.height + 800,
    paddingBottom: 200,
    // paddingBottom: win.height / 6,
  },
});
