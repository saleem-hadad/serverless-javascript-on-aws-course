const express = require('express');
const cors = require('cors');
const server = express();
const bodyParser = require('body-parser');

const database = require('./src/db');

server.use(cors());
server.use(bodyParser.json());

server.get('/videos', (_, response) => {
    database.query("SELECT * FROM videos;", (errors, result) => {
        response.json({
            videos: result
        })
    });
});

server.post('/videos', (request, response) => {
    let title = request.body.title;
    let description = request.body.description;
    let photo = request.body.photo;
    
    database.query(`INSERT INTO videos (title, description, photo) VALUES ('${title}', '${description}', '${photo}')`)

    response.send("Done");
});


server.listen(3000, () => console.log('Server started on port 3000'));

module.exports = server;