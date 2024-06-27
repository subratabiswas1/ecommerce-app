import {
  FlatList,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import {
  AntDesign,
  Ionicons,
  EvilIcons,
  FontAwesome6,
  SimpleLineIcons,
  Entypo,
} from "@expo/vector-icons";
import { list, images, deals, offers } from "../assets/asset";
import { SliderBox } from "react-native-image-slider-box";
import ProductItem from "../components/ProductItem";
import { BottomModal, ModalContent, SlideAnimation } from "react-native-modals";
import TopSearchBar from "../components/TopSearchBar";
import ModalComponent from "../components/ModalComponent";
import { AuthContext } from "../components/context/AuthContext";

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const { modalVisible, setModalVisible } = useContext(AuthContext);

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.warn("error in fetching products", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <TopSearchBar />
      <ScrollView>
        <Pressable
          style={styles.addAddress}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <EvilIcons
            style={{ marginLeft: 10 }}
            name="location"
            size={24}
            color="black"
          />
          <Text style={{ marginTop: 2 }}>Add a address</Text>
          <SimpleLineIcons
            style={{ marginTop: 3 }}
            name="arrow-down"
            size={15}
            color="black"
          />
        </Pressable>

        <FlatList
          data={list}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Pressable style={styles.categoryStyle}>
              <Image
                source={{ uri: item.image }}
                style={{ height: 50, width: 50, resizeMode: "contain" }}
              />
              <Text>{item.name}</Text>
            </Pressable>
          )}
          keyExtractor={(item) => item.id}
        />

        <SliderBox
          images={images}
          dotColor={"black"}
          inactiveDotColor={"white"}
          autoplay={true}
          circleLoop={true}
          ImageComponentStyle={{ width: "100%" }}
        />

        <Text style={styles.textHeader}>Trending Deals of the week</Text>

        <View style={styles.productContainer}>
          {deals.map((item) => (
            <Pressable
              style={{
                marginVertical: 10,
                alignItems: "center",
              }}
              key={item.id}
            >
              <Image
                key={item.id}
                source={{ uri: item.image }}
                style={{ width: 180, height: 180, resizeMode: "contain" }}
              />
            </Pressable>
          ))}
        </View>

        <View style={{ height: 5, backgroundColor: "#bbb", width: "100%" }} />

        <Text style={styles.textHeader}>Today's offers</Text>

        <FlatList
          data={offers}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Pressable style={styles.categoryStyle}>
              <Image
                source={{ uri: item.image }}
                style={{ height: 150, width: 150, resizeMode: "contain" }}
              />
              <View
                style={{
                  backgroundColor: "#C4585A",
                  width: 150,
                  borderRadius: 5,
                  marginVertical: 10,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    paddingVertical: 5,
                    color: "white",
                  }}
                >
                  Upto {item.offer}
                </Text>
              </View>
            </Pressable>
          )}
          keyExtractor={(item) => item.id}
        />
        <View style={{ height: 5, backgroundColor: "#bbb", width: "100%" }} />

        <View
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {products.map((item, index) => (
            <ProductItem item={item} key={index} />
          ))}
        </View>
      </ScrollView>
      <ModalComponent navigation={navigation} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  addAddress: {
    backgroundColor: "#B2ECEB",
    height: 40,
    flexDirection: "row",
    paddingTop: 8,
    gap: 5,
  },
  categoryStyle: {
    flex: 1,
    alignItems: "center",
    margin: 5,
    marginLeft: 10,
  },
  textHeader: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
  productContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
  },
});
