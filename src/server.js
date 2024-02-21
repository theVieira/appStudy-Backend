const express = require('express')
const app = express()
app.use(express.json())

const cors = require('cors')

app.use(cors())

const router = require('./router')

app.use(router)

app.listen(3333, () => {
  console.log('server running');
})