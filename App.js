import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./navigation/StackNavigator";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import { ModalPortal } from "react-native-modals";
import { AuthProvider } from "./components/context/AuthContext";

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <StackNavigator />
        <ModalPortal />
      </AuthProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
