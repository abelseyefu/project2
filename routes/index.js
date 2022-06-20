var express = require('express');
var router = express.Router();
const userCtrl = require("../controller/usersController")
// SHOWS ALL WEAPONS
router.get('/weapons', userCtrl.renderAll);
// FORM TO CREATE NEW USER 
router.get('/weapons/new', userCtrl.newUser)
// CREATES NEW USER
router.post('/weapons/new', userCtrl.createUser)
// SHOWS DETAILS PAGE FOR ONE USER
router.get('/weapons/:id', userCtrl.renderOne)
// ADDS WEAPON IN USER'S DATA
router.post("/weapons/user/:id", userCtrl.addWeaponToUser)
// EDITS THE WEAPON IN USER.WEAPONS DATA
router.put('/weapons/user/:id', userCtrl.editWeaponInUser)

// REMOVES WEAPON FROM USERS DATA
router.delete('/weapons/user/:id', userCtrl.deleteWeaponInUser)








module.exports = router