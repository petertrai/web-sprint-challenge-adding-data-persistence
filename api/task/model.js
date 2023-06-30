const db = require('../../data/dbConfig')

async function get() {
    const result = await db('tasks as t')
    .join('projects as p', 'p.project_id', 't.project_id')
    
    return result
}

async function getTaskById(id) {
    const result = await db('tasks').where('task_id', id).first()
    return result
}

async function post(task) {
    const [id] = await db('tasks as p').insert(task)
    const insertedTask = await getTaskById(id)
    return insertedTask
}



module.exports = {
    get,
    getTaskById,
    post,
}