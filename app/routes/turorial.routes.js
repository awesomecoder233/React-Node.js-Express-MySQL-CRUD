const tutorials = require("../controllers/tutorial.controller.js");
module.exports = app => {
	
	var router = require("express").Router();
	router.post("/", tutorials.create);
	app.use('/api/tutorials', router);
}