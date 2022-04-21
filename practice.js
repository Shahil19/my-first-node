const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())
const users = [
    { id: 1, name: 'abana', email: 'abana@gmail.com' },
    { id: 2, name: 'babana', email: 'babana@gmail.com' },
    { id: 3, name: 'chabana', email: 'chabana@gmail.com' },
    { id: 4, name: 'dabana', email: 'dabana@gmail.com' },
    { id: 5, name: 'ebana', email: 'ebana@gmail.com' },
    { id: 6, name: 'fabana', email: 'fabana@gmail.com' },
]

app.get('/', (req, res) => {
    res.send('Practicing Node');
})

app.get('/users', (req, res) => {
    res.send(users)
    console.log('users send');
})

app.post('/user', (req, res) => {
    const user = req.body;
    user.id = users.length + 1;
    res.send(user)
    console.log(user);
})

app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const user = users.find(user => user.id == id)
    res.send(user)
})

app.listen(port)