import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons, AntDesign, Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";

const url = "http://localhost:8000/register";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const handleRegister = async () => {
    const user = { name, email, password };
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.warn("Registration failed:", errorData);
        alert(`Registration failed: ${errorData.message}`);
        return;
      }
      const responseData = await response.json();
      console.warn("Registration successful", responseData);
      setName("");
      setEmail("");
      setPassword("");
      navigation.navigate("Main");
    } catch (error) {
      console.warn("Registration error:", error);
      alert("An error occurred during registration. Please try again.");
    }
  };
  return (
    <SafeAreaView style={styles.main}>
      <View style={{ alignItems: "center" }}>
        <Image
          style={styles.image}
          source={{
            uri: "https://pngicon.ru/file/uploads/Logo-Amazon.png",
          }}
        />
      </View>
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 20, margin: 20, fontWeight: 500 }}>
            Create your account
          </Text>
        </View>
        <View style={{ marginTop: 80, marginHorizontal: 25 }}>
          <View style={styles.textBox}>
            <Ionicons
              style={{ marginLeft: 5, color: "gray" }}
              name="person"
              size={24}
              color="black"
            />
            <TextInput
              style={{ color: "gray", fontSize: 15 }}
              placeholder="Enter your name"
              value={name}
              onChangeText={(text) => setName(text)}
              cursorColor={"black"}
              placeholderTextColor="gray"
            />
          </View>
        </View>
        <View style={{ marginTop: 20, marginHorizontal: 25 }}>
          <View style={styles.textBox}>
            <MaterialIcons
              style={{ marginLeft: 5, color: "gray" }}
              name="email"
              size={24}
              color="black"
            />
            <TextInput
              style={{ color: "gray", fontSize: 15 }}
              placeholder="Enter your email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              textContentType="emailAddress"
              cursorColor={"black"}
              placeholderTextColor="gray"
            />
          </View>
        </View>
        <View style={{ marginTop: 20, marginHorizontal: 25 }}>
          <View style={styles.textBox}>
            <AntDesign
              style={{ marginLeft: 5, color: "gray" }}
              name="lock"
              size={24}
              color="black"
            />
            <TextInput
              style={{ color: "gray", fontSize: 15 }}
              placeholder="Enter your password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
              cursorColor={"black"}
              placeholderTextColor="gray"
            />
          </View>
        </View>
        <View style={styles.checkBoxContainer}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Checkbox
              value={isChecked}
              onValueChange={() => setIsChecked(!isChecked)}
            />
            <Text style={{ fontSize: 15 }}>Keep me logged in</Text>
          </View>
        </View>
        <View style={{ marginTop: 100 }}>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("Main")}
          >
            <Text style={{ fontSize: 20, color: "white", fontWeight: 700 }}>
              Register
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            margin: 15,
          }}
        >
          <Text style={{ fontSize: 15 }}>Already have an account? </Text>
          <Text
            onPress={() => navigation.navigate("Login")}
            style={{ fontSize: 15, fontWeight: "bold" }}
          >
            Login
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 60,
  },
  image: {
    height: 100,
    width: 180,
  },
  textBox: {
    alignItems: "center",
    backgroundColor: "#bbb",
    flexDirection: "row",
    paddingVertical: 8,
    gap: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  checkBoxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 25,
    marginTop: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
    marginHorizontal: 100,
    paddingVertical: 15,
    borderRadius: 10,
    shadowColor: "black",
    elevation: 5,
  },
});
