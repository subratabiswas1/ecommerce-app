import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CartScreen from "../screens/CartScreen";
import MenuScreen from "../screens/MenuScreen";
import { Ionicons } from "@expo/vector-icons";

const BottomNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 65,
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: { color: "black", fontSize: 15 },
          tabBarIcon: ({ focused, size }) =>
            focused ? (
              <Ionicons name="home" size={35} color="black" />
            ) : (
              <Ionicons name="home-outline" size={30} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarLabelStyle: { color: "black", fontSize: 15 },
          tabBarIcon: ({ focused, size }) =>
            focused ? (
              <Ionicons name="person" size={35} color="black" />
            ) : (
              <Ionicons name="person-outline" size={30} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: "Cart",
          tabBarLabelStyle: { color: "black", fontSize: 15 },
          tabBarIcon: ({ focused, size }) =>
            focused ? (
              <Ionicons name="cart" size={35} color="black" />
            ) : (
              <Ionicons name="cart-outline" size={30} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarLabel: "Menu",
          tabBarLabelStyle: { color: "black", fontSize: 15 },
          tabBarIcon: ({ focused, size }) =>
            focused ? (
              <Ionicons name="menu" size={35} color="black" />
            ) : (
              <Ionicons name="menu-outline" size={30} color="black" />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({});
