const express = require('express');
const chorec = require('./controllers/chores_controller');
const morgan = require('morgan')
// var cors = require('cors');

const app = express();

// app.use(cors());
app.use(express.json());
app.use(morgan('combined'))

app.post('/api/chores', chorec.create);
app.get('/api/chores/:id', chorec.read);
app.get('/api/chores', chorec.readAll);
app.put('/api/chores/:id', chorec.update);
app.delete('/api/chores/:id', chorec.delete);


const port = 3333;

app.listen(port, () => console.log(`Server is listening on port ${port}`))





