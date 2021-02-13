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
            
            return model.read().then((result) => {
                return ({ message: "Record found", data: result, code: 200 })
            }).catch((error) => {
                return ({ message: "Record not found", data: error, code: 401 })
            })
        } catch (error) {
            res.send(error)
        }
    }
    

  



    updateEmployee =(req)=>{
        console.log("We are inside the services")
        try {
            let id = req.params.id;
            console.log("id : "+id)
            let employeeData = {
                id:req.params.id,
                data:req.body
            }
            return model.update(employeeData).then((result)=>{
                return ({ message: "Employee record is updated ", data: result }) 
                console.log("Print data : "+result)
            }).catch((error)=>{
                return ({ message: "Error Employee record is not updated ", error: error })
            })
        } catch (error) {
            res.send(error)
        }
    
    }

        
    
        

    deleteEmployee =(req,next)=>{
        try {
            return model.delete(req,next).then((result)=>{
                return ({ message:"Employee record is deleted successfully", flag:true, code: 200,  data:result })
            }).catch((err)=>{
                return ({ message:"Error Employee record is not deleted", flag:true, code: 400,  data:err })
            })
        } catch (error) {
            next(error)   
        }
    }

    
    getServicesOne=(req)=>{
        console.log("We are inside the services");
        console.log("User requesting the data for this ID : ",req);
        return model.getOne(req).then((result) =>{
        return result;
        }).catch((err) =>{
        return err;
        })
  }

}



module.exports = new EmployeeServices;