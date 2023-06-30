// build your `/api/resources` router here
const projectsRouter = require('express').Router()

projectsRouter.get('/', (req, res, next) => {
    res.json({ message: 'projects wired up 8D' })
})

projectsRouter.use((err, req, res, next) => {//eslint-disable-line
    res.status(500).json({
        customMessage: 'Something went wrong inside the projects router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = projectsRouter