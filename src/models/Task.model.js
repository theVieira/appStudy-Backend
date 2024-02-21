const prisma = require('../services/prisma')

const findAll = async () => {
  const tasks = await prisma.task.findMany()
  return tasks
}

const createTask = async name => {
  const task = await prisma.task.create({
    data: {
      name
    }
  })

  return task
}

const removeTask = async id => {
  id = Number(id)
  
  const task = await prisma.task.delete({
    where: {
      id
    }
  })

  return task
}

module.exports = {
  findAll,
  createTask,
  removeTask
}