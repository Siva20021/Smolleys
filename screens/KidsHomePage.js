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
      source={require("../assets/mini-component-assets/kidsBg.jpg")}
    >
      <TopBar />
      <ScrollView
        ref={scrollViewRef}
        // onContentSizeChange={() =>
        //   scrollViewRef.current.scrollToEnd({ animated: true })
        // }
        style={styles.direction}
      >
        <IslandComponent position="7" />
        <IslandComponent position="6" />
        <IslandComponent position="5" />
        <IslandComponent position="4" />
        <IslandComponent position="3" />
        <IslandComponent position="2" />
        <IslandComponent position="1" />
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

    marginTop: 90,
    marginBottom: 55,
    // paddingBottom: win.height / 6,
  },
});
