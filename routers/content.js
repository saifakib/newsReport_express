const express = require('express');
const router = express.Router();
const contentController = require('../controllers/content');

//router get
router.get('/', contentController.getallContent);
router.get('/:id', contentController.getSingle);
router.get('/add', contentController.getContent);

//router post
router.post('/add', contentController.postContent);

module.exports = router;