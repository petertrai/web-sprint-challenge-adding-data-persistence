const projects = [
    { project_name: 'Broccoli Pesto Pasta'},
    { project_name: 'Lemon Chicken'},
    { project_name: 'Salmon en Papillote'},
]

const resources = [
    { resource_name: 'Broccoli' },
    { resource_name: 'Pesto' },
    { resource_name: 'Pasta' }
]
 
const project_resources = [
    { project_id: 1, resource_id: 1},
    { project_id: 1, resource_id: 2},
    { project_id: 1, resource_id: 3},

    { project_id: 3, resource_id: 1},
    { project_id: 2, resource_id: 1},

]

const tasks = [
    //broccoli 
    { task_description: 'Heat anssss', project_id: 1},
    { task_description: 'Add Boccoli', project_id: 1},
    { task_description: 'Add peso sd', project_id: 1},
    //chicken
    { task_description: 'Heat ovssen', project_id: 2},
    { task_description: 'Put chicken', project_id: 2},
    { task_description: 'Put in oven', project_id: 2},
    // salmon
    { task_description: 'Fishs salmr', project_id: 3},
    { task_description: 'Cook salmon', project_id: 3}
]



exports.seed = async function (knex) {
    await knex('projects').insert(projects)
    await knex('resources').insert(resources)
    await knex('tasks').insert(tasks)
    await knex('project_resources').insert(project_resources)
}