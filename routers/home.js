const express = require('express');
const router = express.Router();


//Get Router
router.get('/', (req, res) =>{
    res.render('home')
});

module.export = router;