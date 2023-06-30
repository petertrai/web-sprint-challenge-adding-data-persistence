// build your `Resource` model here
const db = require('../../data/dbConfig')

async function get() {
    const result = await db('resources')
    return result
}

async function post(resource) {
    const result = await db('resources as r').insert(resource)
    return result
}



module.exports = {
    get,
    post,
}