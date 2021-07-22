import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
  TextInput,
  BackHandler,
} from "react-native";

import imgBackground from "../../assets/backgraund.png";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { deleteTokenStorage } from "../utils/storage";

const Home = ({ route, navigation }) => {
  const handleLogout = () => {
    deleteTokenStorage();
    BackHandler.exitApp();
  };
  return (
    <ImageBackground source={imgBackground} style={styles.imgBackground}>
      <View style={styles.container}>
        <View style={styles.vwTitle}>
          <Text style={styles.subTitle}>Administrativo </Text>
          <Text style={styles.titleTwo}>Pastel King</Text>
          {/*  */}
        </View>
        <View style={styles.painel}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Cadastro Usuário")}>
            <Text style={styles.txtButton}>
              <MaterialCommunityIcons
                name='account-plus'
                size={80}
                color='#fff'
              />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Lista Usuarios")}>
            <Text style={styles.txtButton}>
              <MaterialCommunityIcons
                name='card-account-details-outline'
                size={80}
                color='#fff'
              />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.painel}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Cadastro Tarefas")}>
            <Text style={styles.txtButton}>
              <MaterialCommunityIcons
                name='calendar-check'
                size={80}
                color='#fff'
              />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Lista de Tarefas")}>
            <Text style={styles.txtButton}>
              <MaterialCommunityIcons
                name='format-list-text'
                size={80}
                color='#fff'
              />
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.btnLogOut}
          onPress={() => handleLogout()}>
          <Text style={styles.title}>SAIR</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  imgBackground: {
    width: "100%",
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  vwTitle: {
    justifyContent: "flex-start",
    fontWeight: "bold",
    fontSize: 26,
    marginBottom: 50,
    padding: 10,
    marginTop: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
    color: "#ffffff",
  },
  titleTwo: {
    fontWeight: "bold",
    fontSize: 44,
    color: "#ffffff",
    marginBottom: 10,
  },
  subTitle: {
    fontWeight: "300",
    fontSize: 20,
    color: "#ffffff",
  },
  button: {
    width: "40%",
    height: 130,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FBB606",
    borderRadius: 10,
    margin: 10,
  },
  btnLogOut: {
    width: "85%",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FBB606",
    borderRadius: 10,
    margin: 10,
  },
  painel: {
    flexDirection: "row",
  },
});
