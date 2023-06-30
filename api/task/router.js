// build your `/api/resources` router here
const tasksRouter = require('express').Router()

tasksRouter.get('/', (req, res, next) => {
    res.json({ message: 'tasks wired up 8D' })
})

tasksRouter.use((err, req, res, next) => {//eslint-disable-line
    res.status(500).json({
        customMessage: 'Something went wrong inside the tasks Router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = tasksRouter