const express = require('express');
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

app.use(cors())

// ? when fetch post > req.body undefined (use it ass middle wire)
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Whats up my buddy');
});

const users = [
    { id: 1, name: 'shabnuoor', email: 'shabnoor@gmail.com', phone: '01628889929' },
    { id: 2, name: 'suchorita', email: 'suchorita@gmail.com', phone: '01628889929' },
    { id: 3, name: 'shabana', email: 'shabana@gmail.com', phone: '01628889929' },
    { id: 4, name: 'shuhonda', email: 'shuhonda@gmail.com', phone: '01628889929' },
    { id: 5, name: 'sraboni', email: 'sraboni@gmail.com', phone: '01628889929' },
    { id: 6, name: 'shalika', email: 'shalika@gmail.com', phone: '01628889929' },
    { id: 7, name: 'shalika', email: 'shalika@gmail.com', phone: '01628889929' },
]

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)
        console.log(matched);
    } else {
        res.send(users)
    }
})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users.find(user => user.id == id);
    res.send(user)
})

// receiving data from the client side
app.post('/user', (req, res) => {
    const user = req.body;
    user.id = (users.length + 1);
    res.send(user)
    console.log(req.body);
})

app.listen(port, () => {
    console.log(`listening port ${port}`);
})