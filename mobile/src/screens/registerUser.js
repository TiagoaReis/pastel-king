import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
  Alert,
  Platform,
  Button,
  ScrollView,
} from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";

import AsyncStorage from "@react-native-async-storage/async-storage";
import imgBackground from "../../assets/backgraund.png";
import { getDataStorage, getTokenStorage } from "../utils/storage";
import axios from "axios";

const RegisterUser = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [admin, setAdmin] = useState("");
  const [allResults, setAllResults] = useState([]);

  useEffect(() => {}, []);

  const handleName = (event) => {
    setName(event);
  };
  const handleEmail = (event) => {
    setEmail(event);
  };
  const handleSenha = (event) => {
    setSenha(event);
  };
  const handleAdmin = (event) => {
    setAdmin(event);
  };
  const handleSalvar = () => {
    const newUser = {
      name: name,
      email: email,
      password: senha,
      admin: 0,
    };
    saveUser(newUser);
  };

  const saveUser = async (user) => {
    console.log("salva usuario");
    const token = await getTokenStorage();
    console.log(user);
    console.log(token);
    axios
      .post("http://rest-api-app-smn.herokuapp.com/user", user)
      .then((resposta) => {
        const data = resposta.data;
        console.log("post user");
        console.log(data);
        createButtonAlert();
        cleanState();
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  const cleanState = () => {
    setName("");
    setEmail("");
    setSenha("");
    setAdmin("");
  };

  const loadStorage = async () => {
    const data = await getDataStorage();
    if (data !== null) {
      setAllResults(data);
      return;
    } else {
    }
  };

  const createButtonAlert = () =>
    Alert.alert("App Informa!", `Usuario ${name} inserido com sucesso!`, [
      {},
      // {
      //   text: "Cancel",
      //   onPress: () => console.log("Cancel Pressed"),
      //   style: "cancel",
      // },
      { text: "OK" },
    ]);
  return (
    <ImageBackground source={imgBackground} style={styles.imgBackground}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Nome usuário</Text>
          <TextInput
            style={styles.buttonOne}
            placeholder=''
            placeholderTextColor='#fff'
            value={name}
            onChangeText={(e) => handleName(e)}
          />
          <Text style={styles.title}>Email</Text>
          <TextInput
            style={styles.buttonOne}
            placeholder=''
            placeholderTextColor='#fff'
            value={email}
            onChangeText={(e) => handleEmail(e)}
          />
          <Text style={styles.title}>Senha</Text>
          <TextInput
            style={styles.buttonOne}
            placeholder=''
            placeholderTextColor='#fff'
            value={senha}
            onChangeText={(e) => handleSenha(e)}
          />
          <Text style={styles.title}>Administrador</Text>
          <TextInput
            style={styles.buttonOne}
            placeholder='1 - para sim, 0 - para não'
            placeholderTextColor='#fff'
            value={admin}
            onChangeText={(e) => handleAdmin(e)}
          />
          <TouchableOpacity
            style={styles.buttonTwo}
            onPress={() => handleSalvar()}>
            <Text style={styles.subTitle}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default RegisterUser;

const styles = StyleSheet.create({
  imgBackground: {
    width: "100%",
    flex: 1,
  },
  container: {
    flexDirection: "column",
    margin: 10,
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
    color: "#ffffff",
  },
  subTitle: {
    fontWeight: "700",
    fontSize: 20,
    color: "#ffffff",
  },
  buttonOne: {
    width: "100%",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DAAA2F",
    opacity: 0.68,
    borderRadius: 10,
    marginTop: 10,
    padding: 15,
    fontWeight: "700",
    fontSize: 20,
  },
  buttonObs: {
    width: "100%",
    height: 100,
    backgroundColor: "#DAAA2F",
    opacity: 0.68,
    borderRadius: 10,
    fontWeight: "700",
    fontSize: 20,
    padding: 15,
    marginTop: 10,
  },
  buttonTwo: {
    width: "100%",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FBB606",
    borderRadius: 10,
    marginTop: 65,
    padding: 15,
  },
});
