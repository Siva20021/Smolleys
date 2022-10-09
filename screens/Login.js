import {
  ImageBackground,
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import {
  useFonts,
  BubblegumSans_400Regular,
} from "@expo-google-fonts/bubblegum-sans";
const Login = () => {
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = useCallback((formData) => {
    console.log(formData);
  }, []);

  const onChangeField = useCallback(
    (name) => (text) => {
      setValue(name, text);
    },
    []
  );

  useEffect(() => {
    register("email");
    register("password");
  }, [register]);

  let [fontsLoaded] = useFonts({
    BubblegumSans_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.field}>
      <ImageBackground
        source={require("../assets/GreenLogin.png")}
        style={styles.note}
      >
        <Text style={styles.title}>LOGIN</Text>
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
        <Text style={styles.subtitle}>Password</Text>
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
            <TouchableOpacity>
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

export default Login;

const styles = StyleSheet.create({
  field: {
    marginTop: 130,
    justifyContent: "center",
    alignContent: "center",
  },
  note: {
    height: 400,
    width: window.width,
    resizeMode: "stretch",
    marginLeft: 25,
    marginRight: 25,
    marginTop: 40,
    paddingTop: 49,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontFamily: "BubblegumSans_400Regular",
    color: "white",
    paddingBottom: 20,
  },
  input: {
    marginTop: 5,
    height: 35,
    width: 250,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 2.5,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: "BubblegumSans_400Regular",
    color: "white",
    paddingTop: 5,
  },
  display: {
    flex: 1,
    marginTop: 100,
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
});
