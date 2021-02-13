const route = require('express').Router();
const controller = require('../Controller/Controller')


console.log("Router is running")
route.post('/employee/addemployee', controller.addEmployee);
route.get('/employee/reademployee', controller.getEmployee);
route.get('/employee/getEmployeeListOne/:id',controller.getEmployeeListOne)
route.put('/employee/updateemployee/:id',controller.updateEmployee);
route.delete('/employee/deleteemployee/:id',controller.deleteEmployee);

module.exports = route;