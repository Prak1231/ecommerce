'use strict'

const express = require('express')
const router = express.Router()

const {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require('../modules/user/userController')

router.post('/create', createUser)
router.get('getUser/:id', getUser)
router.put('/updateUser/:id', updateUser)
router.delete('/deleteUser/:id', deleteUser)

router.get('/getAlluser', getUsers)

module.exports = router
