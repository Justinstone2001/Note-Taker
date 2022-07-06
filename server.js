const fs = require('fs');
const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;
const notes = require('./db/db.json');

const app = express();