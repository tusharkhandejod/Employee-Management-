const route = require('express').Router();
const controller = require('../Controller/Controller')


console.log("Router is running")
route.post('/employee/addemployee', controller.addEmployee);
route.get('/employee/reademployee', controller.getEmployee);


module.exports = route;