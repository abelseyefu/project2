const weaponsSeeds = require("../models/weaponsSeed.json")
const usersSeeds = require("../models/usersSeed.json")
const Users = require("../models/usersDb")
const Weapons = require("../models/weaponsDb")
require("../config/database")

Weapons.deleteMany().then(() => {
  return Weapons.create(weaponsSeeds);
}).then(console.log());
Users.deleteMany().then(()=> {
  return Users.create(usersSeeds)
}).then(console.log())
       
  
function seeds() {
  console.log('running')
  Users.find({}).then((users)=>{
    console.log(users)
    Weapons.find({}).then((weapons)=>{
      console.log(weapons)
      users.forEach((user)=>{
        user.weapons.push(weapons[0]._id)
        user.save()
      })

    })
  })
}

seeds();