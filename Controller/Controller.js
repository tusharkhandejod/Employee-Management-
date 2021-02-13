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


    
    
    

    updateEmployee =(req,res)=>{
        try {
        console.log("We are inside the updateEmployee controller",req.body)
        service.updateEmployee(req).then((result)=>{
            response.success=true;
            response.message=result.message;
            response.data= result.data;
            return res.status(200).send(response);
        }).catch((err)=>{
            response.success=false;
            response.message=err.message;
            response.data = err.error;
            return res.status(400).send(response);
        })     
        } catch (error) {
           
        }
    }


   

    deleteEmployee = (req,res,next) =>{
        try {
            service.deleteEmployee(req).then((result)=>{
                console.log(result);
                response.success = result.flag;
                response.message = result.message;
                response.data = result.data;
                return res.status(result.code).send(response);
            }).catch((err)=>{
                response.success = false;
                response.message = err.message;
                response.data = err.error;
                return res.status(400).send(response);
            })
        } catch (error) {
            next(error);
        }
    }

    getEmployeeListOne=(req,res)=>{
        console.log("We are inside the controller");
        service.getServicesOne(req.params.id).then((result)=>{
            return res.send(result)
        }).catch((err)=>{
            return res.send(err)
        })
      }
    

}


module.exports = new controller();