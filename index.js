const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000 

app.use(cors())
app.use(express.json())
let users = []

app.get('/users', (req, res) => {
  res.json(users)
})

app.post('/users', (req, res) => {
  const newUser = req.body
  newUser.id = users.length + 1
  users.push(newUser)
  res.json(newUser)
})

app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const index = users.findIndex(user => user.id === id)

  if (index !== -1) {
    const deletedUser = users.splice(index, 1)
    res.json(deletedUser[0])
  } else {
    res.status(404).json({ message: 'User not found' })
  }
})

app.listen(port, () => {
  console.log('Server running on port 3000')
})
