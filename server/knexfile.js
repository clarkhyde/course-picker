require('dotenv').config();

module.exports ={
    client: "mysql",
    connection:{
        host:"127.0.0.1",
        user: process.env.db_username,
        password: process.env.db_password,
        database:process.env.db_name,
        charset:"utf8"
    }
};