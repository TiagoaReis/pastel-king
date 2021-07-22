import React, { useState, createContext } from "react";
import {
  setTokenStorage,
  getTokenStorage,
  deleteTokenStorage,
} from "../src/utils/storage";
import axios from "axios";
const AuthContext = createContext({ signed: true });

const AuthProvider = ({ children }) => {
  //const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  console.log("Auth");
  tokenStore();

  async function tokenStore() {
    const tokenVery = await getTokenStorage();
    if (tokenVery !== null) {
      setToken(tokenVery);
      console.log("Token local encontrado");
    } else {
      console.log("Token não encontrado");
    }
  }

  async function signIn(newUser) {
    console.log("signIn");
    console.log(newUser);
    const response = await axios
      .post("http://rest-api-app-smn.herokuapp.com/login", newUser)
      .then(
        (response) => {
          console.log(response.data.token);
          setTokenStorage(response.data.token);
          setToken(response.data.token);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  return (
    <AuthContext.Provider
      value={{ token, signed: !!token, tokenStore, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider, AuthContext };
