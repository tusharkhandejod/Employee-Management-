const service = require('../Service/services')
let response = {}

class controller {
    addEmployee = (req, res) => {
        console.log("Controller", req.body)
        try {
            console.log(req.body)
            service.addEmployee(req.body).then((result) => {
                response.success = true;
                response.message = result.message;
                response.data = result.data;
                return res.status(200).send(response);
            }).catch((error) => {
                response.success = false;
                response.message = error.message;
                response.error = error.error;
                return res.status(400).send(response);
            })
        } catch (error) {
            res.send(error)
        }
    }

    getEmployee = (req, res) => {

        try {
            service.getEmployee().then((result) => {
                response.success = result.flag;
                response.message = result.message;
                response.data = result.data;
                return res.send(response);
            }).catch((error) => {
                response.success = false;
                response.message = error.message;
                response.error = error.error;
                return res.status(400).send(response);
            })
        } catch (error) {
            res.send(error)
        }

    }
}

module.exports = new controller();