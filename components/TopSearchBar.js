import { View, TextInput, StatusBar, StyleSheet } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import React from "react";

const TopSearchBar = () => {
  return (
    <View>
      <StatusBar backgroundColor={"#56EFED"} barStyle="dark-content" />
      <View style={{ backgroundColor: "#56EFED", paddingTop: 5, height: 70 }}>
        <View style={styles.searchBar}>
          <AntDesign
            style={{ marginLeft: 10 }}
            name="search1"
            size={24}
            color="black"
          />
          <TextInput style={{ fontSize: 18 }} placeholder="Search Amazon.in" />
          <Ionicons
            style={{ marginRight: 10 }}
            name="mic-outline"
            size={24}
            color="black"
          />
        </View>
      </View>
    </View>
  );
};

export default TopSearchBar;

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: "#fff",
    marginVertical: 10,
    height: 42,
    marginHorizontal: 20,
    borderRadius: 7,
    shadowColor: "black",
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
