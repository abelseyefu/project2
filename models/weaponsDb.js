const mongoose = require('mongoose')

const weaponSchema = new mongoose.Schema({
    img: String,
    name: String,
    character: String,
    description: String

})
const Weapons = mongoose.model('Weapon', weaponSchema)

module.exports = Weapons

