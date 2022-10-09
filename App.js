import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./screens/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen2 from "./screens/SplashScreen2";
import SplashScreen3 from "./screens/SplashScreen3";
import SplashScreen4 from "./screens/SplashScreen4";
import SplashScreen5 from "./screens/SplashScreen5";

import SignupParent from "./screens/SignupParent";
import AccountSuccess from "./screens/AccountSuccess";
import AddChild from "./screens/AddChild";
import Login from "./screens/Login";
import ChildAccountSuccess from "./screens/ChildAccountSuccess";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="SplashScreen"
    //       component={SplashScreen}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen
    //       name="SplashScreen2"
    //       component={SplashScreen2}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen
    //       name="SplashScreen3"
    //       component={SplashScreen3}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen
    //       name="SplashScreen4"
    //       component={SplashScreen4}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen
    //       name="SplashScreen5"
    //       component={SplashScreen5}
    //       options={{ headerShown: false }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <View style={styles.container}>
      {/* <Text>Hello world</Text> */}
      {/* <SignupParent /> */}
      {/* <AccountSuccess /> */}
      {/* <AddChild /> */}

      <ChildAccountSuccess />
      {/* <SplashScreen5 /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
