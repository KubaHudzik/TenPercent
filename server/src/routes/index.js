const express = require('express');
const userRoutes = require('./userRouter');

const router = express.Router();

router.use('/api', userRoutes);

module.exports = router;