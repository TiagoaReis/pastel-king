import React from "react";
import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListItem = ({ data, removeItem }) => {
  console.log("Listagem");
  //console.log(data);
  return (
    <View
      style={styles.item}
      // onLongPress={() => removeItem(data.id)}
    >
      {/* <Text style={styles.itemP2}>
        <Text style={styles.itemP2}>Ton: </Text>
        {data.description}
      </Text> */}
      {/* <Image source={{ uri: data.avatar }} style={styles.itemPhoto} /> */}
      <View style={styles.iconFoto}>
        <Text style={styles.itemPhoto}>
          {data.autor.substring(0, 1).toUpperCase()}
        </Text>
      </View>

      <View style={styles.itemInfo}>
        <Text style={styles.itemP1}>Autor: {data.autor}</Text>
        <Text style={styles.itemP2}>
          <Text style={styles.itemP2}>Para: </Text>
          {data.destinatario}
        </Text>
        <Text style={styles.itemP3}>{data.description}</Text>
      </View>
      <View style={styles.iconDelete}>
        <MaterialCommunityIcons
          name='delete'
          size={32}
          color='#FFF'
          onPress={() => removeItem(data.taskID)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "stretch",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#DAAA2F",
    opacity: 0.7,
    borderRadius: 7,
    padding: 10,
  },
  itemPhoto: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: "#FC6A03",
    color: "#000000",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 15,
    paddingTop: 5,
  },
  // itemPhoto: {
  //   width: 50,
  //   height: 50,
  //   borderRadius: 30,
  //   backgroundColor: "#ffffff",
  // },
  itemInfo: {
    marginLeft: 10,
    marginRight: 20,
    maxWidth: "65%",
  },
  itemP1: {
    fontSize: 22,
    color: "#FFFFFF",
    marginBottom: 5,
  },
  itemP2: {
    fontSize: 18,
    color: "#000000",
  },
  itemP3: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  iconDelete: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    flexGrow: 1,
  },
  iconFoto: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
});

export default ListItem;
