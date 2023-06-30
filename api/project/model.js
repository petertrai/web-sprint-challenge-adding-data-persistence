const db = require('../../data/dbConfig')

async function get() {
    const result = await db('projects')
    return result
}

async function getProjectById(id) {
    const result = await db('projects').where('project_id', id).first()
    return result
}

async function post(project) {
    const [id] = await db('projects as p').insert(project)
    const insertedProject = await getProjectById(id)
    return insertedProject
}



module.exports = {
    get,
    getProjectById,
    post,
}