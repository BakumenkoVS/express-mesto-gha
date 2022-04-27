const express = require('express');
const mongoose = require('mongoose');

const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://localhost:27017/mestodb');

const app = express();

app.get('/', (req, res) => {
  res.send('hi pidr123123123ggggg loh');
});
