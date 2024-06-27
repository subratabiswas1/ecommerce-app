import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [addresses, setAddresses] = useState([]);

  return (
    <AuthContext.Provider
      value={{ modalVisible, setModalVisible, addresses, setAddresses }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const styles = StyleSheet.create({});
