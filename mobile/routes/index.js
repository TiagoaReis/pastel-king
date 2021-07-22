import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/auth";
import { setTokenStorage, getTokenStorage } from "../src/utils/storage";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

const Routes = () => {
  const { token } = useContext(AuthContext);
  const { signed } = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  console.log("Index");
  console.log(signed);

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
