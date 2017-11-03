const express = require('express');
const router = express.Router();
const frontendControllers = require('../controller/frontendControllers');


//home routes
router.route('/')
.get(frontendControllers.index);

router.route('/allStudent')
.get(frontendControllers.allStudent)
.post(frontendControllers.deleteStudent);

router.route('/newStudent')
.get(frontendControllers.regStudent)
.post(frontendControllers.addStudent);


router.route('/:id')
.get(frontendControllers.profile);


router.route('/editStudent/:id')
.get(frontendControllers.editprofile)
.post(frontendControllers.updateStudent);

module.exports= router;