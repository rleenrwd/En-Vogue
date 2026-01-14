if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
const express = require('express');
const app = express();
const connectDb = require('./database/db');

const PORT = process.env.PORT || 5000;

connectDb();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log('App now listening on port:', PORT)
})