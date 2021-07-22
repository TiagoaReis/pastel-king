const conexao = require("../config/db.config");
const bcrypt = require("bcrypt");
const auth = require("../middleware/auth");

exports.getAll = (req, res) => {
  conexao.mysqlConnection.query("SELECT * FROM task", (err, rows, fields) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
};

exports.getOne = (req, res) => {
  conexao.mysqlConnection.query(
    "SELECT * FROM task WHERE taskID = ?",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else res.send("Task not found");
      console.log(err);
    }
  );
};

exports.delete = (req, res) => {
  conexao.mysqlConnection.query(
    "DELETE FROM task WHERE taskID = ?",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) res.send("Deleted successfully.");
      else console.log(err);
    }
  );
};

exports.create = (req, res) => {
  let task = req.body;
  var sql =
    "INSERT INTO task(description,date_limit, autor, destinatario, status)VALUES(?, ?, ?, ?, ?)";
  conexao.mysqlConnection.query(
    sql,
    [
      task.description,
      task.date_limit,
      task.autor,
      task.destinatario,
      task.status,
    ],
    (err, rows, fields) => {
      if (!err) res.send("Created successfully");
      else console.log(err);
    }
  );
};

exports.update = (req, res) => {
  let task = req.body;
  var sql = `UPDATE task SET description=?, date_limit=? WHERE taskID = ${task.taskID}`;
  conexao.mysqlConnection.query(
    sql,
    [task.description, task.date_limit],
    (err, rows, fields) => {
      if (!err) res.send("Update successfully");
      else console.log(err);
    }
  );
};
