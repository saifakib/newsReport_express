const Content = require('../models/Content');
const mongoose = require('mongoose');

const getallContent = (req, res, next) =>{
    Content.find()
        .then(content =>{
            res.render('home', {
                contents : content,
            })
        })
        .catch(err => console.log(err))
};

const getSingle = (req, res) =>{
    let id = req.params.id;
    Content.findById(id)
        .then(content =>{
            res.render('content/single_content', {
                content : content
            })
        })
        .catch(err => console.log(err))
};

const getContent = (req, res, next) =>{
    res.render('content/add');
};

const postContent = (req, res, next) =>{
    const content = new Content({
        title : req.body.title,
        description : req.body.description,
        image : req.body.image
    });

    content.save()
        .then(content =>{
            res.render('/add');
            res.status(201).json({
                message : 'content saved',
                content
            })
        })
        .catch(err =>{
            res.status(500).json({
                message : "Don't saved",
                error : err
            })
        })
};

module.exports = {
    getContent,
    postContent,
    getallContent,
    getSingle
};
