import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React, { useContext } from "react";
import { BottomModal, ModalContent, SlideAnimation } from "react-native-modals";
import { Entypo, FontAwesome6 } from "@expo/vector-icons";
import { AuthContext } from "./context/AuthContext";

const ModalComponent = ({ navigation }) => {
  const { modalVisible, setModalVisible, addresses } = useContext(AuthContext);
  return (
    <BottomModal
      visible={modalVisible}
      onHardwareBackPress={() => setModalVisible(!modalVisible)}
      onTouchOutside={() => setModalVisible(!modalVisible)}
      modalAnimation={
        new SlideAnimation({
          slideFrom: "bottom",
        })
      }
    >
      <ModalContent style={{ width: "100%", height: 350 }}>
        <Text style={{ fontSize: 16, fontWeight: 500 }}>
          Choose your Location
        </Text>
        <Text style={{ marginTop: 5, fontSize: 16, color: "gray" }}>
          Select a delivery location to see product availabilty and delivery
          options
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {addresses?.map((item) => (
            <Pressable
              style={{
                height: 150,
                width: 150,
                borderColor: "black",
                borderWidth: 2,
              }}
            >
              <Text>{item.name}</Text>
            </Pressable>
          ))}
          <Pressable
            style={{
              height: 150,
              width: 150,
              borderColor: "black",
              borderWidth: 2,
              marginVertical: 10,
              justifyContent: "center",
            }}
            onPress={() => {
              setModalVisible(!modalVisible);
              navigation.navigate("addAddress");
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "skyblue",
                textAlign: "center",
              }}
            >
              Add an address or pick-up point
            </Text>
          </Pressable>
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Entypo name="location-pin" size={24} color="black" />
          <Text>Enter your pincode</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            marginTop: 10,
            marginLeft: 3,
          }}
        >
          <FontAwesome6 name="location-crosshairs" size={20} color="black" />
          <Text>Use your current location</Text>
        </View>
      </ModalContent>
    </BottomModal>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({});
