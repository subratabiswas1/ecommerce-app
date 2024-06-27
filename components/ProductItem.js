import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const ProductItem = ({ item }) => {
  return (
    <Pressable style={{ margin: 20 }}>
      <Image
        source={{ uri: item.image }}
        style={{ height: 150, width: 150, resizeMode: "contain" }}
      />
      <Text numberOfLines={1} style={{ width: 150, marginTop: 10 }}>
        {item.title}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 5,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>₹{item.price}</Text>
        <Text style={{ fontWeight: "bold", color: "orange" }}>
          {item.rating.rate} ratings
        </Text>
      </View>
      <Pressable
        style={{ backgroundColor: "gold", borderRadius: 20, marginTop: 10 }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "black",
            paddingVertical: 10,
            fontSize: 18,
          }}
        >
          Add to cart
        </Text>
      </Pressable>
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({});
