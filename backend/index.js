const express = require("express");
var app = express();
const bodyparser = require("body-parser");
require("dotenv-safe").config({
  allowEmptyValues: true,
  example: ".env",
});
const moment = require("moment");
const { auth } = require("./middleware/auth");
const userController = require("./controllers/user");
const taskController = require("./controllers/task");
const emailController = require("./controllers/email");
const conexao = require("./config/db.config");

app.use(bodyparser.json());

//Test of Conection
conexao.mysqlConnection.connect((err) => {
  if (!err) console.log("DB connection succeded.");
  else
    console.log(
      "DB connection failed \n Error : " + JSON.stringify(err, undefined, 2)
    );
});

app.listen(process.env.PORT || 3000, () =>
  console.log("Express server is runnig at port no : 3000")
);

//Routes
app.get("/user", auth, userController.getAll);
app.get("/user/:id", auth, userController.getOne);
app.delete("/user/:id", auth, userController.delete);
app.post("/user", userController.create);
app.put("/user", auth, userController.update);
app.post("/login", userController.login);

app.get("/task", auth, taskController.getAll);
app.get("/task/:id", auth, taskController.getOne);
app.delete("/task/:id", auth, taskController.delete);
app.post("/task", auth, taskController.create);
app.put("/task", auth, taskController.update);

app.post("/email", auth, emailController.sendMail);
