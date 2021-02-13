
const { request } = require('express')
const mongoose = require('mongoose')


const schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true

    },
    mobile: {
        type: Number,
        required: true
    },
    
    jobRole: {
        type: String,
        required: true
    },

}, {
    timestamps: true
})


let model = mongoose.model('samples', schema)

class EmpModel {
    create = (req, error) => {
        try {
            console.log("Request in moddel", req)
            return new Promise((resolve, reject) => {
                model.create(req).then((result) => {
                    resolve(result)
                    console.log("Successfull", result)
                }).catch((error) => {
                    reject(error)
                })
            })
        } catch (error) {
            console.log(error)
        }
    }

    read = (req) => {
        try {
            console.log("Employee database is reading")
            return new Promise((resolve, reject) => {
                model.find(req).then((result) => {
                    resolve(result)
                }).catch((error) => {
                    reject(error)
                })
            })
        } catch (error) {
            
        }
    }

 



    update =(req)=>{
        console.log("We are inside the Model file's update function")
        try {
            console.log("We are updating the employee database")
            return new Promise((resolve,reject)=>{
               
                model.findByIdAndUpdate(req.id,req.data, { new:true }).then((result)=>{
                    resolve(result)
                    console.log("Record updated successfully "+result)
                }).catch((error)=>{
                    reject(error)
                })
            })
        } catch (error) {
            
        }
    }

    delete = (req,error) =>{
        try {
            return new Promise((resolve,reject)=>{
                model.findByIdAndDelete(req.params.id).then((result)=>{
                    resolve(result)
                }).catch((error)=>{
                    reject(error)
                })
            })
        } catch (error) {
            
        }
    }

    getOne = (id) => {
        
        console.log("We are inside model files's getOne function");
        return new Promise((resolve, reject) => {
          model.findById(id).then((result) => {
              resolve(result); 
              console.log("Data Successfully retrieved for given ID : ", result);
            }).catch((err) => {
              console.log(err);
              reject(err);
            });
        });
    };
}

module.exports = new EmpModel();