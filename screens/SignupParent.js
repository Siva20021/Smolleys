import React, { useEffect, useCallback } from "react";
import {
  ImageBackground,
  View,
  Image,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { useForm } from "react-hook-form";
import {
  useFonts,
  BubblegumSans_400Regular,
} from "@expo-google-fonts/bubblegum-sans";

const SignupParent = ({ navigation }) => {
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = useCallback((formData) => {
    // Start Code
    const { email, password, name, phone, country } = formData;

    if (name.length == 0 || email.length == 0 || password.length == 0) {
      Alert.alert("Error", "Fill Out Everything", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
      return;
    }
    if (password.length < 6) {
      Alert.alert("Error", "passwords must be at least 6 characters", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
      return;
    }

    firebase
      .firestore()
      .collection("users")
      .where("email", "==", email)
      .get()
      .then((snapshot) => {
        if (!snapshot.exist) {
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
              firebase
                .firestore()
                .collection("users")
                .doc(firebase.auth().currentUser.uid)
                .set({
                  name,
                  email,
                  image: "default",
                  phone,
                  country,
                  followingCount: 0,
                  followersCount: 0,
                });
              navigation.navigate("AccountSuccess");
              return;
            })
            .catch((e) => {
              navigation.navigate("AccountSuccess");
            });
        }
      });

    // new end
    console.log(formData);
  }, []);

  const onChangeField = useCallback(
    (name) => (text) => {
      setValue(name, text);
    },
    []
  );

  useEffect(() => {
    register("name");
    register("email");
    register("phone");
    register("country");
    register("password");
    register("confirmPassword");
  }, [register]);

  let [fontsLoaded] = useFonts({
    BubblegumSans_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.field}>
      {/* <TextInput
        autoCompleteType="email"
        keyboardType="email-address"
        textContentType="emailAddress"
        placeholder="Email"
        onChangeText={onChangeField("email")}
      />
      <TextInput
        secureTextEntry
        autoCompleteType="password"
        placeholder="Password"
        onChangeText={onChangeField("password")}
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}

      <ImageBackground
        source={require("../assets/Green.png")}
        style={styles.note}
      >
        <Text style={styles.title}>CREATE ACCOUNT</Text>
        <Text style={styles.subtitle}>Name</Text>
        <ImageBackground
          source={require("../assets/textbox.png")}
          style={styles.input}
        >
          <TextInput
            textContentType="name"
            placeholder="name"
            onChangeText={onChangeField("name")}
            style={{ fontFamily: "BubblegumSans_400Regular", color: "white" }}
          />
        </ImageBackground>
        <Text style={styles.subtitle}>Email</Text>
        <ImageBackground
          source={require("../assets/textbox.png")}
          style={styles.input}
        >
          <TextInput
            autoCompleteType="email"
            keyboardType="email-address"
            textContentType="emailAddress"
            placeholder="Email"
            onChangeText={onChangeField("email")}
            style={{ fontFamily: "BubblegumSans_400Regular", color: "white" }}
          />
        </ImageBackground>
        <Text style={styles.subtitle}>Phone No.</Text>
        <ImageBackground
          source={require("../assets/textbox.png")}
          style={styles.input}
        >
          <TextInput
            keyboardType="numeric"
            placeholder="Phone number"
            onChangeText={onChangeField("phone")}
            style={{ fontFamily: "BubblegumSans_400Regular", color: "white" }}
          />
        </ImageBackground>
        <Text style={styles.subtitle}>Country of Residence</Text>
        <ImageBackground
          source={require("../assets/textbox.png")}
          style={styles.input}
        >
          <TextInput
            textContentType="country"
            placeholder="Country"
            onChangeText={onChangeField("country")}
            style={{ fontFamily: "BubblegumSans_400Regular", color: "white" }}
          />
        </ImageBackground>
        <Text style={styles.subtitle}>Password</Text>
        <ImageBackground
          source={require("../assets/textbox.png")}
          style={styles.input}
        >
          <TextInput
            secureTextEntry
            autoCompleteType="password"
            placeholder="Password"
            onChangeText={onChangeField("confirmPassword")}
            style={{ fontFamily: "BubblegumSans_400Regular", color: "white" }}
          />
        </ImageBackground>
        <Text style={styles.subtitle}>Confirm Password</Text>
        <ImageBackground
          source={require("../assets/textbox.png")}
          style={styles.input}
        >
          <TextInput
            secureTextEntry
            autoCompleteType="password"
            placeholder="Password"
            onChangeText={onChangeField("password")}
            style={{ fontFamily: "BubblegumSans_400Regular", color: "white" }}
          />
        </ImageBackground>

        <View style={styles.display}>
          <View style={styles.display2}>
            <TouchableOpacity onPress={handleSubmit(onSubmit)}>
              <ImageBackground
                source={require("../assets/OK.png")}
                style={styles.OK}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <ImageBackground
                source={require("../assets/Reset.png")}
                style={styles.REJECT}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>

      <Image
        source={require("../assets/landscape.png")}
        style={styles.bottombar}
      />
    </View>
  );
};

export default SignupParent;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontFamily: "BubblegumSans_400Regular",
    color: "white",
    paddingBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: "BubblegumSans_400Regular",
    color: "white",
    paddingTop: 5,
  },
  input: {
    marginTop: 5,
    height: 35,
    width: 250,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 2.5,
  },
  field: {
    marginTop: 30,
    justifyContent: "center",
    alignContent: "center",
  },
  display: {
    flex: 1,
    marginTop: 40,
  },
  display2: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  OK: {
    height: 80,
    width: 80,
    resizeMode: "stretch",
    marginRight: 80,
  },
  REJECT: {
    height: 80,
    width: 80,
    resizeMode: "stretch",
  },
  note: {
    height: 600,
    width: window.width,
    resizeMode: "stretch",
    marginLeft: 25,
    marginRight: 25,
    marginTop: 40,
    paddingTop: 49,
    alignItems: "center",
  },
  bottombar: {
    height: 222,
    width: window.width,
    resizeMode: "stretch",
  },
});
