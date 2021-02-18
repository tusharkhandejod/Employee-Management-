//This is server file
const express = require('express');
const dbConfig = require('./Config/config');
const route = require('./Routes/Route');
const mongoose = require('mongoose');
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');

console.log("Server js is running")
let port = 3000;

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true ,  }))
app.use(cors())
app.use(bodyParser.json())
app.use('/', route)
app.listen(port, () => {
    console.log("Server is starting at default port 3000")
})


mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database connected successfully");
}).catch(err => {
    console.log("error", err);
    process.exit();
});