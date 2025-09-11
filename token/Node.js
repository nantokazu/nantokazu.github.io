const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/verify', (req, res) => {
    const { token } = req.body;
    console.log('Received token:', token);
    // You can now use this token to perform actions on behalf of the user
    res.send({ message: 'Token received successfully' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
