const request = require('request');

module.exports = {
index: function(req,res,next){
  res.render('index');
},
allStudent: function(req,res, next){
	let url = "https://alc-api.herokuapp.com/api/students";
	request(url, function(error,response,body){
	if (!error && response.statusCode == 200){
		let students = JSON.parse(body);
		res.render('allStudent', {students});	
	}
	});
},
profile: function(req,res, next){
	const studentId = req.params.id;
	//console.log(studentId);
	const url = "https://alc-api.herokuapp.com/api/students/" + studentId;
	request(url, function (error, response,body){
	if (!error && response.statusCode == 200){
		let justStudent = JSON.parse(body);
		//console.log(justStudent);
		res.render('studentProfile', {justStudent});
		}
	});
},
editprofile: function(req,res, next){
	const studentId = req.params.id;
	const url = "https://alc-api.herokuapp.com/api/students/" + studentId;
	request(url, function (error, response,body){
	if (!error && response.statusCode == 200){
		let data = JSON.parse(body);
		//console.log(data);
		res.render('editStudent', {data});
		}
	});
},
regStudent: function(req,res, next){
	let url = "https://alc-api.herokuapp.com/api/students";
	request(url, function(error,response,body){
	if (!error && response.statusCode == 200){
		let data = JSON.parse(body);
		res.render('newStudent', {data});	
	}
	});
},

addStudent: function(req,res, next){
	const studentInfo = req.body;
	const entities = {
		url: 'https://alc-api.herokuapp.com/api/students',
		method: 'POST',
		headers: {
			'Accept': 'application/json'
		},
		json: true,
		body: studentInfo
	};
	request(entities, function(error,response,body){
	if (!error && response.statusCode == 201){
		let success = response.message;
		//req.flash('success_msg', 'student added succefully');
		res.redirect('/allStudent');	
	}
	if (error && response.statusCode == 400){
		req.flash('error_msg', 'student Failed to add. check ur input');
		res.redirect('/newStudent');
	}
	});
},
updateStudent: function(req,res, next){
	const studentInfo = req.body.id;
	const data = {
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		dob: req.body.dob,
		class: req.body.class,
		address: req.body.address,
		sex: req.body.sex
	};
	console.log(data);
	const entities = {
		url: 'https://alc-api.herokuapp.com/api/students/' + studentInfo,
		method: 'PUT',
		headers: {
			'Accept': 'application/json'
			},
			json: true,
			body: data
		};
		request(entities, function(error,response,body){
		if (!error && response.statusCode == 200){
			res.redirect('/:id');	
		}
		if (error && response.statusCode == 400){
			res.redirect('/editStudent/:id');
		}
		});
},	
deleteStudent: function(req,res, next){
	const studentInfo = req.body.id;
	console.log(studentInfo);
	const entities = {
		url: 'https://alc-api.herokuapp.com/api/students/' + studentInfo,
		method: 'DELETE',
	};
	request(entities, function(error,response,body){
	if (!error && response.statusCode == 200){
		res.redirect('/allStudent');	
	}
	});
}
};