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
import { getTokenStorage } from "../utils/storage";
import axios from "axios";

const RegisterTask = (props) => {
  const [autor, setAutor] = useState("");
  const [destinatario, setDestinatario] = useState("");
  const [description, setDescription] = useState("");
  const [datalimit, setDatalimit] = useState("");
  const [status, setStatus] = useState("");
  const [count, setCount] = useState(0);
  const [allResults, setAllResults] = useState([]);

  //-------------------------------------------
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };
  //-------------------------------------------

  useEffect(() => {
    //getDataStorage();
    //loadStorage();
  }, []);
  const handleAutor = (event) => {
    setAutor(event);
  };
  const handleDestinatario = (event) => {
    setDestinatario(event);
  };
  const handleDescription = (event) => {
    setDescription(event);
  };
  const handleDatalimit = (event) => {
    setDatalimit(event);
  };
  const handleSalvar = () => {
    const newTask = {
      autor: autor,
      destinatario: destinatario,
      description: description,
      datal_imit: datalimit,
      status: 0,
    };
    saveTask(newTask);
  };

  const saveTask = async (task) => {
    console.log("salva tarefa");
    const token = await getTokenStorage();
    console.log(token);
    console.log(task);

    axios({
      method: "POST",
      baseURL: "http://rest-api-app-smn.herokuapp.com/task",
      timeout: 2000,
      headers: { Authorization: "Bearer " + token },
      data: task,
    })
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
    setDatalimit("");
    setDescription("");
    setDestinatario("");
    setStatus("");
    setAutor("");
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
    Alert.alert("App Informa!", `Tarefa inserida com sucesso!`, [
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
          <Text style={styles.title}>Autor</Text>
          <TextInput
            style={styles.buttonOne}
            placeholder=''
            placeholderTextColor='#fff'
            value={autor}
            onChangeText={(e) => handleAutor(e)}
          />
          <Text style={styles.title}>Para quem?</Text>
          <TextInput
            style={styles.buttonOne}
            placeholder=''
            placeholderTextColor='#fff'
            value={destinatario}
            onChangeText={(e) => handleDestinatario(e)}
          />

          <Text style={styles.title}>Descrição</Text>
          <TextInput
            style={styles.buttonObs}
            placeholder='digite aqui...'
            placeholderTextColor='#fff'
            value={description}
            onChangeText={(e) => handleDescription(e)}
            multiline={true}
            textAlign={"left"}
          />
          <Text style={styles.title}>Data Limite</Text>
          <TextInput
            style={styles.buttonOne}
            placeholder='1985-12-26'
            placeholderTextColor='#fff'
            value={datalimit}
            onChangeText={(e) => handleDatalimit(e)}
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

export default RegisterTask;

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
