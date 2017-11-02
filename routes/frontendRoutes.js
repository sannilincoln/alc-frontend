const express = require('express');
const router = express.Router();
const frontendControllers = require('../controller/frontendControllers')
//const request = require('request');

//home routes
router.route('/')
.get(frontendControllers.index);

router.route('/allStudent')
.get(frontendControllers.allStudent);
router.route('/newStudent')
.get(frontendControllers.regStudent)
.post();


router.route('/:id')
.get(frontendControllers.profile)
.delete();

router.route('/editStudent/:id')
.get(frontendControllers.editprofile)
.patch();



// router.route('/allStudent')
// .get(function(req,res,next){
//   res.render('allStudent',{data: data});
// });

// router.route('/newStudent')
// .get(function(req,res,next){
//   res.render('newStudent');
// })
// .post(function(req,res,next){
//   res.send('registered');
// });

// router.route('/studentProfile')
// .get(function(req,res,next){
//   res.render('studentProfile');
// })
// .put(function(req,res,next){
//   res.render('editStudent');
// })
// .delete(function(req,res,next){
//   res.render('studentProfile');
// });


module.exports= router;