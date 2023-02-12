const router = require('express').Router();
const postRoutes = require('./postRoutes');
const userRoutes = require('./userRoutes');

// prefix all routes defined in `exampleRoutes.js` with `/examples
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;
