const express = require('express')
const path = require('path')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
  console.log('Server is up on port: ' + port)
})
