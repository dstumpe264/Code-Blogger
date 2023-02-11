const { User } = require('../models');

const userData = [
    {
        name: 'Stumpy',
        password: 'Stumpy'
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;