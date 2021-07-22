import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
  TextInput,
} from "react-native";

import imgBackground from "../../assets/backgraund.png";
import { setTokenStorage, getTokenStorage } from "../utils/storage";
import { AuthContext } from "../../contexts/auth";
import { Link } from "@react-navigation/native";

const Home = ({ route, navigation }) => {
  const { signed, signIn } = useContext(AuthContext);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  console.log("Home");
  console.log(signed);

  const handleUser = (event) => {
    setUser(event);
  };
  const handlePassword = (event) => {
    setPassword(event);
  };

  const handleLogin = async () => {
    const newUser = {
      email: user,
      password: password,
    };
    signIn(newUser);
  };
  return (
    <ImageBackground source={imgBackground} style={styles.imgBackground}>
      <View style={styles.container}>
        <View style={styles.vwTitle}>
          <Text style={styles.subTitle}>Bem vindo ao </Text>
          <Text style={styles.titleTwo}>Pastel King</Text>
          {/*  */}
        </View>

        <TextInput
          style={styles.input}
          placeholder='seu@email.com'
          keyboardType='email-address'
          placeholderTextColor='#fff'
          textAlign='center'
          value={user}
          onChangeText={(e) => handleUser(e)}
        />
        <TextInput
          style={styles.input}
          placeholder='senha'
          secureTextEntry={true}
          textAlign='center'
          placeholderTextColor='#fff'
          value={password}
          onChangeText={(e) => handlePassword(e)}
        />
        <TouchableOpacity
          style={styles.buttonOne}
          //onPress={() => navigation.navigate("Dashboard")}>
          onPress={(user) => handleLogin(user)}>
          <Text style={styles.txtButton}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Cadastro Usuarios")}>
          <Text style={styles.txtButtonCadastre}>
            Não possui conta! Cadastre-se aqui
          </Text>
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
    marginBottom: 100,
    padding: 40,
    marginTop: 150,
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
  buttonOne: {
    width: "80%",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FBB606",
    borderRadius: 10,
  },
  buttonTwo: {
    width: "80%",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#484746",
    borderRadius: 10,
    marginTop: 25,
  },
  txtButton: {
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "bold",
  },
  txtButtonCadastre: {
    fontSize: 16,
    color: "#ffffff",
    marginTop: 10,
    marginBottom: 60,
  },
  input: {
    width: "80%",
    height: 70,
    backgroundColor: "#DAAA2F",
    borderRadius: 10,
    marginBottom: 10,
    padding: 20,
    fontSize: 18,
    fontWeight: "400",
    opacity: 0.68,
    color: "#FFFFFF",
  },
});
