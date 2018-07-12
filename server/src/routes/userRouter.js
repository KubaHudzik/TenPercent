const express = require('express');
const router = express.Router();
const userFetcher = require('../fetcher/userFetcher');

router.get('/user/:id', userFetcher.getUser);
router.delete('/user/:id', userFetcher.deleteUser);

module.exports = router;