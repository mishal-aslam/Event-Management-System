const mongoose = require('mongoose')
const { type } = require('os')

const exhibitionSchema = mongoose.Schema({
    title: {
        type: String,
    }
    ,
    desc: {
        type: String,
    },
    startDate: {
        type: Date,
    },

    endDate: {
        type: Date,
    },
    fees: {
        type: String,
    }
})

const Events = mongoose.model('exhibition', exhibitionSchema, 'exhibition')

module.exports = Events