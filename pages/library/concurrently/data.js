export const step101 = `$ npm init -y`
export const step102 = `$ npm install --save express concurrently cors`
export const step103 = 
`"scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1",
    "client": "npm start --prefix client",
    "dev": "concurrently \\"nodemon server\\" \\"npm run client\\""
},`
export const step110 = 
`const express = require('express');
const cors = require('cors')


// app configuration
const app = express();

app.use(cors());

// API_END_POINT routes
require('./routes/API_END_POINTRoutes')(app)

// run app
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log('server started'));`
export const step111 = 
`module.exports = (app) => {
    app.get('/api/lorem-ipsum', (req, res) => {
        try {
            res.status(200).json({ message: "GET /api/lorem-ipsum"  })
        } catch (error) {
            res.status(400).json({ message: "Error with GET /api/lorem-ipsum"  })
        }
    });

    app.post('/api/lorem-ipsum', (req, res) => {
        try {
            res.status(200).json({ message: "POST /api/lorem-ipsum"  })
        } catch (error) {
            res.status(400).json({ message: "Error with POST /api/lorem-ipsum"  })
        }
    })
}`
export const step120 = `$ npm create-react-app client`
export const howTo000 = `$ npm run dev`



// https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/