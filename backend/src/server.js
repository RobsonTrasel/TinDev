const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
/**
 * Initialize server :D
 * @author Robson Fernando
 * @global 
 */

const port = 4444;
const server = express();
server.use(express.json())
server.use(routes);

/**
 * DB Connection
 * @param mongoose
 * Init
 */
mongoose.connect('mongodb+srv://admin:ApLya4m70dPd0tT4@cluster0.pwmki.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true
})



server.listen(port);