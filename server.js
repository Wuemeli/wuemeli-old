const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const users = {
    "admin": "password"
};

app.get('/', (req, res) => {
    res.send(`
        <form action="/login" method="post">
            <input type="text" name="username" placeholder="Username">
            <input type="password" name="password" placeholder="Password">
            <input type="submit" value="Login">
        </form>
    `);
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        res.send('Invalid username or password');
        return;
    }

    if (!users[username] || users[username] !== password) {
        res.send('Invalid username or password');
        return;
    }

    res.send(`Welcome, ${username}!`);
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
