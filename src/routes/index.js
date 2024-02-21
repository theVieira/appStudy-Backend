const express = require('express')
const router = express.Router()

const {
  createTask,
  removeTask, 
  findAll
} = require('../models/Task.model')
const prisma = require('../services/prisma')

router.get('/', async (req, res) => {
  try {
    const tasks = await findAll()
    res.status(200).json({tasks: tasks})

  } catch (e) {
    res.status(500).json({error: e})
  }
})

router.post('/', async (req, res) => {
  const { name } = req.body
  console.log(name);
  try {
    const task = await createTask(name)
    res.status(201).json({created: task})

  } catch (e) {
    res.status(422).json({error: e})
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const task = await removeTask(id)
    res.status(200).json({deleted: task})

  } catch (e) {
    res.status(422).json({error: e})
  }
})

module.exports = router