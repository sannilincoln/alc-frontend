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
		res.render('allStudent', {students})	
	}
	});
},
profile: function(req,res, next){
	const studentId = req.params.id
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
	const studentId = req.params.id
	console.log(studentId);
	console.log('edt prorlie controller fired');
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
		res.render('newStudent', {data})	
	}
	});
}

}