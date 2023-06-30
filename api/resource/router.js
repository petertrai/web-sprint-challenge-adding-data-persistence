// build your `/api/resources` router here
const resourcesRouter = require('express').Router()

resourcesRouter.get('/', (req, res, next) => {
    res.json({ message: 'resources wired up 8D' })
})

resourcesRouter.use((err, req, res, next) => {//eslint-disable-line
    res.status(500).json({
        customMessage: 'Something went wrong inside the resources router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = resourcesRouter