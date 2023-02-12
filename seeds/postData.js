const { Post } = require('../models');

const postData = [
    {
        title: 'Initial Post',
        text: 'Lorem Ipsum',
        user_id: 1
    }
]

const seedPosts = async () => Post.bulkCreate(postData);

module.exports = seedPosts;