const { Post } = require('../models');

const postData = [
    {
        title: 'Initial Post',
        text: 'Lorem Ipsum'
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;