const model = require('../Model/Model')
const { modelNames } = require('mongoose');

class EmployeeServices {
    addEmployee = (req, res) => {
        console.log("Request data is service", req)
        try {

            return model.create(req).then((result) => {
                return ({ message: "Record added successfully", data: result })
            }).catch((error) => {
                return ({ message: "Failed to add the record", data: error })
            })
        } catch (error) {
            res.send(error)
        }
    }

    getEmployee = () => {
        try {
            // let object = {}
            return model.read().then((result) => {
                return ({ message: "Record found", data: result, code: 200 })
            }).catch((error) => {
                return ({ message: "Record not found", data: error, code: 401 })
            })
        } catch (error) {
            res.send(error)
        }
    }
}

module.exports = new EmployeeServices;