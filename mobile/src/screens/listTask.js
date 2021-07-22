import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
  FlatList,
  Button,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import imgBackground from "../../assets/backgraund.png";

import { getDataStorage, getTokenStorage } from "../utils/storage";
import axios from "axios";
import ListItem from "../components/listItem";

const ListTask = (props) => {
  const [searchText, setSearchText] = useState("");
  const [list, setList] = useState("");
  const [data, setdata] = useState("");

  useEffect(() => {
    if (searchText === "") {
      loadStorage();
    } else {
      setList(
        list.filter(
          (item) =>
            item.autor.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        )
      );
    }
  }, [searchText]);

  const loadStorage = async () => {
    console.log("List - busca");
    const token = await getTokenStorage();
    console.log("TOKEN");
    console.log(token);
    const conexao = axios.create({
      baseURL: "https://rest-api-app-smn.herokuapp.com",
      timeout: 2000,
      headers: { Authorization: "Bearer " + token },
    });
    conexao
      .get("/task")
      .then((resposta) => {
        const data = resposta.data;
        console.log("Get - task");
        setList(data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  const handleOrderClick = () => {
    let newList = [...list];
    newList.sort((a, b) =>
      a.autor > b.autor ? 1 : b.autor > a.autor ? -1 : 0
    );
    setList(newList);
    newList = [];
  };

  const removeItem = async (itemID) => {
    console.log(itemID.taskID);
    //const temp = list.filter((item) => item.id !== itemID.id);
    //setList(temp);
    // await setDataStorage(temp);
    // loadStorage();
  };

  return (
    <ImageBackground source={imgBackground} style={styles.imgBackground}>
      <View style={styles.searchArea}>
        <TextInput
          style={styles.input}
          placeholder='Pesquise uma tarefa'
          placeholderTextColor='#fff'
          value={searchText}
          onChangeText={(t) => setSearchText(t)}
        />
        <TouchableOpacity onPress={handleOrderClick} style={styles.orderButton}>
          <MaterialCommunityIcons
            name='order-alphabetical-ascending'
            size={32}
            color='#fff'
          />
        </TouchableOpacity>
      </View>
      {/* <Text style={styles.title}>Lista de músicas</Text>
      <Button title='teste' onPress={() => getDataStorage()} /> */}
      <FlatList
        data={list}
        style={styles.list}
        renderItem={({ item }) => (
          <ListItem data={item} removeItem={(itemID) => removeItem(item)} />
        )}
        keyExtractor={(item) => item.taskID}
      />
    </ImageBackground>
  );
};

export default ListTask;

const styles = StyleSheet.create({
  imgBackground: {
    width: "100%",
    flex: 1,
  },
  title: {
    color: "#fff",
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: "#DAAA2F",
    opacity: 0.7,
    margin: 20,
    borderRadius: 5,
    fontSize: 19,
    paddingLeft: 15,
    paddingRight: 15,
    color: "#FFFFFF",
  },
  searchArea: {
    flexDirection: "row",
    alignItems: "center",
  },
  orderButton: {
    width: 32,
    marginRight: 30,
  },
});
