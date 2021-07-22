import AsyncStorage from "@react-native-async-storage/async-storage";

export const setDataStorage = async (data) => {
  try {
    await AsyncStorage.setItem("@amd-pastelking", JSON.stringify(data));
  } catch (error) {
    // Error saving data
  }
};

export const getDataStorage = async () => {
  try {
    return JSON.parse(await AsyncStorage.getItem("@amd-pastelking"));
  } catch (error) {}
};

export const setTokenStorage = async (data) => {
  try {
    await AsyncStorage.setItem("@amd-pastelking-token", JSON.stringify(data));
    console.log("Token salvo");
  } catch (error) {
    // Error saving data
  }
};
export const deleteTokenStorage = async (data) => {
  try {
    await AsyncStorage.removeItem(
      "@amd-pastelking-token",
      JSON.stringify(data)
    );
    console.log("Token removido");
  } catch (error) {
    // Error saving data
  }
};
export const getTokenStorage = async () => {
  try {
    return JSON.parse(await AsyncStorage.getItem("@amd-pastelking-token"));
    //return true;
  } catch (error) {}
};
