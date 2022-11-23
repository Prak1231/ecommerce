'use strict'

const express = require('express')
const router = express.Router()

const { UserRegistration, userLogin } = require('../modules/user/userAuth')

const {
  getUsers,

  getUser,
  updateUser,
  deleteUser,
} = require('../modules/user/userController')

router.post('/create', UserRegistration)
router.post('/login', userLogin)

router.get('getUser/:id', getUser)
router.put('/updateUser/:id', updateUser)
router.delete('/deleteUser/:id', deleteUser)

router.get('/getAlluser', getUsers)

module.exports = router
