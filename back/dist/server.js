"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const { sequelize } = require('./models');
const cors = require('cors');
const router = require('./routes');
app.use(cors({
    origin: '*',
    credentials: true,
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
sequelize
    .sync({ force: false })
    .then(() => {
    console.log('Connect');
})
    .catch((e) => {
    console.log(e);
    console.log('Disconect');
});
// app.use(router);
app.get('/api', (req, res) => {
    res.send('하이');
});
app.listen(4000, () => {
    console.log('Server ON');
});
