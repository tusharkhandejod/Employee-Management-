// const { response } = require('express')
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
    startDate: {
        type: String,
        // required: true
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

        }
    }

    read = () => {
        try {
            console.log("Employee database is reading")
            return new Promise((resolve, reject) => {
                model.find().then((result) => {
                    resolve(result)
                }).catch((error) => {
                    reject(error)
                })
            })
        } catch (error) {

        }
    }
}

module.exports = new EmpModel();