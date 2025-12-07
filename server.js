const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get("/", (request, response) => {
  response.json({
    name: "Minh",
    age: 20,
    description: "student",
  });
});

app.post('/', (request, response) => {
    response.json({
        name: 'yumi',
        age: 20,
    })
})

app.listen(port)