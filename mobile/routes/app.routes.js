//import { StatusBar } from "expo-status-bar";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../src/screens/home";
import RegisterTask from "../src/screens/registerTask";
import RegisterUser from "../src/screens/registerUser";
import ListTask from "../src/screens/listTask";
import Dashboard from "../src/screens/dashboard";

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

const AppRoutes = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName='Dashboard'
      screenOptions={{ ...defautHeaderScreens }}>
      <Stack.Screen
        name='Dashboard'
        component={Dashboard}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name='Cadastro Tarefas' component={RegisterTask} />
      <Stack.Screen name='Cadastro Usuário' component={RegisterUser} />
      <Stack.Screen name='Lista de Tarefas' component={ListTask} />
      <Stack.Screen name='Register' component={RegisterTask} />
    </Stack.Navigator>
  );
};

export default AppRoutes;
