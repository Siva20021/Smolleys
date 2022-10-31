import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./screens/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen2 from "./screens/SplashScreen2";
import SplashScreen3 from "./screens/SplashScreen3";
import SplashScreen4 from "./screens/SplashScreen4";
import SplashScreen5 from "./screens/SplashScreen5";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFDPLXz0IzK1G3JVg5fRZSNtGKos-sOYk",
  authDomain: "smolley-9b48c.firebaseapp.com",
  projectId: "smolley-9b48c",
  storageBucket: "smolley-9b48c.appspot.com",
  messagingSenderId: "1093592090082",
  appId: "1:1093592090082:web:50a3880748f87f483b65bb",
  measurementId: "G-PLM2DNPPYR",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

import SignupParent from "./screens/SignupParent";
import AccountSuccess from "./screens/AccountSuccess";
import AddChild from "./screens/AddChild";
import Login from "./screens/Login";
import ChildAccountSuccess from "./screens/ChildAccountSuccess";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SplashScreen2"
          component={SplashScreen2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SplashScreen3"
          component={SplashScreen3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SplashScreen4"
          component={SplashScreen4}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SplashScreen5"
          component={SplashScreen5}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignupParent"
          component={SignupParent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AccountSuccess"
          component={AccountSuccess}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   {/* <Text>Hello world</Text> */}
    //   {/* <SignupParent /> */}
    //   {/* <AccountSuccess /> */}
    //   {/* <AddChild /> */}

    //   <SignupParent />
    //   {/* <SplashScreen5 /> */}
    // </View>
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
