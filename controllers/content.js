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

const getSingle = (req, res, next) =>{
    let id = req.params.id;
    Content.findById(id)
        .then(content =>{
            res.render('content/single_content', {
                content : content
            })
        })
        .catch(err => console.log(err))
};

const getContent = (req, res) =>{
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

/*const geteditContent = (req, res, next) =>{
    Content.findOne({
        _id : req.params.id
    })
        .then(content =>{
            res.render('content/edit')
        })

};*/

const geteditContent = (req, res, next) =>{
    let id = req.params.id;

    const updateContent = {
        title : req.body.title,
        image : req.body.image,
        description :req.body.description
    };

    Content.findByIdAndUpdate(id, {$set : updateContent})
        .then(content =>{
            res.render('content/edit')
        })
        .catch(err => console.log(err));
};

const editContent = (req, res, next) =>{
    Content.findOne({
        _id : req.params.id
    })
        .then(content =>{
            content.title = req.body.title;
            content.image = req.body.image;
            content.description = req.body.description;

            content.save()
                .then( () =>{
                    res.redirect('/')
                })
        })
};

const deleteContent = (req, res, next) =>{
    Content.remove({_id : req.params.id})
        .then(content =>{
            res.redirect('/content')
        })
};

module.exports = {
    getContent,
    postContent,
    getallContent,
    getSingle,
    geteditContent,
    deleteContent,
    editContent
};
