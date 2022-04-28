const express = require('express');
const mongoose = require('mongoose');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
});

app.use((req, res, next) => {
  req.user = {
    _id: '5d8b8592978f8bd833ca8133',
  };

  next();
});

app.use('/users', require('./routes/user'));
app.use('/cards', require('./routes/card'));

const { PORT = 3000 } = process.env;

app.all('*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый путь не найден' });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
