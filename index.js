const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000 

app.use(cors())
app.use(express.json())

// const users = [
//   { id: 1, name: 'khaled', email: 'khaled@gmail.com' },
//   { id: 2, name: 'shihab', email: 'shihab@gmail.com' },
//   { id: 3, name: 'abdullah', email: 'abdullah@gmail.com' },
//   { id: 4, name: 'roman', email: 'roman@gmail.com' }
// ]

app.get('/users', (req, res) => {
  res.json(users)
})

app.post('/users', (req, res) => {
    console.log("Post method");
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.json(newUser);
})

app.listen(port, () => {
  console.log('Server running on port 3000')
})
