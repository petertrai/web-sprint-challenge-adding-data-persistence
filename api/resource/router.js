// build your `/api/resources` router here
const resourcesRouter = require('express').Router()
const Resources = require('./model')

resourcesRouter.get('/', async (req, res, next) => {
    const resources = await Resources.get()
    res.status(200).json(resources)
})

resourcesRouter.post('/', (req, res, next) => {
    
})

resourcesRouter.use((err, req, res, next) => {//eslint-disable-line
    res.status(500).json({
        customMessage: 'Something went wrong inside the resources router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = resourcesRouter