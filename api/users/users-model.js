const db = require('../../data/dbConfig');

module.exports = {
    find: () => {
        return db('users');
    },

    insert: async (user) => {
        const [id] = await db('users').insert(user);
        return db('users').where({id}).first();
    },

    delete: (id) => {
        return db('users').where({id}).del();
    }
}