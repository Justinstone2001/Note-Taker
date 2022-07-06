const fs = require('fs');
const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;
const notes = require('./db/db.json');
const { uuid } = require('./public/utils/id');

const app = express();
app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
);

app.get('api/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './db/db.json'))
});

app.get('/api/notes', (req, res) => {
  console.info(`${req.method} get notes request recieved`);
  res.json(notes);
});

app.listen(PORT, () =>
  console.log(`Express server listening on port http://localhost:${PORT}`)
);