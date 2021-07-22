const conexao = require('../config/db.config')
const bcrypt = require('bcrypt');
const auth = require('../middleware/auth')

exports.login = (req, res) => {
    let user = req.body;
    console.log('LOGIN POST')   
    var sql = "SELECT * FROM user where email=?"
    
    conexao.mysqlConnection.query(sql, [user.email], (err, rows, fields) => {
        if (!err)            
            if(bcrypt.compare(rows[0].password , user.password))                
                res.send({token : auth.createToken(user)})
            else    
                res.send({Usuario : 'Senha inválida'})
        else
            res.send({Usuario : 'Usuário não encontrado'});
    }); 
};

exports.getAll = (req, res) => {
    conexao.mysqlConnection.query('SELECT * FROM user', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
};

exports.getOne = (req, res) => {
     conexao.mysqlConnection.query('SELECT * FROM user WHERE userID = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            res.send('User not found');
            console.log(err);
    })
};

exports.delete = (req, res) => {
    conexao.mysqlConnection.query('DELETE FROM user WHERE userID = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('delete realizado com sucesso.');
        else
            console.log(err);
    })
};

exports.create = (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 2);        
    var sql = "INSERT INTO user(name,email,password,admin)VALUES(?, ?, ?, ?)"    
    conexao.mysqlConnection.query(sql, [user.name,user.email, hash, user.admin], (err, rows, fields) => {
        if (!err)
            res.send('Usuario : '+ user.email + ' cadastrado com sucesso!!!');
        else
            console.log(err);
    })
};

exports.update = (req, res) => {
    let user = req.body;    
    var sql = `UPDATE user SET name =?, SET email=?, password=?, admin=? WHERE userID = ${user.userID}`    
    conexao.mysqlConnection.query(sql, [user.name,user.email, user.password, user.admin], (err, rows, fields) => {
        if (!err)
            res.send('Usuario : '+ user.email + ' atualizado com sucesso!!!');
        else
            console.log(err);
    })
};