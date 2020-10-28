const express = require('express');
const cors = require('cors');
const server = express();

const database = require('./src/db');

server.use(cors());

database.query("SELECT * FROM users;", (errors, result) => {
    console.log(result)
});

server.get('/videos', (_, response) => {
    response.json({
        "videos": [
            {
                "title": "How to be productive",
                "image": "https://images.unsplash.com/photo-1593642532871-8b12e02d091c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            }
        ]
    });
});


server.listen(3000, () => console.log('Server started on port 3000'));