require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;
<<<<<<< HEAD
const usersRoute =require('./routes/users');

app.use("/", usersRoute);
=======
>>>>>>> e878d353de5ca0f3797a15b3c98eee1d235020a2

app.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`);
});