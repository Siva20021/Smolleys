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
} from "react-native";

// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

import { useForm } from "react-hook-form";
import {
  useFonts,
  BubblegumSans_400Regular,
} from "@expo-google-fonts/bubblegum-sans";

const SignupChild = ({ navigation }) => {
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = useCallback((formData) => {
    // Start Code
    const { email, password, name } = formData;
    //     firebase
    //       .auth()
    //       .createUserWithEmailAndPassword(email, password)
    //       .then((result) => {
    //         console.log(result);
    //         navigation.navigate("AccountSuccess");
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //     // End
    //     console.log(formData);
    //   }, []);
  });
  const onChangeField = useCallback(
    (name) => (text) => {
      setValue(name, text);
    },
    []
  );

  useEffect(() => {
    register("name");
    register("school");
    register("age");
    register("sex");
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
        <Text style={styles.subtitle}>Child's Name</Text>
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
        <Text style={styles.subtitle}>School</Text>
        <ImageBackground
          source={require("../assets/textbox.png")}
          style={styles.input}
        >
          <TextInput
            textContentType="text"
            placeholder="School"
            onChangeText={onChangeField("school")}
            style={{ fontFamily: "BubblegumSans_400Regular", color: "white" }}
          />
        </ImageBackground>
        <Text style={styles.subtitle}>Age</Text>
        <ImageBackground
          source={require("../assets/textbox.png")}
          style={styles.input}
        >
          <TextInput
            keyboardType="numeric"
            placeholder="Age"
            onChangeText={onChangeField("age")}
            style={{ fontFamily: "BubblegumSans_400Regular", color: "white" }}
          />
        </ImageBackground>
        <Text style={styles.subtitle}>Sex</Text>
        <ImageBackground
          source={require("../assets/textbox.png")}
          style={styles.input}
        >
          <TextInput
            textContentType="sex"
            placeholder="Sex"
            onChangeText={onChangeField("sex")}
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

export default SignupChild;

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
