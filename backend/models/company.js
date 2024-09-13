const mongoose = require('mongoose')
const { type } = require('os')

const companySchema = mongoose.Schema({
    name: {
        type: String,
    }
    ,
    address: {
        type: String,
    },
    email: {
        type: String,
    },
    contactNo: {
        type: Number,
    },
    industry: {
        type: String,
    },
    

})

const Events = mongoose.model('company', companySchema, 'company')

module.exports = Events