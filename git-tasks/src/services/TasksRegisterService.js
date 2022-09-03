const db = require('../db');
const TaskNotFoundError  = require('../errors/TaskNotFoundError');
const NoPermissionError = require('../errors/NoPermissionError')

class TasksRegisterService {

    async getTasks(user_id){
        return await db("tasks").where({user_id});
    }

    async getTasksById(user_id, id){
        const task = await db("tasks").where({id}).first();

        if (!task) {
            throw new TaskNotFoundError('Task not found!')
        }

        if(task.user_id !== user_id){
            throw new TaskNotFoundError("You don't have permission!")
        }

        return task;
    }

    async addTask(user_id, data){
        return await (db('tasks').insert({user_id, ...data}).returning('*'))[0];
    }

    async deleteTask(user_id, id){
        await this.getTasksById(user_id, id);

        return await db('tasks').where({id}).delete();
    }

    async updateTask(user_id, id, data){
        await this.getTasksById(user_id, id);

        return await (db('tasks').where({id}).update(data).returning('*'))[0];
    }
}

module.exports = new TasksRegisterService();