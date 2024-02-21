const express = require('express')
const router = express.Router()

const indexRoute = require('./routes/index')
router.use('/', indexRoute)

module.exports = router