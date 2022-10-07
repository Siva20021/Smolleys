import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { useState } from "react";
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [country, setCountry] = useState("");
const [phone, setPhone] = useState("");
const [password, setPassword] = useState("");
const [pass, setPass] = useState("");
const SignupChildren = () => {
  return (
    <View>
      <View>
        <Text>Name</Text>
        <TextInput
          style={styles.input}
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Name"
        />
      </View>
      <View>
        <Text>Email</Text>
        <TextInput
          type="email"
          style={styles.input}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
        />
      </View>
      <View>
        <Text>Country</Text>
        <TextInput
          type="text"
          style={styles.input}
          onChange={(e) => setCountry(e.target.value)}
          value={country}
          placeholder="Country"
        />
      </View>
      <View>
        <Text>Phone No.</Text>
        <TextInput
          style={styles.input}
          type="number"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          placeholder="Phone"
        />
      </View>
      <View>
        <Text>Password</Text>
        <TextInput
          type="password"
          style={styles.input}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
        />
      </View>
      <View>
        <Text>Confirm Password</Text>
        <TextInput
          type="password"
          style={styles.input}
          onChange={(e) => setPass(e.target.value)}
          value={pass}
          placeholder="Password"
        />
      </View>
    </View>
  );
};

export default SignupChildren;

const styles = StyleSheet.create({});
