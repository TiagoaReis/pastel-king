// import { StatusBar } from "expo-status-bar";
import React from "react";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import { AuthProvider } from "./contexts/auth";

import Routes from "./routes/index.js";

const App = ({ navigation }) => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar style='light' />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
