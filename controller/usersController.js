const Weapons = require("../models/weaponsDb")
const Users = require("../models/usersDb")



const renderAll = (req, res) => {
    Weapons.find({}, (err, weapons)=>{
        if(err){
            res.json(err)
            return
        }
        console.log(weapons)
        res.render('home', {weapons: weapons})

    })
}

const renderOne = (req, res) => {
    Weapons.findById(req.params.id, (err, weapon)=>{
        res.render('details', {weapon})
    })
    

}

const newUser = (req, res) => {
    Users.create(req.body, (err, user)=>{
      
    })
    
    res.render('newUser')
}

const createUser = (req, res) => {
 
    let newUser = new Users(req.body)
    newUser.save(()=>{
        console.log("user was saved")
        res.redirect("/weapons")
    })

}

const addWeaponToUser = async (req, res) =>{
    let user = await Users.findOne({name:"Abel"})
    user.weapons.push(req.params.id)
   await user.save()
    // remove 0 if theres an issue
    let fullUser = await Users.find({}).populate("weapons")
    console.log(fullUser)
    res.render("weaponIntoUser", {fullUser})
}


const editWeaponInUser = async(req, res) => {
    let user = await Users.findOne({name: "Abel"})
    let weaponIntoUser = await Weapons.findByIdAndUpdate( req.params.id, {$set:{name: req.body.name}} )
 
    console.log(weaponIntoUser)

    let fullUser = await Users.find({}).populate("weapons")
res.render("weaponIntoUser", {fullUser})
}

const deleteWeaponInUser = async(req, res) => {
let user = await Users.findOne({name: "Abel"})
let weaponIntoUser = await Weapons.findByIdAndDelete(req.params.id)
let fullUser = await Users.find({}).populate("weapons")
res.render("weaponIntoUser", {fullUser})


}

module.exports = {
   renderOne,
    renderAll,
    newUser,
    createUser,
    addWeaponToUser,
    editWeaponInUser,
    deleteWeaponInUser
}