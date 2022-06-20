const mongoose = require('mongoose')



const userSchema = new mongoose.Schema({
    name: String,
    weapons:  [{type: mongoose.Schema.Types.ObjectId,
        ref: "Weapon" }]
    })  


const Users = mongoose.model('user', userSchema)

module.exports = Users