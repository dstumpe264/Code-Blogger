const { User } = require('../models');

const userData = [
    {
        name: 'stumpy',
        password: 'stumpy'
    }
]

const seedUsers = async () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUsers;