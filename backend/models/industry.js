const mongoose = require('mongoose')
const { type } = require('os')

const industrySchema = mongoose.Schema({
    title: {
        type: String,
    }

})

const Events = mongoose.model('industry', industrySchema, 'industry')

module.exports = Events