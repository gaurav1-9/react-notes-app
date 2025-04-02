const express = require('express');
const morgan = require('morgan');
const notes = require('./router/notes');
const app = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use('/notes',notes);

app.listen(3000, ()=>console.log("Listening on port 3000..."));