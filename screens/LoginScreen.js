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
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const handleLogin = () => {};
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
            Login to your account
          </Text>
        </View>
        <View style={{ marginTop: 80, marginHorizontal: 25 }}>
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
          <Text
            onPress={() => navigation.navigate("ForgotPassword")}
            style={{ fontSize: 15, fontWeight: 600, color: "blue" }}
          >
            Forgot Password?
          </Text>
        </View>
        <View style={{ marginTop: 100 }}>
          <Pressable style={styles.button} onPress={handleLogin}>
            <Text style={{ fontSize: 20, color: "white", fontWeight: 700 }}>
              Login
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            margin: 10,
          }}
        >
          <Text style={{ fontSize: 15 }}>Don't have an account? </Text>
          <Text
            onPress={() => navigation.navigate("Register")}
            style={{ fontSize: 15, fontWeight: "bold" }}
          >
            Register
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

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
