//import { StatusBar } from "expo-status-bar";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../src/screens/home";
import RegisterUser from "../src/screens/registerUser";

const Stack = createStackNavigator();

const defautHeaderScreens = {
  headerStyle: {
    height: 80, // Specify the height of your custom header
    backgroundColor: "#000000",
  },
  headerTitleAlign: "center",
  headerTintColor: "#ffffff",
  headerTitleStyle: {
    fontSize: 28,
    fontWeight: "bold",
  },
};

const AuthRoutes = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{ ...defautHeaderScreens }}>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name='Cadastro Usuarios' component={RegisterUser} />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
