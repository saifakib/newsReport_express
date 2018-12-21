const express = require('express');
const router = express.Router();
const contentController = require('../controllers/content');

//router get
router.get('/', contentController.getallContent);
router.get('/:id', contentController.getSingle);
router.get('/add', contentController.getContent);
router.get('/edit/:id', contentController.geteditContent);

//router update
router.put('/:id', contentController.editContent);

//router post
router.post('/add', contentController.postContent);

//router delete
router.delete('/:id', contentController.deleteContent);

module.exports = router;