const express = require('express');
const cors = require('cors');
const server = express();

server.use(cors());

server.get('/videos', (request, response) => {
    response.json({
        "videos": [
            {
                "title": "How to be productive",
                "image": "https://images.unsplash.com/photo-1593642532871-8b12e02d091c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            },
            {
                "title": "Modern city",
                "image": "https://images.unsplash.com/photo-1603644631175-94fcac6c1408?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            },
            {
                "title": "Art introduction",
                "image": "https://images.unsplash.com/photo-1603687057592-02df807b7640?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            },
        ]
    });
})

server.listen(3000, () => console.log('Server started on port 3000'));