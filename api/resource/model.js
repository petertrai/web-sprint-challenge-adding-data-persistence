// build your `Resource` model here
const db = require('../../data/dbConfig')

async function get() {
    const result = await db('resources')
    return result
}

async function getResourceById(id) {
    const result = await db('resources').where('resource_id', id).first()
    return result
}

async function post(resource) {
    const [id] = await db('resources as r').insert(resource)
    const insertedResource = await getResourceById(id)
    return insertedResource
}



module.exports = {
    get,
    getResourceById,
    post,
}